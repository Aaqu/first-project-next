import {NextApiHandler} from "next";

const stripeWebhook: NextApiHandler = (req, res) => {
  // @todo verify singing secret
  console.log(req.body);

  res.status(204).end();
}
export default stripeWebhook;