import {useRouter} from "next/router";

export default function  CheckoutSuccessPage() {
  const router = useRouter();
  console.log(router.query.session_id);
  return <div>Success!</div>
}