import Navbar from "@/components/Navbar";
import Image from "next/image";
import handset from "@/components/assets/icons/handset.svg"
import CustomLink from "@/components/CustomLink";
import Links from "@/components/Links";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/components/store/store';
import Profile from "@/components/Profile";

const Root = () => {

  const currentTab = useSelector((state: RootState) => state.tabs.currentTab);


  return (
    <main className="  phone:w-[100vw] overflow-x-hidden overflow-hidden sphone:w-[100%]  ">

      <div className=" w-[100%]  tablet:p-[2rem] flex items-center justify-center  " >

        <div className="home-head pt-[1.33rem] w-[100%] sphone:items-center flex sphone:justify-center desktop:justify-center   tablet:pl-[2rem] tablet:pr-[1.33rem]   phone:pl-[1.66rem] mb-[1.33rem] phone:pr-[1.6rem]  pb-[1.33rem] ">
          <Navbar />
        </div>
      </div>


      <div className=" flex flex-row gap-[2rem] desktop:justify-center laptop:w-[85.33rem] desktop:w-[100%]  overflow-x-hidden overflow-hidden   desktop:px-[0rem]  " >

        <div className=" desktop:h-[60.5rem] overflow-x-hidden  overflow-y-hidden overflow-hidden tablet:hidden sphone:hidden phone:hidden laptop:flex  mr-[0rem] pr-[0rem] " >

          <Links />
        </div>

        {currentTab === 'link' ? <CustomLink /> : <Profile />}




      </div>


    </main>
  )
}

export default Root