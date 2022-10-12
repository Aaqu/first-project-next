import {Rating} from "./Rating";

interface ProductDetails {
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

interface ProductDetailsProps {
  data: ProductDetails;
}

export const ProductDetails = ({data}: ProductDetailsProps) => {
  return (
    <>
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt}/>
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <Rating rating={data.rating}/>
    </>
  );
};

type ProductListItem = Pick<ProductDetails, "title" | "thumbnailUrl" | "thumbnailAlt">;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({data}: ProductListItemProps) => {
  return (
    <>
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt}/>
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
    </>
  );
};