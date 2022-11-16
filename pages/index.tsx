import {apolloClient} from "../graphql/apolloClient";
import {ProductListItem} from "../components/Product";
import {
  CreateProductReviewDocument,
  CreateProductReviewMutation, CreateProductReviewMutationVariables,
  GetProductListDocument,
  GetProductListQuery, useCreateProductReviewMutation
} from "../generated/graphql";
import {InferGetStaticPropsType} from "next";
// {data}: InferGetStaticPropsType<typeof getStaticProps>
export default function Home() {
  const [createReview, {data, loading, error}] = useCreateProductReviewMutation()

  const addReview = async () => {
    const response = await createReview ({
      variables: {
        review: {
          headline: "next app comment",
          name: "test",
          email: "test@a.a",
          content: "opinia",
          rating: 5
        }
      }
    })

    console.log(response)
  }

  return (
    <>
      {/*<h1 className="font-bold text-2xl pt-12 pb-3">NEW!</h1>*/}
      {/*<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">*/}
      {/*  {data.products.map(product => {*/}
      {/*    return <li key={product.id} className="shadow-xl border-2">*/}
      {/*      <ProductListItem*/}
      {/*        data={{*/}
      {/*          id: product.id,*/}
      {/*          title: product.name,*/}
      {/*          price: product.price,*/}
      {/*          thumbnailUrl: product.images[0].url,*/}
      {/*          thumbnailAlt: product.name,*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    </li>*/}
      {/*  })}*/}
      {/*</ul>*/}
      <button type="button" onClick={addReview} className="border border-gray-600 p-2 ">Dodaj komentarz</button>
      {loading && <div>Ładowanie..</div>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

    </>
  )
}

// export const getStaticProps = async () => {
//   const {data} = await apolloClient.query<GetProductListQuery>({
//     query: GetProductListDocument,
//   });
//
//   return {
//     props: {
//       data,
//     },
//   };
// };