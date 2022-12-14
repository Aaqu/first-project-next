import {Rating} from "./Rating";
import Image from "next/image";
import Link from "next/link";
import {NextSeo} from 'next-seo';
import {AaquReactMarkdown} from "./AaquReactMarkdown";
import {MarkdownResult} from "../types";
import {useCartState} from "./Cart/CartContext";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  longDescription: MarkdownResult;
}

interface ProductDetailsProps {
  data: Product;
}

export const ProductDetails = ({data}: ProductDetailsProps) => {
  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://first-project-next-aaqu.vercel.app/products/${data.id}`}
        openGraph={{
          url: `https://first-project-next-aaqu.vercel.app/products/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.thumbnailUrl,
              alt: data.thumbnailAlt,
              type: 'image/jpeg',
            },
          ],
          site_name: 'First-Project-Next',
        }}
      />
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
        <AaquReactMarkdown>
          {data.longDescription}
        </AaquReactMarkdown>
      </article>
    </>
  );
};

type ProductListItem = Pick<Product, "id" | "title" | "price" | "thumbnailUrl" | "thumbnailAlt">;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({data}: ProductListItemProps) => {
  const cartState = useCartState();
  return (
    <Link href={`/products/${data.id}`}>
      <a>
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

        <div className="p-4">
          <h3 className="pb-4 text-lg h-24">{data.title}</h3>
          <button
            className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={(e) => {
              e.preventDefault()
              cartState.addItemToCard({
                id: data.id,
                title: data.title,
                price: data.price,
                count: 1
              })
            }}
          >
            Dodaj do koszyka
          </button>
        </div>
      </a>
    </Link>
  );
};