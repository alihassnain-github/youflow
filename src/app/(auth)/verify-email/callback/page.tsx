"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { applyActionCode, getAuth } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { doc, updateDoc } from "firebase/firestore";
import { app, db } from "@/firebase/config";
import { firebaseErrorMessages } from "@/utils/firebaseErrors";
import { useToast } from "@/context/ToastContext";

export default function Page() {

    const { addToast } = useToast()!

    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const mode = searchParams.get("mode");
        const oobCode = searchParams.get("oobCode");

        if (mode === "verifyEmail" && oobCode) {
            const auth = getAuth(app);

            applyActionCode(auth, oobCode)
                .then(async () => {

                    const user = auth.currentUser;
                    if (user) {
                        const userRef = doc(db, "users", user.uid);
                        await updateDoc(userRef, { isVerified: true });
                    }

                    router.replace("/");
                })
                .catch((error) => {
                    let errorMessage = "Failed to verify email.";

                    if (error instanceof FirebaseError) {
                        console.error("Firebase Auth Error:", error.code, error.message);
                        errorMessage = firebaseErrorMessages[error.code] || errorMessage;
                    }
                    addToast(errorMessage, "error", 5000);
                });
        } else {
            router.replace("/verify-email");
        }
    }, [searchParams, router]);

    return (
        <div className="w-full flex flex-col items-center p-4 text-center">
            <span className="loading loading-dots loading-xl text-primary"></span>
            <p className="text-sm text-muted mt-2">Verifying your email...</p>
        </div>
    );
}
