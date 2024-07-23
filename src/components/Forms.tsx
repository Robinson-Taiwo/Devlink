import React from "react";
import envelope from "@/components/assets/icons/envelope.svg"
import padlock from "@/components/assets/icons/padlock.svg"

import Image from 'next/image';

const Forms: React.FC = () => {
    return (
        <div className="flex flex-col w-[25.9rem]  tablet:w-[33rem] sphone:w-[100%] ">
            <form className="flex sphone:w-[100%]   gap-[2rem]  flex-col "  >
                <div className="flex flex-col sphone:w-[100%] phone:w-[100%] gap-[0.33rem] ">
                    <label className="leading-[1.5rem] sphone:w-[100%] phone:w-[100%] " htmlFor="email" >
                        Email address
                    </label>
                    <div className="flex group focus-within:border-purple  focus-within:ring-purple focus-within:ring-3 focus-within:shadow-purple focus-within:shadow-sm focus-within:ring-opacity-[25%] gap-[1rem] items-center flex-center flex-row h-[4rem] px-[1.33rem]  border-border border-[0.083rem] py-[1rem] phone:w-[100%] sphone:w-[100%] rounded-[0.67rem]  " >
                        <Image src={envelope} quality={100} alt="envelope-icon" />
                        <input className=" placeholder:text-darkGrey phone:w-[20.92rem] tablet:w-[28rem] laptop:text-normal h-[2rem] sphone:w-[100%]" type="email" name="email" placeholder="e.g. alex@email.com" required />
                    </div>

                </div>
                <div className="flex flex-col   phone:w-[100%]  gap-[0.33rem]  " >
                    <label htmlFor="password" className="leading-[1.5rem]   phone:w-[100%] text-base  "  >
                        Password
                    </label >

                    <div className="flex group focus-within:border-purple  focus-within:ring-purple focus-within:ring-3 focus-within:shadow-purple focus-within:shadow-sm focus-within:ring-opacity-[25%] gap-[1rem] items-center flex-center flex-row h-[4rem] px-[1.33rem]  border-border border-[0.083rem] py-[1rem] w-[100%]   sphone:w-[100%] rounded-[0.67rem] " >
                        <Image src={padlock} quality={100} alt="envelope-icon" />
                        <input className=" placeholder:text-darkGrey phone:w-[20.92rem] tablet:w-[28rem] laptop:text-normal h-[2rem] sphone:w-[100%]" type="email" name="password" placeholder="Enter your password" required />
                    </div>

                </div>
                <div className=" sphone:w-[100%]" >

                    <button className=" h-[3.83rem]  w-[100%] sphone:w-[100%] flex items-center justify-center rounded-[0.67rem] font-semibold text-[1.33rem] laptop:text-normal  leading-[2rem]  bg-purple text-white " type="submit">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default Forms;
