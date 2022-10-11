import {Header} from "../components/Header";
import {Main} from "../components/Main";
import {Footer} from "../components/Footer";
import {InferGetStaticPropsType} from "next";

export default function ProductsPage({data}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        {data[0].title}
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
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  rating:      {
    rate:  number;
    count: number;
  }
}

