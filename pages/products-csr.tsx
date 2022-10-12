import {useQuery} from "react-query";
import {ProductDetails} from "../components/ProductDetails";
import {Layout} from "../components/Layout";

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

const getProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();
  return data;
};

export default function ProductsPage() {
  const {isLoading, data, error} = useQuery('products', getProducts);

  if (isLoading) {
    return <Layout>Loading...</Layout>
  }

  if (!data || error) {
    return <Layout>Coś poszło nie tak</Layout>
  }

  return (
    <Layout>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.map(product => {
          return <li key={product.id} className="shadow-xl border-2">
            <ProductDetails
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
    </Layout>
  );
}