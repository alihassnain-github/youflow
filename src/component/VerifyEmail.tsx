"use client";

import { sendEmailVerification } from "firebase/auth";
import { useToast } from "@/context/ToastContext";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { auth } from "@/firebase/config";
import { firebaseErrorMessages } from "@/utils/firebaseErrors";
import { useAuth } from "@/context/AuthContext";

export default function VerifyEmailForm() {

    const { currentUser } = useAuth()!;
    const { addToast } = useToast()!;

    const [loading, setLoading] = useState(false);

    async function handleClick() {
        try {
            setLoading(true);
            if (auth.currentUser) {
                await sendEmailVerification(auth.currentUser);
                addToast("Verification email sent.", "success", 5000);
            }

        } catch (error) {
            let errorMessage = "Failed to resend verification email.";

            if (error instanceof FirebaseError) {
                console.error("Firebase Auth Error:", error.code, error.message);
                errorMessage = firebaseErrorMessages[error.code] || errorMessage;
            }
            addToast(errorMessage, "error", 5000);
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="w-full max-w-md">
            <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-100 text-center">

                {/* Logo Spinner */}
                <div className="mx-auto mb-4">
                    <div className="relative h-8 w-8 mx-auto">
                        <div className="absolute animate-ping inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></div>
                        <div className="relative inline-flex rounded-full h-8 w-8 bg-primary"></div>
                    </div>
                </div>

                <h1 className="text-center font-bold text-xl md:text-2xl mb-4">Please verify your email</h1>

                <p className="text-sm mb-4">
                    We just sent an email to <strong>{currentUser?.email}</strong>.
                    <br />
                    Click the link in the email to verify your account.
                </p>

                <button
                    type="button"
                    disabled={loading}
                    onClick={handleClick}
                    className="btn btn-default btn-block"
                >
                    {loading ? (
                        <>
                            <span className="loading loading-spinner"></span> Sending...
                        </>
                    ) : (
                        "Resend email"
                    )}
                </button>

            </div>
        </div>
    )
}