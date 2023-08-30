import { linkData, socialLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  const links = [
    {
      id: 1,
      Email: "",
    },
  ];
  return (
    <div className="bg-no-repeat relative">
      <div className="absolute h-[100vh] w-[100vw]">
        <video
          loop
          muted
          playsInline
          className="bg-cover"
          width="100%"
          height="100%"
          autoPlay>
          <source
            src="farm.mp4"
            type="video/mp4"
            className="h-[100vh] w-[100vw]"
          />
        </video>
      </div>
      <main className="max-w-[600px] mx-auto flex justify-center items-center min-h-[100vh] px-3 z-50 relative">
        <div>
          <img src="/logo.png" alt="" className="mb-5 relative translate-x-5" />
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold ">Sial Company</h1>
            <h1 className="text-center text-gray-400">foodstuffs | Oils</h1>
          </div>

          {/* links */}
          <div className="flex flex-col">
            {linkData.map((item) => {
              return (
                <Link
                  href={item.link}
                  key={item.id}
                  className="bg-white rounded-lg text-center py-2 px-2 mt-4 cursor-pointer hover:scale-105 transition-all font-bold shadow-md shadow-black flex justify-between items-center">
                  <img src={item.image} alt="" className="w-[30px] h-[30px]" />
                  <h1> {item.name}</h1>
                  <h1></h1>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

const SocialIconStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
};
