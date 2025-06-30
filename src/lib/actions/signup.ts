"use server";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/Config";
import { sendEmail } from "../resend";
import VerificationOTPEmail from "@/emails/verification-otp";

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
    "auth/too-many-requests": "Too many requests. Try again later.",
    "auth/network-request-failed": "Network error. Check your connection.",
};

function generateOPT() {
    const otp = Math.floor(Math.random() * 600000 + 100000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
    return { otp, expiresAt }
}

export default async function signupAction({ username, email, password }: User): Promise<Response> {

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const { otp, expiresAt } = generateOPT();

        // Add a new document in collection "users"
        await setDoc(doc(db, "users", user.uid), {
            username,
            email,
            fullName: null,
            avatar: null,
            coverImage: null,
            isVerified: false,
            otp,
            otpExpiresAt: expiresAt,
            createdAt: serverTimestamp(),
        });

        // send verification email
        await sendEmail({ to: email, subject: "Verify your email address", react: VerificationOTPEmail({ verificationCode: otp }) })

        return { success: true, message: "Account created successfully." };

    } catch (error: any) {
        console.error("Signup error:", error);
        const message = firebaseErrorMessages[error.code] || "Signup failed. Please try again.";
        return { success: false, message };
    }
}