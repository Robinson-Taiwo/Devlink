"use client";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import picture from "@/components/assets/icons/picture.svg";
import { useDispatch, useSelector } from "react-redux";
import {
    setFirstName,
    setLastName,
    setEmail,
    setSelectedImage,
} from "@/components/store/profileSlice";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import type { AppDispatch, RootState } from "@/components/store/store";
import { useRouter } from "next/navigation";
import { auth } from "@/app/services/firebase";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";

const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter()
    const user = auth.currentUser
    const storage = getStorage();


    const [selectedImage, setSelectedImageInput] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [firstName, setFirstNameInput] = useState<string>("");
    const [lastName, setLastNameInput] = useState<string>("");
    const [email, setEmailInput] = useState<string>("");
    const [fullName, setFullName] = useState<string>(firstName + "" + lastName)
    const [loading, setLoading] = useState<boolean>(false);
    const [alertText, setAlertText] = useState<string>("");

    const displayName = `${firstName} ${lastName}`;





    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setSelectedImageInput(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewUrl(null);
        }
    };


    const handleSave = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true); // Start loading

        dispatch(setFirstName(firstName));
        dispatch(setLastName(lastName));
        dispatch(setEmail(email));
        dispatch(setSelectedImage(previewUrl));

        try {
            if (selectedImage) {
                const storageRef = ref(storage, `profileImages/${user!.uid}`);
                await uploadBytes(storageRef, selectedImage);
                const photoURL = await getDownloadURL(storageRef);
                setLoading(true)
                if (displayName && photoURL) {
                    await updateProfile(user!, {
                        displayName: displayName,
                        photoURL: photoURL,
                    });

                    console.log("Profile updated");
                    setLoading(false)
                    router.push("/preview");
                }
            }
        } catch (e: any) {
            console.log("Failed to update profile ", e.message);
            setAlertText("Failed to update profile: " + e.message);
            setLoading(false)

        } finally {
            // Clear the inputs after saving
            setFirstNameInput("");
            setLastNameInput("");
            setEmailInput("");
            setSelectedImageInput(null);
            setPreviewUrl(null);
            setLoading(false); // End loading
        }
    };
    return (
        <div className=" laptop:h-[100%] tablet:w-[100vw] overflow-hidden overflow-x-hidden   w-[100%] laptop:w-[49.66rem] desktop:w-[67.33rem] tablet:px-[0rem]  px-[1.33rem]  flex items-center justify-center  ">



            {alertText && (
                <Alert className=" w-[50vw] tablet:w-[30rem] text-base tablet:text-normal   py-[2rem] absolute right-[2rem] top-[2rem] bg-purple text-white  " >
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Hi there!!</AlertTitle>
                    <AlertDescription>{alertText}</AlertDescription>
                </Alert>
            )}


            <form onSubmit={handleSave} className="phone:w-[28.583rem] desktop:w-[100%] laptop:w-[49.66rem]  flex flex-col tablet:text-[2.67rem] tablet:leading-[4rem] phone:items-center  tablet:w-[60rem] p-[2rem] sphone:w-[100%] text-darkGrey tablet:justify-center tablet:items-center ">
                <div className="flex flex-col tablet:w-[100%] laptop:w-[100%] gap-[0.67rem] mb-[3.33rem] ">
                    <h1 className="text-[2rem] laptop:w-[100%] font-bold leading-[3rem]  ">
                        {" "}
                        Profile Details{" "}
                    </h1>

                    <p className="text-grey text-normal leading-[2rem]  ">
                        Add your details to create a personal touch to your profile.
                    </p>
                </div>

                <div className=" sphone:w-[24.583rem] laptop:w-[100%]  tablet:w-[53.33rem]  ">
                    <div className=" flex flex-col tablet:flex-row  w-[100%] p-[1.67rem] h-[27.75rem] tablet:items-center tablet:justify-between   ">
                        <p className="  text-grey text-base mb-[1.33rem]  tablet:mb-[0rem]  leading-[2rem] tablet:w-[19rem]   ">
                            {" "}
                            Profile picture{" "}
                        </p>

                        <div className="relative w-[16.083rem] tablet:mb-[0rem] mb-[2rem] tablet:mr-[2rem] tablet:ml-[1.33] h-[16.083rem]">
                            <label
                                htmlFor="file-input"
                                className="flex justify-center items-center w-full h-full bg-lightPurple rounded-[1rem] cursor-pointer overflow-hidden"
                            >
                                <input
                                    id="file-input"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                                {previewUrl ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={previewUrl}
                                        alt="Profile Preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex flex-col gap-[0.667rem] items-center justify-center ">
                                        <Image
                                            src={picture}
                                            quality={100}
                                            alt="upload image icon"
                                        />

                                        <span className="text-purple text-normal leading-[2rem] font-semibold text-center">
                                            + Upload Image
                                        </span>
                                    </div>
                                )}
                            </label>
                        </div>

                        <p className=" tablet:w-[10.58rem] text-grey text-base leading-[1.5rem] ">
                            Image must be below 1024x1024px. Use PNG or JPG format.
                        </p>
                    </div>

                    <div className=" mt-[2rem] mb-[2rem] h-[22.83rem] gap-[1rem] flex flex-col  p-[1.67rem] ">
                        <div className=" tablet:gap-[1.33rem]  flex flex-col tablet:flex-row tablet:items-center  ">
                            <p className="text-base mb-[0.33rem] text-darkgrey leading-[1.5rem] tablet:w-[20rem]  ">
                                First name*
                            </p>
                            <div className="flex group gap-[1rem] items-center flex-center flex-row h-[4rem] px-[1.33rem]  border-border border-[0.083rem] py-[1rem] phone:w-[100%] sphone:w-[100%] rounded-[0.67rem]  tablet:w-[28.66rem]  ">
                                {/* <Image src={slink} quality={100} alt="envelope-icon" /> */}
                                <input
                                    className=" placeholder:text-grey leading-[2rem] text-normal phone:w-[100%] tablet:w-[28rem] laptop:text-normal h-[2rem] sphone:w-[100%] "
                                    type="text"
                                    name="first name"
                                    placeholder=" Ben"
                                    value={firstName}
                                    onChange={(e) => setFirstNameInput(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className=" tablet:gap-[1.33rem]  flex flex-col tablet:flex-row tablet:items-center  ">
                            <p className="text-base mb-[0.33rem] text-darkgrey leading-[1.5rem] tablet:w-[20rem] ">
                                Last name*
                            </p>
                            <div className="flex group  gap-[1rem] items-center flex-center flex-row h-[4rem] px-[1.33rem]  border-border border-[0.083rem] py-[1rem] phone:w-[100%] sphone:w-[100%] rounded-[0.67rem]  tablet:w-[28.66rem]  ">
                                <input
                                    className=" placeholder:text-grey leading-[2rem] text-normal phone:w-[100%] tablet:w-[28rem] laptop:text-normal h-[2rem] sphone:w-[100%]"
                                    type="text"
                                    name="last name"
                                    placeholder=" Wright"
                                    required
                                    onChange={(e) => setLastNameInput(e.target.value)}
                                    value={lastName}
                                />
                            </div>
                        </div>

                        <div className=" tablet:gap-[1.33rem]  flex flex-col tablet:flex-row tablet:items-center  ">
                            <p className="text-base mb-[0.33rem] text-darkgrey leading-[1.5rem] tablet:w-[20rem] ">
                                Email*
                            </p>
                            <div className="flex group  gap-[1rem] items-center flex-center flex-row h-[4rem] px-[1.33rem]  border-border border-[0.083rem] py-[1rem] phone:w-[100%] sphone:w-[100%] rounded-[0.67rem]  tablet:w-[28.66rem]  ">
                                {/* <Image src={slink} quality={100} alt="envelope-icon" /> */}
                                <input
                                    className=" placeholder:text-grey leading-[2rem] text-normal phone:w-[100%] tablet:w-[28rem] laptop:text-normal h-[2rem] sphone:w-[100%]"
                                    type="email"
                                    name="text"
                                    placeholder="ben@example.com"
                                    value={email}
                                    onChange={(e) => setEmailInput(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex  p-[1.33rem] w-[100%] border-t-border border-t-[0.083rem] justify-center  tablet:justify-end laptop:w-[100%] tablet:px-[3.33rem] tablet:w-[60rem]  tablet:h-[7.833rem] tablet:pt-[2rem] ">
                    <button type="submit"

                        className=" phone:w-[25.92rem] h-[3.83rem] flex items-center justify-center disabled:bg-hover bg-purple  text-white text-normal leading-[2rem] rounded-[0.67rem] tablet:w-[7.58rem]    "
                    >{loading ? (<div className="flex items-center justify-center h-screen">
                        <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>) : "Save"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
