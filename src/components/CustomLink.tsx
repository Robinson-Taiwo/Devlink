import React from 'react'
import Image from "next/image";
import handset from "@/components/assets/icons/handset.svg"
import handsetTab from "@/components/assets/icons/handset_tab.svg"


const CustomLink = () => {
    return (
        <>

            <div className=" w-[100%] px-[1.33rem] flex items-center justify-center  ">
                <div className="phone:w-[28.583rem] tablet:w-[100%]  flex flex-col tablet:text-[2.67rem] tablet:leading-[4rem] phone:items-center tablet:items-start  p-[2rem] sphone:w-[100%] text-darkGrey ">

                    <div className="flex flex-col gap-[0.67rem] mb-[3.33rem] " >
                        <h1 className="text-[2rem] font-bold leading-[3rem]  "  > Customize your links</h1>

                        <p className="text-grey text-normal leading-[2rem]  " >
                            Add/edit/remove links below and then share all your profiles with
                            the world!
                        </p>
                    </div>

                    <div className="w-[100%] mb-[2rem]  " >
                        <button className=" w-[100%] h-[3.83rem] flex items-center border-purple  rounded-[0.67rem] border-[0.0833rem] justify-center text-purple text-normal font-semibold " >
                            + Add new link
                        </button>
                    </div>


                    <div className=" py-[3.875rem] px-[1.67rem] w-[100%] flex items-center justify-center mb-[2rem] " >

                        <div className=" phone:w-[21.25rem] tablet:w-[50.08rem] flex items-center justify-center flex-col gap-[2rem]   sphone:w-[100%] " >

                            <Image  className='tablet:hidden'  src={handset} quality={100} alt="handset-icon" />

                            <Image   className='tablet:flex sphone:hidden phone:hidden '  src={handsetTab} quality={100} alt="handset-icon" />

                            <h1 className="text-[2rem] tablet:text-[2.67rem] text-darkGrey font-bold leading-[3rem] " >Let’s get you started</h1>

                            <p className=" tablet:w-[40.67rem] text-normal leading-[2rem] text-center text-grey " >Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>

                        </div>

                    </div>


                    <div className="flex p-[1.33rem] w-[100%] border-t-border border-t-[0.083rem] tablet:justify-end tablet:px-[3.33rem]  tablet:h-[7.833rem] tablet:pt-[2rem] "  >

                        <button disabled className=" phone:w-[25.92rem] h-[3.83rem] flex items-center justify-center disabled:bg-hover bg-purple  text-white text-normal leading-[2rem] rounded-[0.67rem] tablet:w-[7.58rem]   " >
                            Save
                        </button>

                    </div>


                </div>
            </div>

        </>
    )
}

export default CustomLink