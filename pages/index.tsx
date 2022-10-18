import { ProductListItem} from "../components/Product";
import {InferGetStaticPropsType} from "next";

export default function Home({dataNew, dataSale}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1 className="font-bold text-2xl pt-12 pb-3">NEW!</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {dataNew.map(product => {
          return <li key={product.id} className="shadow-xl border-2">
            <ProductListItem
              data={{
                id: product.id,
                title: product.title,
                price: product.price,
                category: product.category,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title,
              }}
            />
          </li>
        })}
      </ul>
      <h1 className="font-bold text-2xl pt-16 pb-3">SALE!</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {dataSale.map(product => {
          return <li key={product.id} className="shadow-xl border-2">
            <ProductListItem
              data={{
                id: product.id,
                title: product.title,
                price: product.price,
                category: product.category,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title,
              }}
            />
          </li>
        })}
      </ul>
    </>
  )
}

export const getStaticProps = async () => {
  const resNew = await fetch(`https://naszsklep-api.vercel.app/api/products?take=5&offset=0 `);
  const dataNew: StoreApiResponse[] = await resNew.json();

  const resSale = await fetch(`https://naszsklep-api.vercel.app/api/products?take=5&offset=50 `);
  const dataSale: StoreApiResponse[] = await resSale.json();

  return {
    props: {
      dataNew,
      dataSale,
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
