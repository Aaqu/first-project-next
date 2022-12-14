import {NextApiHandler} from "next";
import * as bcrypt from "bcrypt";
import {authorizedApolloClient} from "../../graphql/apolloClient";
import {CreateAccountDocument, CreateAccountMutation, CreateAccountMutationVariables} from "../../generated/graphql";
const SignupHandler: NextApiHandler = async (req, res) =>  {
  const {
    email,
    password,
  } = req.body;

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await authorizedApolloClient.mutate<CreateAccountMutation, CreateAccountMutationVariables>({
    mutation: CreateAccountDocument,
    variables: {
      email,
      password: passwordHash,
    }
  })

  res.json({
    userId: user.data?.createAccount?.id
  })
}
export default SignupHandler;