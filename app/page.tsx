import { linkData } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-no-repeat relative">
      <div className="absolute top-0 left-0 w-full h-full ">
        <video
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          autoPlay>
          <source src="spicy.mp4" type="video/mp4" />
        </video>
      </div>
      <main className="max-w-[600px] mx-auto   min-h-[100vh] px-3 z-50 relative flex-col flex overflow-x-hidden mb-4">
        <div>
          <div className="flex justify-center items-center">
            <img
              src="/logo.png"
              alt=""
              className="pb-5 relative mt-8 h-[30 0px] w-[300px]"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold ">Loyal Company</h1>
            <h1 className="text-center text-gray-50">Spicy ~ Nuts</h1>
          </div>

          {/* links */}
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-md text-center mt-8">
              Social Links
            </h1>
            {linkData.map((item) => {
              return (
                <Link
                  href={item.link}
                  key={item.id}
                  className="bg-[#ffcc00] rounded-lg text-center py-2 px-2 mt-4 cursor-pointer hover:scale-105 transition-all font-bold shadow-md shadow-yellow-500 flex justify-between items-center">
                  <img src={item.image} alt="" className="w-[30px] h-[30px]" />
                  <h1 className="text-white"> {item.name}</h1>
                  <h1></h1>
                </Link>
              );
            })}
          </div>
        </div>

        <Link
          href="https://www.google.com/maps/place/LOYAL+AGRO+COMPANY+-+SAF+BAKL%C4%B0YAT/@36.8407968,34.4044288,9.78z/data=!4m10!1m2!2m1!1sloyal+!3m6!1s0x1527f1be9b234769:0x957e2c267a0256d9!8m2!3d36.8257905!4d34.6816342!15sCgVsb3lhbJIBH2FncmljdWx0dXJhbF9wcm9kdWN0X3dob2xlc2FsZXLgAQA!16s%2Fg%2F11kq8g0lvz?entry=ttu"
          className="rounded-xl mt-2 p-2  flex flex-row gap-2 items-center hover:scale-105 transition bg-[#ffcc00]">
          <img src="/icons/address.png" alt="" className="w-[30px] h-[30px]" />
          <div>
            <h1 className="text-xlfont-bold text-center text-white">
              Turkey Address
            </h1>
            <h6 className="text-sm  font-medium text-center text-white">
              Karaduvar mahallesi 65149 sokak No:3 65149, Sok, 33020
              Akdeniz/Mersin
            </h6>
          </div>
        </Link>

        <div className="flex flex-row gap-3 mt-3 justify-center">
          <div className="flex flex-row gap-3 bg-white rounded items-center px-2 py-1 cursor-pointer">
            <img src="/icons/mac.png" alt="" className="w-[20px] h-[20px]" />
            <div className="flex flex-col">
              <h6 className="text-[12px] text-gray-600 text-center font-medium">
                Get it on
              </h6>
              <h3 className="text-sm text-gray-700 font-bold">Apple Store</h3>
            </div>
          </div>

          <div className="flex flex-row gap-3 bg-white rounded items-center px-2 py-1 cursor-pointer">
            <img
              src="/icons/playstore.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <div className="flex flex-col">
              <h6 className="text-[12px] text-gray-600 text-center font-medium">
                Get it on
              </h6>
              <h3 className="text-sm text-gray-700 font-bold">Google play</h3>
            </div>
          </div>
        </div>
      </main>
      <Link download href="/loyal.vcf" className="fixed_button ">
        <img
          src="/icons/add-user.png"
          alt=""
          className="text-white w-[50px] h-[50px] z-50"
        />
      </Link>
    </div>
  );
}
