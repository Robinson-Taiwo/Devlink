import React from 'react'
// import preview from "@/components/assets/images/preview.png"
import github from "@/components/assets/icons/github.svg"
import arrow from "@/components/assets/icons/arrow_right.svg"
import Image from 'next/image';


const Links = () => {
  return (
    <>

      <div className="w-[33.67rem] desktop:h-[60.5rem] desktop:w-[46.67rem] flex items-center justify-center   ">

        <div className="frame flex justify-center items-center ">


          <div className=' w-[19.75rem] h-[43.5333rem]  pt-[0.7rem]  '  >

            <div className='flex flex-col mb-[4.67rem]  w-[100%] items-center justify-center px-[3.208rem] gap-[2.08rem] ' >

              <div className=' rounded-[50%] h-[8rem] w-[8rem]' >

              </div>


              <div className=' w-[100%] items-center justify-center  flex flex-col gap-[1.083rem]  ' >

                <p className=' w-[13.33rem] h-[1.33rem] rounded-[8.66rem] ' >
                 
                </p>

                <p className='w-[6rem] rounded-[50%] h-[0.67rem] ' ></p>


              </div>


            </div>


            <div className=' h-[25rem]  flex flex-col gap-[1.67rem] ' >

              <div className=' h-[3.67rem] flex flex-row w-[100%] bg-[black] rounded-[0.67rem] pl-[1.33rem] pr-[1.167rem] py-[1.167rem]  ' >

                <div className="flex flex-row gap-[0.67rem]  " >

                  <span> <Image src={github} alt="github-icon" quality={100} />  </span>
                  <span className=" text-base text-white leading-[1.5rem] w-[13.083rem] flex items-center  " >GitHub </span>

                </div>

                <Image src={arrow} alt="github-icon" quality={100} />

              </div>

              <div className=' h-[3.67rem] w-[100%] rounded-[0.67rem]  ' >

              </div>

            </div>

          </div>




        </div >




      </div>
    </>
  )
}

export default Links