import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {authorizedApolloClient} from "../../../graphql/apolloClient";
import {
  GetAccountByEmailDocument,
  GetAccountByEmailQuery,
  GetAccountByEmailQueryVariables
} from "../../../generated/graphql";
import * as bcrypt from "bcrypt"

export const authOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Logowanie hasłem",
      credentials: {
        username: {label: "Email", type: "text", placeholder: "email@example.com"},
        password: {label: "Hasło", type: "password"}
      },
      async authorize(credentials, req) {
        if(!credentials) {
          return null
        }

        // console.log(credentials);

        const userByEmail = await authorizedApolloClient.query<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>({
          query: GetAccountByEmailDocument,
          variables: {
            email: credentials.username
          }
        })

        // console.log(userByEmail);

        if (!userByEmail.data.account?.password) {
          return null;
        }

        const arePasswordsEqual = await bcrypt.compare(credentials.password, userByEmail.data.account.password)
        if (!arePasswordsEqual) {
          return null;
        }

        return {
          id: userByEmail.data.account.id,
          email: userByEmail.data.account.email,
        }
      }
    })
  ]
}
export default NextAuth(authOptions)