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
    <div className="bg-gradient-to-t from-green-600 to-yellow-400 bg-no-repeat">
      <main className="max-w-[600px] mx-auto flex justify-center items-center min-h-[100vh] px-3">
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
                  className="bg-white rounded-full text-center py-3 px-3 mt-4 cursor-pointer hover:scale-110 transition-all font-bold">
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
