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
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="pt-7 px-4 text-gray-500">{data.category}</div>
      <h2 className="px-4 pb-4 text-xl font-bold">{data.title}</h2>
      <div className="bg-white p-8">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </div>
      <div className="text-3xl p-4">{data.price}$</div>
      <Rating rating={data.rating}/>
      <p className="p-4">{data.description}</p>
      <article className="p-4 prose lg:prose-lg">
        <ReactMarkdown>{data.longDescription}</ReactMarkdown>
      </article>


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