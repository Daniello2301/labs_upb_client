'use server';

import { axiosInstance } from "./axios";
import { z } from "zod";
import { AuthRequest, AuthResponse } from "../lib/user-definitions";

const SignUpSchema = z.object({
    id: z.number(),
    idUPB: z.number({
        required_error: "El idUPB es requerido",
    }),
    documento: z.number({
        required_error: "El documento es requerido",
    }),
    nombre: z.string({
        required_error: "El nombre es requerido",
    }),
    apellido: z.string({
        required_error: "El apellido es requerido",
    }),
    email: z.string({
        required_error: "El email es requerido",
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
    }),
    roles: z.array(z.string({
        required_error: "El rol es requerido",
    }))
})

const SignInSchema = z.object({
    email: z.string({
        required_error: "El email es requerido",
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
    }),
});

const SignUp = SignUpSchema.omit({ id: true });

export type State = {
    errors?:{
        idUPB?: string[];
        documento?: string[];
        nombre?: string[];
        apellido?: string[];
        email?: string[];
        password?: string[];
        roles?: string[];
    };
    message?: string | null;
}

export async function signUp(prevState: State, formData: FormData) {
    const validatedData = SignUpSchema.safeParse({
        idUPB: Number(formData.get("idUPB")),
        documento: Number(formData.get("documento")),
        nombre: formData.get("nombre"),
        apellido: formData.get("apellido"),
        email: formData.get("email"),
        password: formData.get("password"),
        roles: formData.getAll("roles"),
    });


    if (!validatedData.success) {
        return {
            errors: validatedData.error.errors,
            message: "Validation Error: Please check the form",
        };
    }

    const data = validatedData.data;

    try {
        const response = await axiosInstance.post("/auth/register", data);
        
        console.log(response)
        
    } catch (error: any) {
        console.log(error?.response?.data.message);
        if (error) {
            return {
                message: error?.response?.data.message,
            };
        }
    }
    
}

export async function signInAPI(formData: FormData) {

    try {
        
        const response = await axiosInstance.post<AuthResponse | any>("/auth/authenticate", {
            email: formData.get("email"),
            password: formData.get("password"),
        });

        return response?.data;
        
    } catch (error : any) {
        return error?.response?.data;
    }


}
