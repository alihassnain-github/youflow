"use server";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/Config";

interface User {
    username: string;
    email: string;
    password: string;
}

interface Response {
    success: boolean;
    message: string;
}

const firebaseErrorMessages: Record<string, string> = {
    "auth/email-already-in-use": "This email is already in use.",
    "auth/invalid-email": "Invalid email format.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/too-many-requests": "Too many requests. Try again later.",
    "auth/network-request-failed": "Network error. Check your connection.",
};

export default async function signupAction({ username, email, password }: User): Promise<Response> {

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        return { success: true, message: "Account created successfully." };

    } catch (error: any) {
        const message = firebaseErrorMessages[error.code] || "Signup failed. Please try again.";

        return { success: false, message };

    }
}