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
          <source src="sweet.mp4" type="video/mp4" />
        </video>
      </div>
      <main className="max-w-[600px] mx-auto   min-h-[100vh] px-3 z-50 relative flex-col flex overflow-x-hidden mb-4">
        <div>
          <div className="flex justify-center items-center">
            <img
              src="/logo.png"
              alt=""
              className="pb-5 relative translate-x-5 mt-8 h-[300px] w-[300px]"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold ">Watfa Company</h1>
            <h1 className="text-center text-gray-50">Sweets ~ Candies</h1>
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
                  className="bg-[#b5b19f] rounded-lg text-center py-2 px-2 mt-4 cursor-pointer hover:scale-105 transition-all font-bold shadow-md shadow-black flex justify-between items-center">
                  <img src={item.image} alt="" className="w-[30px] h-[30px]" />
                  <h1 className="text-white"> {item.name}</h1>
                  <h1></h1>
                </Link>
              );
            })}
          </div>
        </div>

        <Link
          href="https://www.google.com/maps/search/Sanayi+mahlasi+60444+sk.38.BLOK+APT+NO+3+%2F+%C5%9EAH%C4%B0TKAM%C4%B0L+%2FGAZ%C4%B0ANTEP,+Gaziantep,+Turkey/@37.0803322,37.4464094,17z/data=!3m1!4b1?entry=ttu"
          className="rounded-xl mt-2 p-2  flex flex-row gap-2 items-center hover:scale-105 transition bg-[#b5b19f]">
          <img src="/icons/address.png" alt="" className="w-[30px] h-[30px]" />
          <div>
            <h1 className="text-xlfont-bold text-center text-white">Address</h1>
            <h6 className="text-sm  font-medium text-center text-white">
              Sanayi mahlasi 60444 sk.38.BLOK APT NO 3 / ŞAHİTKAMİL /GAZİANTEP,
              Gaziantep, Turkey
            </h6>
          </div>
        </Link>
      </main>
      <Link download href="/watfa.vcf" className="fixed_button ">
        <img
          src="/icons/add-user.png"
          alt=""
          className="text-white w-[50px] h-[50px] z-50"
        />
      </Link>
    </div>
  );
}
