import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [
  CredentialsProvider({
    name: "credentials",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "username" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      if (
        credentials.username === "super-cute-otter" &&
        credentials.password === "super-cute-otter"
      ) {
        return {
          name: "Cute Otter",
          email: "test@example.com",
        };
      } else {
        return null;
      }
    },
  }),
  GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
];

export const authOptions = {
  providers,
};
export default NextAuth(authOptions);
