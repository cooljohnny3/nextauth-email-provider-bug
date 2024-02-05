import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

const handler = NextAuth({
  providers: [
    EmailProvider({
      id: "example-id",
      name: "example-name",
    }),
  ],
});

export { handler as GET, handler as POST };
