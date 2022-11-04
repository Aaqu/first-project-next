import {InferGetStaticPropsType} from "next";
import {ProductListItem} from "../components/Product";
import {apolloClient} from "../graphql/apolloClient";
import {GetProductListDocument, GetProductListQuery} from "../generated/graphql";

export default function ProductsPage({data}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
  );
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
