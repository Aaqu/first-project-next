import {Rating} from "./Rating";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

interface ProductDetails {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  longDescription: string;
}

interface ProductDetailsProps {
  data: ProductDetails;
}

export const ProductDetails = ({data}: ProductDetailsProps) => {
  return (
    <>
      <div className="bg-white p-8">
        <Head>
          <title>{data.title}</title>
        </Head>
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </div>
      <h2 className="p-4 text-xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <article className="p-4 prose lg:prose-lg">
        <ReactMarkdown>{data.longDescription}</ReactMarkdown>
      </article>

      <Rating rating={data.rating}/>
    </>
  );
};

type ProductListItem = Pick<ProductDetails, "id" | "title" | "price" | "category" | "thumbnailUrl" | "thumbnailAlt">;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({data}: ProductListItemProps) => {
  return (
    <>
      <div className="bg-white p-4">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
          quality={50}
        />
      </div>

      <div className="text-xl pt-4 pl-4">
        {data.price}$
      </div>

      <div className="pt-4 px-4 text-gray-500">{data.category}</div>

      <Link href={`/products/${data.id}`}>
        <a>
          <h3 className="px-4 pb-4 text-lg h-24">{data.title}</h3>
        </a>
      </Link>
    </>
  );
};