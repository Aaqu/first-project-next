import {GetStaticPaths, GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType} from "next";
import {Layout} from "../../components/Layout";
import {ProductDetails} from "../../components/ProductDetails";
import Link from "next/link";

export default function ProductIdPAge({data}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!data) {
    return <Layout>Coś poszło nie tak...</Layout>
  }

  return (
    <Layout>
      <Link href="/products">
        <a>Wróć</a>
      </Link>
      <ProductDetails data={{
        id: data.id,
        title: data.title,
        description: data.description,
        thumbnailUrl: data.image,
        thumbnailAlt: data.title,
        rating: data.rating.rate,
      }}/>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        }
      }
    }),
    // [
    //   {
    //     params: {
    //       productId: '1',
    //     },
    //   },
    // ],
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

  const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
  const data: StoreApiResponse | null = await res.json();

  return {
    props: {
      data,
    },
  };
};

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export type InferGetStaticPaths<T> = T extends () => Promise<{
    paths: Array<{ params: infer R }>;
  }>
  ? { params?: R }
  : never;