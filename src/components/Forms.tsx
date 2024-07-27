"use client";
import React, { useState } from "react";
import envelope from "@/components/assets/icons/envelope.svg";
import padlock from "@/components/assets/icons/padlock.svg";
import Image from "next/image";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/services/firebase"; // Adjus
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const Forms: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [alertText, setAlertText] = useState<string>("");


    const router = useRouter()


    const handleChangeEmail = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log("there is an error");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Reset errors
        setEmailError("");
        setPasswordError("");

        if (email === "") {
            setEmailError("can't be empty");
        } else if (!emailRegex.test(email)) {
            setEmailError("Invalid email address");
        } else if (password === "") {
            setPasswordError("can't be empty");
        } else if (password.length < 8) {
            setPasswordError("invalid password");
        } else {
            // Proceed with saving the values or other logic
            // Clear the form inputs
            setLoading(true);

            signInWithEmailAndPassword(auth, email, password)
                .then((response) => {
                    setAlertText(
                        " welcome aboard. you will be redirected to the home page shortly"
                    );
                    setLoading(false);
                    setTimeout(() => {
                        router.push("/home")
                    }, 3000)
                })
                .catch((error) => {
                    console.log(error.message);
                    setLoading(false);
                    setAlertText(error.message);
                });

            setEmail("");
            setPassword("");
        }
    };

    return (
        <div className="flex flex-col w-[25.9rem]  tablet:w-[33rem] sphone:w-[100%] ">
            {alertText && (
                <Alert className=" w-[50vw] tablet:w-[30rem] text-base tablet:text-normal te py-[2rem] absolute right-[2rem] top-[2rem] bg-purple text-white  " >
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Hi there!!</AlertTitle>
                    <AlertDescription>{alertText}</AlertDescription>
                </Alert>
            )}

            <form
                onSubmit={handleSubmit}
                noValidate
                className="flex sphone:w-[100%]   gap-[2rem]  flex-col "
            >
                <div className="flex flex-col sphone:w-[100%] phone:w-[100%] gap-[0.33rem] ">
                    <label
                        className="leading-[1.5rem] sphone:w-[100%] phone:w-[100%] "
                        htmlFor="email"
                    >
                        Email address
                    </label>
                    <div
                        className={`flex group focus-within:border-purple  focus-within:ring-purple focus-within:ring-3 focus-within:shadow-purple focus-within:shadow-sm focus-within:ring-opacity-[25%] gap-[1rem] items-center flex-center flex-row h-[4rem] px-[1.33rem]  ${emailError || passwordError ? "border-[red]" : "border-border"
                            } border-[0.083rem] py-[1rem] phone:w-[100%] sphone:w-[100%] rounded-[0.67rem]  `}
                    >
                        <Image src={envelope} quality={100} alt="envelope-icon" />
                        <input
                            className=" placeholder:text-darkGrey phone:w-[20.92rem] tablet:w-[28rem] laptop:text-normal h-[2rem] sphone:w-[100%]"
                            type="email"
                            name="email"
                            placeholder="e.g. alex@email.com"
                            onChange={handleChangeEmail}
                            value={email}
                        />
                        {emailError && (
                            <p className="text-[red] text-center text-base mt-1">
                                {emailError}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col   phone:w-[100%]  gap-[0.33rem]  ">
                    <label
                        htmlFor="password"
                        className="leading-[1.5rem]   phone:w-[100%] text-base  "
                    >
                        Password
                    </label>

                    <div
                        className={`flex group focus-within:border-purple  focus-within:ring-purple focus-within:ring-3 focus-within:shadow-purple focus-within:shadow-sm focus-within:ring-opacity-[25%] gap-[1rem] items-center flex-center flex-row h-[4rem] px-[1.33rem]  ${emailError || passwordError ? "border-[red]" : "border-border"
                            } border-[0.083rem] py-[1rem] phone:w-[100%] sphone:w-[100%] rounded-[0.67rem]  `}
                    >
                        <Image src={padlock} quality={100} alt="envelope-icon" />
                        <input
                            className=" placeholder:text-darkGrey phone:w-[20.92rem] tablet:w-[28rem] laptop:text-normal h-[2rem] sphone:w-[100%]"
                            type="password"
                            name="password"
                            placeholder="At least .8 characters"
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        {passwordError && (
                            <p className="text-[red] laptop:w-[13rem] text-base text-center leading-[1.5rem] mt-1">
                                {passwordError}
                            </p>
                        )}
                    </div>
                </div>
                <div className=" sphone:w-[100%]">
                    <button className=" h-[3.83rem]  w-[100%] sphone:w-[100%] flex items-center justify-center rounded-[0.67rem] font-semibold text-[1.33rem] laptop:text-normal  leading-[2rem]  bg-purple text-white " type="submit">{loading ? (<div className="flex items-center justify-center h-screen">
                        <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>) : "Sign in"}</button>
                </div>
            </form>
        </div>
    );
};

export default Forms;
