import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";


const signupFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
})
type SignupFormData = yup.InferType<typeof signupFormSchema>

export default function SignupPage() {
  const session = useSession()
  const router = useRouter()



  const {register, setValue, handleSubmit, formState} = useForm<SignupFormData>({
    resolver: yupResolver(signupFormSchema)
  })

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch('api/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
  })

  if (session.status === "authenticated") {
    router.push("/");
    return  null;
  }

  return (
    <form onSubmit={onSubmit}>
      <div>Rejestracja</div>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" autoComplete="email" {...register("email", {required: true}) }/>
      <span role="alert" className="text-red-500 text-sm font-bold">
       {formState.errors.email?.message}
      </span>
      <label htmlFor="email">Password</label>
      <input type="password" id="password" autoComplete="password" {...register("password", {required: true}) }/>
      <span role="alert" className="text-red-500 text-sm font-bold">
       {formState.errors.password?.message}
      </span>
      <button type="submit" className="p-2 bg-pink-600">zarejestruj</button>
    </form>
  )
}