import { linkData, socialLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <div className="bg-no-repeat relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          autoPlay>
          <source src="farm.mp4" type="video/mp4" />
        </video>
      </div>
      <main className="max-w-[600px] mx-auto   min-h-[100vh] px-3 z-50 relative flex-col flex overflow-hidden mb-4">
        <div>
          <img
            src="/logo.png"
            alt=""
            className="mb-5 relative translate-x-5 mt-8"
          />
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold ">Sial Company</h1>
            <h1 className="text-center text-gray-50">foodstuffs | Oils</h1>
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
          href="https://www.google.com/maps/search/+Cami%C5%9Ferif+Mah.5248+Sk+No:2+JBY+PLAZA+Kat:5+D:26.+Akdeniz%2F+Mersin+++++++++++++++(%C4%B0%C3%A7el),T%C3%BCrkiye./@36.8014897,34.6267098,17z/data=!3m1!4b1?entry=ttu"
          className=" rounded-xl mt-8 p-2  flex flex-row gap-2 items-center hover:scale-105 transition bg-[#b5b19f]">
          <img src="/icons/address.png" alt="" className="w-[30px] h-[30px]" />
          <div>
            <h1 className="text-xl  font-bold text-center text-white">
              Head Office Address
            </h1>
            <h6 className="text-sm font-medium text-center text-white">
              Camişerif Mah.5248 Sk No:2 JBY PLAZA Kat:5 D:26. Akdeniz/ Mersin
              (İçel),Türkiye.
            </h6>
          </div>
        </Link>
        <Link
          href="https://www.google.com/maps/search/+%C3%87ilek+Mah.+63147+Sk.+No:1+%C4%B0%C3%A7+Kap%C4%B1+No:8+Mega+Center+I%C5%9F+Merkezi.+++++++++++++++Akdeniz%2FMersin+(%C4%B0%C3%A7el),T%C3%BCrkiye./@36.8854854,34.6366242,12z/data=!3m1!4b1?entry=ttu"
          className="rounded-xl mt-2 p-2  flex flex-row gap-2 items-center hover:scale-105 transition bg-[#b5b19f]">
          <img src="/icons/address.png" alt="" className="w-[30px] h-[30px]" />
          <div>
            <h1 className="text-xlfont-bold text-center text-white">
              Warehouse Address
            </h1>
            <h6 className="text-sm  font-medium text-center text-white">
              Çilek Mah. 63147 Sk. No:1 İç Kapı No:8 Mega Center Iş Merkezi.
              Akdeniz/Mersin (İçel),Türkiye.
            </h6>
          </div>
        </Link>
      </main>
      <Link download href="/sial.vcf" className="fixed_button ">
        <img
          src="/icons/add-user.png"
          alt=""
          className="text-white w-[50px] h-[50px] z-50"
        />
      </Link>
    </div>
  );
}
