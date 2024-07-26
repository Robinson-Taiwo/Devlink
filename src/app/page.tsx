import React from 'react'
import SignupForm from '@/components/SignupForm';
import Image from "next/image";
import logo from "@/components/assets/icons/logo.svg";
import Link from 'next/link';

const SignupPage = () => {


    return (
        <div className="flex h-[100vh]  tablet:justify-center  tablet:items-center flex-col tablet:px-[12.17rem] p-[2.667rem]">
            <div className="hearder tablet:mb-[7.58rem] laptop:mb-[7.58rem]  mb-[5.33rem]">
                <Image src={logo} alt={"logo"} quality={100} />
            </div>

            <div className=" flex items-center flex-col justify-center ">
                <div className="flex gap-[0.67rem] sphone:w-[100%]  w-[25.9rem] tablet:w-[33rem] flex-col items-start laptop:mb-[3.33rem] mb-[3.33rem] ">
                    <h1 className="text-[2rem] laptop:text-big font-bold leading-[3rem] ">
                        Create account
                    </h1>

                    <p className="flex text-grey text-normal ">
                        Let’s get you started sharing your links!                    </p>
                </div>

                <SignupForm />

                <div className="flex  tablet:flex-row  tablet:gap-[0.3rem] flex-col mt-[2rem] sphone:w-[100%] phone:w-[25.9rem] tablet:w-[33rem] items-center justify-center ">
                    <p className="text-[1.33rem]  leading-[2rem] text-center text-grey ">
                        Don’t have an account?
                    </p>
                    <Link href="/login" className="text-[1.33rem]   leading-[2rem] text-center text-purple ">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignupPage