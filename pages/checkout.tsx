import {CheckoutForm} from "../components/CheckoutForm";
import {FormEventHandler} from "react";
import {useForm} from "react-hook-form";


interface CheckoutFormData {
  address: string;
  apartment: string;
  cardNumber: string;
  city: string;
  company: string;
  cvc: string;
  emailAddress: string;
  nameOnCard: string;
  expirationDate: string;
  postalCode: string;
  region: string;
  sameAsShipping: boolean;
}


export default function CheckoutPage() {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>();
  const onSubmit = handleSubmit(data => console.log(data));

  // const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();
  //   console.log(e.target);
  //   console.log(Object.fromEntries(Array.from(e.target).map(target => [target.name, target.value])))
  //
  // }

  return (
    <div className="flex flex-col w-3/5">
      {/*<CheckoutForm />*/}
      <form onSubmit={onSubmit}>
        <div>
          <span className="text-xl">Contact information</span>
          <div className="grid grid-cols-1 gap-1">
            <label htmlFor="email-address">Email address</label>
            <input type="email" id="email-address" autoComplete="email" {...register("emailAddress", { required: "This field is required" })} />
            {
              errors.emailAddress && (
                <span role="alert" className="text-red-500 text-sm font-bold">{errors.emailAddress.message}</span>
              )
            }
          </div>

          <div className="grid grid-cols-1 gap-1">
            <label htmlFor="nameOnCard">Name on card</label>
            <input type="text" {...register("nameOnCard")} />
          </div>

          <div className="grid grid-cols-1 gap-1">
            <label htmlFor="cardNumber">Card number</label>
            <input type="number" {...register("cardNumber")} />
          </div>

          <div className="grid grid-cols-2 gap-1">
            <div className="grid grid-cols-1 gap-1">
              <label htmlFor="expiration-date">Expiration date (MM/YY)</label>
              <input type="text" id="expiration-date" {...register("expirationDate", { required: true, pattern: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/ }) }  placeholder="MM/YY"/>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <label htmlFor="cvc">CVC</label>
              <input type="number" {...register("cvc")} placeholder="123"/>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xl">Shipping address</span>
          <div className="grid grid-cols-1 gap-1">
            <label htmlFor="company">Company</label>
            <input type="text" {...register("company")} />
          </div>

          <div className="grid grid-cols-1 gap-1">
            <label htmlFor="address">Address</label>
            <input type="text" {...register("address")} />
          </div>

          <div className="grid grid-cols-1 gap-1">
            <label htmlFor="apartment">Apartment, suite, etc.</label>
            <input type="text" {...register("apartment")} />
          </div>

          <div className="grid grid-cols-3 gap-1">
            <div className="grid grid-cols-1 gap-1">
              <label htmlFor="city" className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">City</label>
              <input type="text" {...register("city")}  className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>
            <div className="grid grid-cols-1 gap-1">
              <label htmlFor="region" className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">State/Province </label>
              <input type="text" {...register("region")}  className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>
            <div className="grid grid-cols-1 gap-1">
              <label htmlFor="address" className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Postal code</label>
              <input type="text" {...register("postalCode")} className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <span className="text-xl ">Billing information</span>
          <div className="my-2">
            <input type="checkbox" id="same-as-shipping" {...register("sameAsShipping")}  className="h-4 w-4 accent-emerald-800 rounded-sm mt-1 float-left mr-2 cursor-pointer" />
            <label htmlFor="same-as-shipping" className="text-gray-800">Same as shipping information </label>
          </div>
        </div>


          <button className="float-right px-8 py-2 mt-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600" type="submit">
            Continue
          </button>

      </form>
    </div>
  )
}