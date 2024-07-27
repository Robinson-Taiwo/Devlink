
"use client"
import React from "react";
import github from "@/components/assets/icons/github.svg";
import Image from "next/image";
import arrow from "@/components/assets/icons/arrow_right.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../services/firebase';
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";



const Preview = () => {
    const [alertText, setAlertText] = useState<string>("");

    const [profileData, setProfileData] = useState({
        displayName: "",
        email: "",
        photoURL: ""
    });
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const user = auth.currentUser

    useEffect(() => {
        const checkAuth = async () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setProfileData({
                        displayName: user.displayName || "",
                        email: user.email || "",
                        photoURL: user.photoURL || ""
                    });
                } else {
                    setAlertText("No user is logged in.");
                    router.push("/login"); // Redirect to login page or another appropriate action
                }
                setLoading(false);
            });
        };

        checkAuth();
    }, [router]);






    return (
        <div>



            {alertText && (
                <Alert className=" w-[50vw] tablet:w-[30rem] text-base tablet:text-normal   py-[2rem] absolute right-[2rem] top-[2rem] bg-purple text-white  " >
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Hi there!!</AlertTitle>
                    <AlertDescription>{alertText}</AlertDescription>
                </Alert>
            )}

            <div className=" flex-col tablet:bg-purple tablet:rounded-b-[2.67rem] flex tablet:h-[29.75rem] w-[100%] justify-center tablet:pb-[19.25rem] tablet:px-[2rem]  px-[1.33rem]  tablet:pt-[2rem]">
                <div className=" h-[6.5rem] sphone:w-[100%] phone:w-[100%] py-[1.33rem] mb-[5rem] laptop:w-[100%] tablet:mb-[0rem] pr-[1.33rem] pl-[2rem] sphone:gap-[1.33rem] tablet:w-[60rem] justify-between gap-[1.33rem] flex flex-row tablet:bg-white tablet:rounded-[1rem]  ">
                    <Link
                        href="/home"
                        className="  h-[3.83rem] w-[13.292rem] flex items-center justify-center text-purple font-semibold text-normal leading-[2rem] border border-purple rounded-[0.667rem] bg-[white] "
                    >
                        Back to Editor
                    </Link>

                    <button className="  h-[3.83rem] w-[13.292rem] flex items-center justify-center text-white bg-purple font-semibold text-normal leading-[2rem] rounded-[0.667rem] ">
                        Share Link
                    </button>
                </div>

                <div className="tablet:relative laptop:top-[8.833rem] tablet:top-[10.5rem] ">
                    <div className="tablet:w-[29.08rem] tablet:absolute tablet:left-1/2 tablet:-translate-x-1/2 z-[100] tablet:px-[4.67rem] tablet:py-[4rem] bg-white  tablet:rounded-[2rem] tablet:shadow-2xl ">
                        <div className=" w-[100%]  min-h-[100%] flex justify-center   ">
                            <div className=" bg-[white] w-[19.75rem] flex flex-col   ">
                                <div className="flex flex-col  w-[100%] h-[100%] items-center ">
                                    {/* profile image for preview */}
                                    <div className="  mb-[2.083rem] rounded-[50%] h-[8.66rem] w-[8.66rem] border-[0.33rem] border-purple relative overflow-hidden  ">

                                        <Image
                                            src={profileData.photoURL}
                                            alt="Profile Picture"
                                            layout="fill"
                                            style={{ objectFit: "cover" }}
                                            
                                        />
                                    </div>

                                    {/* name and email for profile */}
                                    <div className="flex flex-col gap-[0.667rem">
                                        <h1 className="text-darkGrey  font-bold text-[2.667rem] flex text-center items-center justify-center leading-[4rem]  ">
                                            {profileData.displayName}
                                        </h1>

                                        <p className=" flex items-center justify-center text-grey text-normal leading-[2rem] ">
                                            {profileData.email}
                                        </p>
                                    </div>
                                </div>
                                {/* second div container of profile */}

                                <div className=" mt-[4.67rem]  flex flex-col gap-[1.66rem] ">
                                    <div className=" h-[4.67rem] flex flex-row w-[100%] bg-[#1A1A1A] rounded-[0.67rem] pl-[1.33rem] pr-[1.167rem] py-[1.167rem]  ">
                                        <div className="flex items-center flex-row gap-[0.67rem]  ">
                                            <span>
                                                {" "}
                                                <Image
                                                    src={github}
                                                    alt="github-icon"
                                                    quality={100}
                                                    height={20}
                                                    width={20}
                                                />{" "}
                                            </span>
                                            <span className=" text-base text-white leading-[1.5rem] w-[12.75rem] flex items-center  ">
                                                GitHub{" "}
                                            </span>
                                        </div>

                                        <Image src={arrow} width={20} height={20} alt="github-icon" quality={100} />
                                    </div>

                                    <div className=" h-[4.67rem] flex flex-row w-[100%] bg-[#EE3939] rounded-[0.67rem] pl-[1.33rem] pr-[1.167rem] py-[1.167rem]  ">
                                        <div className="flex items-center flex-row gap-[0.67rem]  ">
                                            <span>
                                                {" "}
                                                <Image
                                                    src={github}
                                                    alt="github-icon"
                                                    quality={100}
                                                    height={20}
                                                    width={20}
                                                />{" "}
                                            </span>
                                            <span className=" text-base text-white leading-[1.5rem] w-[12.75rem] flex items-center  ">
                                                Youtube{" "}
                                            </span>
                                        </div>

                                        <Image src={arrow} width={20} height={20} alt="github-icon" quality={100} />
                                    </div>

                                    <div className=" h-[4.67rem] flex flex-row w-[100%] bg-[#2D68FF] rounded-[0.67rem] pl-[1.33rem] pr-[1.167rem] py-[1.167rem]  ">
                                        <div className="flex items-center flex-row gap-[0.67rem]  ">
                                            <span>
                                                {" "}
                                                <Image
                                                    src={github}
                                                    alt="github-icon"
                                                    quality={100}
                                                    height={20}
                                                    width={20}
                                                />{" "}
                                            </span>
                                            <span className=" text-base text-white leading-[1.5rem] w-[12.75rem] flex items-center  ">
                                                LInkedin
                                            </span>
                                        </div>

                                        <Image src={arrow} width={20} height={20} alt="github-icon" quality={100} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
