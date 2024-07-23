import Navbar from "@/components/Navbar";
import Image from "next/image";
import handset from "@/components/assets/icons/handset.svg"
import CustomLink from "@/components/CustomLink";

export default function Home() {
  return (
    <main className="  phone:w-[100vw] sphone:w-[100%]  ">

<div className=" tablet:p-[2rem] " >

      <div className="home-head pt-[1.33rem] w-[100%] sphone:items-center flex sphone:justify-center  tablet:pl-[2rem] tablet:pr-[1.33rem] phone:pl-[1.66rem] mb-[1.33rem] phone:pr-[1.6rem] pb-[1.33rem] ">
        <Navbar />
      </div>
</div>


      <CustomLink />

    </main>
  );
}
