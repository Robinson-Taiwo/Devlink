"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/components/assets/icons/logo_icon.svg";
import publish from "@/components/assets/icons/eye.svg";
import links from "@/components/assets/icons/link.svg";
import profile from "@/components/assets/icons/profile.svg";
import devlinks from "@/components/assets/icons/devlinks.svg";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/components/store/store';
import { setTab } from '@/components/store/tabsSlice';


const Navbar: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("links");
    const dispatch = useDispatch();
    const currentTab = useSelector((state: RootState) => state.tabs.currentTab);


    return (
        <div className=" phone:w-[100%] justify-between  tablet:w-[56.67rem] sphone:w-[100%] items-center  laptop:w-[100%] laptop:justify-between  flex flex-row ">
            <div className=" w-[4.33rem] tablet:w-[12.17rem]  h-[2.67rem]  phone:mr-[3.458rem] tablet:mr-[4.625rem]  gap-[0.5rem] tablet:flex  flex-row  ">
                <Image src={logo} alt="navbar-icon" quality={100} />
                <div className=" sphone:hidden phone:hidden  tablet:flex " > <Image src={devlinks} alt="navbar-icon" quality={100} /> </div>
            </div>

            <div className=" flex flex-row  ">
                <div
                    className={`  ${activeTab === "links" ? "bg-[#EFEBFF] text-purple " : ""
                        }   sphone:w-[6.17rem] phone:w-[6.17rem] tablet:w-[10.17rem] flex-row gap-[0.67rem] cursor-pointer h-[3.5rem] rounded-[0.67rem] flex items-center justify-center  `}
                    onClick={() => {
                        setActiveTab("links")
                        dispatch(setTab('link'))
                    }}
                >
                    <Image src={links} alt="navbar-icon" quality={100} />
                    <div className=" text-normal leading-[2rem]   font-semibold sphone:hidden hover:text-purple text-grey phone:hidden  tablet:flex " > Links</div>
                </div>

                <div
                    className={`  ${activeTab === "profile" ? "bg-[#EFEBFF]" : ""
                        }   sphone:w-[6.17rem] phone:w-[6.17rem] cursor-pointer tablet:w-[15.58rem] h-[3.5rem] flex-row gap-[0.67rem] rounded-[0.67rem] flex items-center justify-center `}
                    onClick={() => {
                        setActiveTab("profile")
                        dispatch(setTab('profile'))
                    }}
                >
                    <Image
                        src={profile}
                        className=""
                        alt="navbar-icon"
                        quality={100}
                    />

                    <div className=" text-normal leading-[2rem]   font-semibold sphone:hidden hover:text-purple text-grey phone:hidden  tablet:flex " >Profile Details</div>
                </div>
            </div>

            <div className="sphone:ml-[3.458rem] cursor-pointer phone:ml-[3.458rem] tablet:ml-[4.625rem] sphone:w-[4.33rem] phone:w-[4.33rem] tablet:w-[9.5rem]  h-[3.5rem] border-purple border flex items-center justify-center rounded-[0.67rem] ">
                <Image src={publish} alt="navbar-icon" className=" tablet:hidden " quality={100} />
                <p className="sphone:hidden phone:hidden tablet:flex text-purple text-normal font-semibold leading-[2rem] " >Preview</p>
            </div>
        </div>
    );
};

export default Navbar;
