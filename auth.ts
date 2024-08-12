import NextAuth from 'next-auth'
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod'
import { axiosInstance } from '@/lib/axios' 
import { AuthResponse } from '@/lib/user-definitions';


async function authenticate(email: string, password: string) : Promise<AuthResponse | undefined> {
    try {
        const response = await axiosInstance.post('/auth/authenticate', {
            email,
            password,
        });

        if(response.status === 200){
            console.log(response)

            return response.data;
        }
    } catch (error) {
        console.log(error)
        throw new Error('Invalid credentials');
    }
}


export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            // Define los campos que espera el formulario de login
            credentials: {
                email: { label: "Email", type: "text", placeholder: "your-email@example.com" },
                password: { label: "Password", type: "password", placeholder: "password" },
            },
            async authorize(credentials){

                const parsedCredentials = z.object({
                    email: z.string().email(),
                    password: z.string().min(6),
                }).safeParse(credentials);

                if(parsedCredentials.success){
                    const { email, password } = parsedCredentials.data;

                    const user = await authenticate(email, password);

                    if(!user){
                        return null;
                    }

                    return {
                        id: user.id.toString(),
                        name: user.nombre,
                        email: user.email,
                        accessToken: user.accessToken,
                        refreshToken: user.refreshToken,
                    };
                    
                }

                return null;

            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
              token.accessToken = user.accessToken;
              token.refreshToken = user.refreshToken;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            return session;
        }
    }

})