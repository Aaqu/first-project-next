import {InferGetStaticPropsType} from "next";
import {ProductListItem} from "../components/ProductDetails";

export default function ProductsPage({data}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {data.map(product => {
        return <li key={product.id} className="shadow-xl border-2">
          <ProductListItem
            data={{
              id: product.id,
              title: product.title,
              thumbnailUrl: product.image,
              thumbnailAlt: product.title,
            }}
          />
        </li>
      })}
    </ul>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

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

