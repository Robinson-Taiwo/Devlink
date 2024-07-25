/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import bullet from "@/components/assets/icons/bullet.svg";
import slink from "@/components/assets/icons/s_link.svg";
import { Platform, platforms } from "@/components/data";
import github from "@/components/assets/icons/github_grey.svg";
import youtube from "@/components/assets/icons/yt_grey.svg";
import frontendmentor from "@/components/assets/icons/fm_grey.svg";
import freecodecamp from "@/components/assets/icons/fcc_grey.svg";
import facebook from "@/components/assets/icons/fc_grey.svg";
import gitlab from "@/components/assets/icons/gl_grey.svg";
import hashnode from "@/components/assets/icons/hn_grey.svg";
import linkedin from "@/components/assets/icons/twitter_grey.svg";
import stackoverflow from "@/components/assets/icons/so_grey.svg";
import twitch from "@/components/assets/icons/twitch_grey.svg";
import codepen from "@/components/assets/icons/codepen_grey.svg";
import codewar from "@/components/assets/icons/codewar_grey.svg";
import devto from "@/components/assets/icons/dev_grey.svg";
import twitter from "@/components/assets/icons/in_grey.svg";

import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface Iid {
    id: number;
    remove: (id: number) => void;
}

const LinkForm = ({ id, remove }: Iid) => {
    return (
        <div className=" w-[100%] laptop:w-[100%] desktop:w-[100%] tablet:w-[53.33rem] mb-[2rem] h-fit  flex flex-col    ">
            <div className="flex tablet:gap-[38.75rem] laptop:justify-between laptop:gap-[0rem]   gap-[10rem] flex-row w-[100%]">
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

            <div>
                <p className="text-base mt-[1rem] text-darkgrey leading-[1.5rem] ">
                    Platform
                </p>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Platform" />
                    </SelectTrigger>
                    <SelectContent>
                        {platforms.map((platform: Platform, index: number) => (
                            <SelectItem
                                key={index}
                                value={platform.name}

                            >
                                <div className=" w-[100%] h-[100%] flex-row flex items-center justify-center gap-[1rem] ">
                                    <span>
                                        {" "}
                                        <Image
                                            src={`/${platform.icon}`}
                                            quality={100}
                                            width={16}
                                            height={16}
                                            alt="handset-icon"
                                        />{" "}
                                    </span>
                                    <span>{platform.name}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

            </div>

            <div>
                <p className="text-base mt-[1rem] text-darkgrey leading-[1.5rem] ">
                    Link
                </p>
                <div className="flex group focus-within:border-purple  focus-within:ring-purple focus-within:ring-3 focus-within:shadow-purple focus-within:shadow-sm focus-within:ring-opacity-[25%] gap-[1rem] items-center flex-center flex-row h-[4rem] px-[1.33rem]  border-border border-[0.083rem] py-[1rem] phone:w-[100%] sphone:w-[100%] rounded-[0.67rem]  ">
                    <Image src={slink} width={16} height={16} quality={100} alt="envelope-icon" />
                    <input
                        className=" placeholder:text-grey leading-[2rem] text-normal phone:w-[100%] tablet:w-[28rem] laptop:text-normal h-[2rem] sphone:w-[100%]"
                        type="url"
                        name="text"
                        placeholder="e.g. https://www.github.com/johnappleseed"
                        required
                    />
                </div>
            </div>
        </div>
    );
};

export default LinkForm;
