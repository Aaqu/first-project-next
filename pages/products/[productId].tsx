import {InferGetStaticPropsType} from "next";
import {ProductDetails} from "../../components/Product";
import Link from "next/link";
import {serialize} from "next-mdx-remote/serialize";
import {InferGetStaticPaths} from "../../types";
import {apolloClient} from "../../graphql/apolloClient";
import {
  GetProductDetailsByIdDocument,
  GetProductDetailsByIdQuery, GetProductDetailsByIdQueryVariables,
  GetProductsIdsDocument, GetProductsIdsQuery
} from "../../generated/graphql";

export default function ProductIdPAge({data}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!data) {
    return <div>Coś poszło nie tak...</div>
  }

  return (
    <>
      <Link href="/products">
        <a>Wróć</a>
      </Link>
      <ProductDetails data={{
        id: data.id,
        title: data.name,
        price: data.price,
        description: data.description,
        thumbnailUrl: data.images[0].url,
        thumbnailAlt: data.name,
        rating: 5,
        longDescription: data.longDescription,
      }}/>
    </>

  );
};

export const getStaticPaths = async () => {
  const {data} = await apolloClient.query<GetProductsIdsQuery>({
    query: GetProductsIdsDocument,
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productId: product.id,
        }
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({params}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    }
  }

  const {data} = await apolloClient.query<GetProductDetailsByIdQuery, GetProductDetailsByIdQueryVariables>({
    variables: {
      id: params.productId
    },
    query: GetProductDetailsByIdDocument,
  });


  if (!data.product) {
    return {
      props: {},
      notFound: true,
    }
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await serialize(data.product.description),
      }
    },
  };
};