//any request sent to auth is going to be handled here, this branch is required to look like this (the folders and the [...nextauth].ts file)

import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

export default NextAuth(authOptions) 