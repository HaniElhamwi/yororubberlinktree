import { linkData, socialLinks } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-no-repeat relative pattern">
      <main className="max-w-[600px] mx-auto min-h-[110vh] px-3 z-50 relative flex-col flex overflow-x-hidden pb-5">
        <div>
          <div className="flex justify-center items-center">
            <img
              src="/logo.png"
              alt=""
              className="pb-5 relative mt-8 h-[170px] w-[170px]"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold ">Yororubber Company</h1>
            <h1 className="text-center text-white text-sm">
              YoroRubber is a leading provider of high-quality car parts,
              serving a diverse range of vehicle makes and models. Our team of
              experts is dedicated to delivering top-notch automotive solutions
              to our valued customers
            </h1>
          </div>

          <div className="flex flex-row justify-center gap-3 mt-5">
            {socialLinks.map((item) => {
              return (
                <Link
                  href={item.link}
                  key={item.id}
                  className="bg-yellow-500 rounded hover:scale-110 transition-all cursor-pointer p-2">
                  <img src={item.image} alt="" className="w-[30px] h-[30px]" />
                </Link>
              );
            })}
          </div>

          {/* links */}
          <div className="flex flex-col">
            {linkData.map((item) => {
              return (
                <Link
                  href={item.link}
                  key={item.id}
                  className="bg-black rounded-lg text-center py-2 px-2 mt-4 cursor-pointer hover:scale-105 transition-all font-bold shadow-md shadow-black flex justify-between items-center">
                  <img src={item.image} alt="" className="w-[30px] h-[30px]" />
                  <h1 className="text-white"> {item.name}</h1>
                  <h1></h1>
                </Link>
              );
            })}
          </div>
        </div>

        <Link
          href="https://www.google.com/maps/place/D+Blok+D:,+14,+Pancarl%C4%B1,+58020.Nolu+Sk.+No:6,+27060+%C5%9Eehitkamil%2FGaziantep/@37.0696692,37.342816,17z/data=!3m1!4b1!4m5!3m4!1s0x1531e10c8268aa43:0x44fa726a729b1cd2!8m2!3d37.0696649!4d37.3453909?entry=ttu"
          className="rounded-xl mt-2 p-2  flex flex-row gap-2 items-center hover:scale-105 transition bg-black">
          <img src="/icons/address.png" alt="" className="w-[30px] h-[30px]" />
          <div>
            <h1 className="text-xlfont-bold text-center text-white">
              Turkey Address
            </h1>
            <h6 className="text-sm  font-medium text-center text-white">
              Yukarıbeylerbeyi, /60014 D Blok D:, 14 Nolu Sk. No:6, 27630
              Şehitkamil/Gaziantep
            </h6>
          </div>
        </Link>
      </main>
      <Link download href="/yororubber.vcf" className="fixed_button ">
        <img
          src="/icons/add-user.png"
          alt=""
          className="text-white w-[50px] h-[50px] z-50"
        />
      </Link>
    </div>
  );
}
