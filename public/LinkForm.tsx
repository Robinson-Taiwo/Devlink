/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import bullet from "@/components/assets/icons/bullet.svg";
import slink from "@/components/assets/icons/s_link.svg";
import { Platform, platforms } from "@/components/data";
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Define the interface for the component props
interface Iid {
    id: number;
    remove: (id: number) => void;
    updateLinkForm: (id: number, platform: Platform | null, link: string) => void;
}

// Define the LinkForm component
const LinkForm = ({ id, remove }: Iid) => {
    // State for selected platform
    const [platform, setPlatform] = useState<Platform | null>(null);
    // State for the link
    const [link, setLink] = useState("");


    const handlePlatformChange = (value: string) => {
        const selectedPlatform = platforms.find((p) => p.name === value);
        setPlatform(selectedPlatform || null);
        updateLinkForm(id, selectedPlatform || null, link);
    };

    const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newLink = event.target.value;
        setLink(newLink);
        updateLinkForm(id, platform, newLink);
    };


    return (
        <div className="w-[100%] laptop:w-[100%] desktop:w-[100%] tablet:w-[53.33rem] mb-[2rem] h-fit flex flex-col">
            {/* Link Header */}
            <div className="flex tablet:gap-[38.75rem] laptop:justify-between laptop:gap-[0rem] justify-between  gap-[10rem] flex-row w-[100%]">
                <div className="flex w-[6.9rem] items-center flex-row gap-[0.67rem]">
                    <span>
                        <Image
                            src={bullet}
                            quality={100}
                            width={12}
                            height={6}
                            alt="handset-icon"
                        />
                    </span>
                    <span className=" text-grey  text-normal leading-[2rem] ">
                        Link #{id}
                    </span>
                </div>

                <p
                    className="  text-grey cursor-pointer text-normal leading-[2rem]"
                    onClick={() => remove(id)}
                >
                    Remove
                </p>
            </div>

            {/* Platform Selector */}
            <div>
                <p className="text-base mt-[1rem] text-darkgrey leading-[1.5rem]">
                    Platform
                </p>
                <Select onValueChange={handlePlatformChange}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Platform" />
                    </SelectTrigger>
                    <SelectContent>
                        {platforms.map((platform: Platform, index: number) => (
                            <SelectItem key={index} value={platform.name}>
                                <div className="w-[100%] h-[100%] flex-row flex items-center justify-center gap-[1rem]">
                                    <span>
                                        <Image src={`/${platform.icon}`} quality={100} width={16} height={16} alt={`${platform.name}-icon`} />
                                    </span>
                                    <span>{platform.name}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Link Input */}
            <div>
                <p className="text-base mt-[1rem] text-darkgrey leading-[1.5rem]">
                    Link
                </p>
                <div className="flex group focus-within:border-purple focus-within:ring-purple focus-within:ring-3 focus-within:shadow-purple focus-within:shadow-sm focus-within:ring-opacity-[25%] gap-[1rem] items-center flex-center flex-row h-[4rem] px-[1.33rem] border-border border-[0.083rem] py-[1rem] phone:w-[100%] sphone:w-[100%] rounded-[0.67rem]">
                    <Image
                        src={slink}
                        width={16}
                        height={16}
                        quality={100}
                        alt="link-icon"
                    />
                    <input
                        className="placeholder:text-grey leading-[2rem] text-normal phone:w-[100%] tablet:w-[28rem] laptop:text-normal h-[2rem] sphone:w-[100%]"
                        type="url"
                        name="link"
                        placeholder="e.g. https://www.github.com/johnappleseed"
                        required
                        onChange={handleLinkChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default LinkForm;
function updateLinkForm(id: number, arg1: Platform | null, link: string) {
    throw new Error("Function not implemented.");
}

