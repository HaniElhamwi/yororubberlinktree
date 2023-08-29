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
    <div className="bg-gradient-to-t from-green-950 to-cyan-500 bg-no-repeat">
      <main className="max-w-[600px] mx-auto flex justify-center items-center min-h-[100vh]">
        <div>
          <img src="/logo.png" alt="" className="mb-5" />
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
                  className="bg-white rounded-full text-center py-3 px-3 mt-4 cursor-pointer hover:scale-110 transition-all">
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/*  social links */}
          <div className="gap-4 flex mt-6 justify-center items-center">
            {socialLinks.map((link) => {
              return (
                <SocialIcon
                  className="shadow"
                  style={SocialIconStyle}
                  url={link}
                  key={link}
                />
              );
            })}
            <Link
              href="https://www.google.com/maps/search/%C3%87%C4%B0LEK+MAH.,+63147+SK.,+NO:+1,+%C4%B0%C3%87+KAPI+NO:+8,+MEGACENTER+I%C5%9E+MERKEZI,+Akdeniz%2FMersin/@36.8853765,34.719024,12z/data=!3m1!4b1?entry=ttu"
              className="border-1 rounded-full bg-white cursor-pointer p-1">
              <img src="/location.png" alt="" className="w-[25px] h-[25px]" />
            </Link>
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
