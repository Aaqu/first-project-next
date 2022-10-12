import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { InferGetStaticPropsType } from "next";
import {Product} from "../components/Product";

export default function ProductsPage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {data.map(product => {
            return <li key={product.id} className="shadow-xl border-2">
              <Product
                data={{
                  title: product.title,
                  description: product.description,
                  thumbnailUrl: product.image,
                  thumbnailAlt: product.title,
                  rating: product.rating.rate,
                }}
              />
            </li>
          })}
        </ul>
      </Main>
      <Footer />
    </div>
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

