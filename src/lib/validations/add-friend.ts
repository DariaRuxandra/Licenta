import {z} from 'zod';

export const addFriendValidator = z.object({
    //validates the format and whether or not the user entered a string as input. There's no need in making the request if the format is wrong
    email: z.string().email()
})

