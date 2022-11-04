import {apolloClient} from "../graphql/apolloClient";
import {ProductListItem} from "../components/Product";
import {GetProductListDocument, GetProductListQuery} from "../generated/graphql";
import {InferGetStaticPropsType} from "next";

export default function Home({data}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1 className="font-bold text-2xl pt-12 pb-3">NEW!</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {data.products.map(product => {
          return <li key={product.id} className="shadow-xl border-2">
            <ProductListItem
              data={{
                id: product.id,
                title: product.name,
                price: product.price,
                thumbnailUrl: product.images[0].url,
                thumbnailAlt: product.name,
              }}
            />
          </li>
        })}
      </ul>
    </>
  )
}

export const getStaticProps = async () => {
  const {data} = await apolloClient.query<GetProductListQuery>({
    query: GetProductListDocument,
  });

  return {
    props: {
      data,
    },
  };
};