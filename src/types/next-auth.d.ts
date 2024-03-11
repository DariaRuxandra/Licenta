import type {Session, User} from 'next-auth'
import {JWT } from 'next-auth/jwt'

type UserId = string  //an alternative to an interface

declare module 'next-auth/jwt' {
    interface JWT {
        id: UserId
    }
}

declare module 'next-auth' {
    interface Session {
        user: User & {
            id: UserId
        }
    }
}