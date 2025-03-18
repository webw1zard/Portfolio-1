import Image from "next/image";
import React from "react";
import { FaEnvelope, FaGithub, FaTelegram, FaPhone } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-black text-white p-4">
      <div className="w-80  rounded-lg p-4 flex flex-col items-center">
        <Image
          src={"/logo.jpg"}
          alt="logo"
          width={200}
          height={200}
          className="rounded-full  border-2 border-dashed border-b-blue-300 border-t-blue-300 border-l-blue-200 border-r-blue-200"
        />
        <h2 className="text-xl font-semibold">Nizomov U.</h2>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-gray-700 px-3 py-1 text-sm rounded-lg">
            Web dasturchi
          </span>
          <span className="bg-gray-700 px-3 py-1 text-sm rounded-lg">
            Dizayner
          </span>
          <span className="bg-gray-700 px-3 py-1 text-sm rounded-lg">
            Junior
          </span>
          <span className="bg-gray-700 px-3 py-1 text-sm rounded-lg">
            AI bot
          </span>
          <span className="bg-gray-700 px-3 py-1 text-sm rounded-lg">
            Web333
          </span>
          <span className="bg-gray-700 px-3 py-1 text-sm rounded-lg">
            ChatGPT
          </span>
        </div>

        <div className="mt-4 w-full">
          <ContactItem
            icon={<FaEnvelope className="text-red-500" />}
            title="E-pochta"
            info="ulugbeknizomov999@gmail.com"
          />
          <ContactItem
            icon={<FaGithub className="text-gray-300" />}
            title="Github"
            info="https://github.com/webw1zard"
          />
          <ContactItem
            icon={<FaTelegram className="text-blue-400" />}
            title="Telegram"
            info="https://t.me/nizomov_official"
          />
          <ContactItem
            icon={<FaPhone className="text-green-500" />}
            title="Telefon raqam"
            info="+998 (91) 911 91 91"
          />
        </div>
      </div>
    </div>
  );
};

const ContactItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  info: string;
}> = ({ icon, title, info }) => {
  return (
    <div className="flex items-center gap-3 p-3 border-b border-gray-700 w-full">
      {icon}
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-md">{info}</p>
      </div>
    </div>
  );
};

export default App;
