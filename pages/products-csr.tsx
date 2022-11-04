// import {useQuery} from "react-query";
// import {ProductListItem} from "../components/Product";
//
// export interface StoreApiResponse {
//   id: string;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   }
//   longDescription: string;
// }

// const getProducts = async () => {
//   const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=24&offset=0`);
//   const data: StoreApiResponse[] = await res.json();
//   return data;
// };

export default function ProductsPage() {
  // const {isLoading, data, error} = useQuery('products', getProducts);
  //
  // if (isLoading) {
  //   return <div>Ładowanie...</div>
  // }
  //
  // if (!data || error) {
  //   return <div>Coś poszło nie tak</div>
  // }

  return (
    <div>W budowie</div>
    // <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    //   {data.map(product => {
    //     return <li key={product.id} className="shadow-xl border-2">
    //       <ProductListItem
    //         data={{
    //           id: product.id.toString(),
    //           title: product.title,
    //           price: product.price,
    //           thumbnailUrl: product.image,
    //           thumbnailAlt: product.title,
    //         }}
    //       />
    //     </li>
    //   })}
    // </ul>
  );
}