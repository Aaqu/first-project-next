import {useCartState} from "../components/Cart/CartContext";
import {loadStripe} from "@stripe/stripe-js";
import {Stripe} from "stripe";
import {useSession, signIn, signOut} from "next-auth/react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const CartContent = () => {
  const cartState = useCartState();

  console.log(cartState);

  const pay = async () => {
    const stripe = await stripePromise

    if (!stripe) {
      throw new Error("Something went wrong")
    }

    const res = await fetch("/api/checkout", { method: "POST", headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(cartState.items.map(cartItem => {
        return {
          id: cartItem.id,
          count: cartItem.count
        }
      }))
    })

    const { session }: {session: Stripe.Response<Stripe.Checkout.Session>} = await res.json();

    await stripe.redirectToCheckout({ sessionId: session.id })
  }



  // const session = useSession()
  //
  // if(session.status === 'authenticated') {
  //   session.data
  // }

  return (
    <div className="col-span-2">
      <ul className="divide-y divide-emerald-400">
        {cartState.items.map((item, index) => (
          <li
            key={`${item.title}_${index}`}
            className="py-1.5 flex justify-between"
          >
            <div>{item.count} x {item.title}</div>
            <div className="flex items-center">
              <div>{item.price}$</div>
              <button
                className="ml-4 text-red-500"
                onClick={() => cartState.removeItemFromCard(item.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                   stroke="currentColor" className="w-5 h-5" aria-label="Usuń element">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={pay} type="button" className="mt-4 w-full bg-emerald-800 text-white p-3 rounded-lg">Złóż zamówienie</button>
    </div>
  );
};

const CartSummary = () => {
  const cartState = useCartState();

  return (
    <div>
      Podsumowanie koszyka
      <div>Liczba elementów: {cartState.items.length}</div>
    </div>
  );
};

export default function CartPage() {


  return (
    <div className="grid grid-cols-3 gap-8">
      <CartContent/>
      <CartSummary/>
    </div>
  )
}