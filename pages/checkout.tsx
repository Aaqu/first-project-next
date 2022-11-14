import {CheckoutForm} from "../components/CheckoutForm";
import {FormEventHandler} from "react";

export default function CheckoutPage() {
  const handleFormSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      {/*<CheckoutForm />*/}
      <form onSubmit={handleFormSubmit}>
        <label>
          Email zamawiającego
          <input type="email" name="" />
        </label>
        <button className="border border-gray-500" type="submit">
          Zamów
        </button>
      </form>
    </div>
  )
}