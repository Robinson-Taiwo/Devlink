"use client";

import React, { useState } from "react";
import Image from "next/image";
import handset from "@/components/assets/icons/handset.svg";
import handsetTab from "@/components/assets/icons/handset_tab.svg";
import LinkForm from "./LinkForm";

interface LinkForm {
    id: number;
    title: string; // Added title property for display
}

const CustomLink: React.FC = () => {

    const [linkForms, setLinkForms] = useState<LinkForm[]>([]);


    const addLinkForm = () => {
        // Generate a unique ID based on existing form IDs
        const newId = linkForms.length === 0 ? 1 : Math.max(...linkForms.map(form => form.id)) + 1;

        const newForm: LinkForm = {
            id: newId,
            title: `Link ${newId}`, // Set title based on generated ID
        };

        setLinkForms([...linkForms, newForm]);
    };

    const removeLinkForm = (id: number) => {
        const updatedForms = linkForms.filter(form => form.id !== id);

        // Re-order titles based on remaining IDs and their original positions
        const reOrderedForms = updatedForms.map((form, index) => {
            const originalIndex = linkForms.findIndex(f => f.id === form.id); // Find original index based on ID
            return {
                ...form,
                title: `Link ${originalIndex + 1}`, // Use original index for re-ordering
            };
        });

        setLinkForms(reOrderedForms);
    };

    return (
        <>
            <div className="  laptop:h-[100%] sphone:h-[100vh] phone:h-[100vh] tablet:h-[100%] w-[100%] laptop:w-[49.66rem] desktop:w-[67.33rem] px-[1.33rem]  flex items-center justify-center  ">
                <div className="phone:w-[28.583rem] desktop:w-[100%] laptop:w-[49.66rem] tablet:w-[100%]  flex flex-col tablet:text-[2.67rem] tablet:leading-[4rem] phone:items-center tablet:items-start  p-[2rem] sphone:w-[100%] text-darkGrey ">
                    <div className="flex flex-col laptop:w-[100%] gap-[0.67rem] mb-[3.33rem] ">
                        <h1 className="text-[2rem] laptop:w-[100%] font-bold leading-[3rem]  ">
                            {" "}
                            Customize your links
                        </h1>

                        <p className="text-grey text-normal leading-[2rem]  ">
                            Add/edit/remove links below and then share all your profiles with
                            the world!
                        </p>
                    </div>

                    <div className="w-[100%] mb-[2rem]  ">
                        <button
                            onClick={addLinkForm}
                            className=" w-[100%] h-[3.83rem] flex items-center border-purple  rounded-[0.67rem] border-[0.0833rem] justify-center text-purple text-normal font-semibold "
                        >
                            + Add new link
                        </button>
                    </div>




                    {linkForms.length == 0 ? (
                        <div className=" py-[3.875rem] px-[1.67rem] w-[100%] flex items-center justify-center mb-[2rem] ">

                            <div className=" phone:w-[21.25rem] tablet:w-[50.08rem]  flex items-center justify-center flex-col gap-[2rem]     sphone:w-[100%] ">
                                <Image
                                    className="tablet:hidden"
                                    src={handset}
                                    quality={100}
                                    alt="handset-icon"
                                />

                                <Image
                                    className="tablet:flex sphone:hidden phone:hidden "
                                    src={handsetTab}
                                    quality={100}
                                    alt="handset-icon"
                                />

                                <h1 className="text-[2rem] tablet:text-[2.67rem] text-darkGrey font-bold leading-[3rem] ">
                                    Let’s get you started
                                </h1>

                                <p className=" tablet:w-[40.67rem] text-normal leading-[2rem] text-center text-grey ">
                                    Use the “Add new link” button to get started. Once you have more
                                    than one link, you can reorder and edit them. We’re here to help
                                    you share your profiles with everyone!
                                </p>
                            </div>

                        </div>
                    ) : (
                        <div className=" desktop:w-[60.66rem] tablet:w-[100%] tablet:h-[31.825rem] phone:h-[24.58rem] laptop:h-[31.42rem] laptop:mb-[2rem] desktop:mb-[5rem] overflow-auto overflow-x-auto    " >
                            {linkForms.map((form) => (
                                <div key={form.id} className=" flex gap-[1rem] flex-col   ">

                                    <div className="flex pt-[1.67rem] px-[1.67rem]  flex-col w-[100%]  " >
                                        <LinkForm remove={removeLinkForm} id={form.id} />
                                    </div>



                                </div>
                            ))}
                        </div>
                    )}


                    <div className="flex p-[1.33rem] w-[100%] border-t-border border-t-[0.083rem] tablet:justify-end tablet:px-[3.33rem]  tablet:h-[7.833rem] tablet:pt-[2rem] ">
                        <button

                            className=" phone:w-[25.92rem] h-[3.83rem] flex items-center justify-center disabled:bg-hover bg-purple  text-white text-normal leading-[2rem] rounded-[0.67rem] tablet:w-[7.58rem]    "
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomLink;
