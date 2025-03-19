"use client"
import Image from "next/image";
import { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (form.current) {
      emailjs
        .sendForm(
          "hacker_darknet",
          "template_o9h0ciu",
          form.current,
          "v_7iqYodBjsySy5nq"
        )
        .then(
          () => {
            setMessage("Xabaringiz muvaffaqiyatli yuborildi!");
            setIsSending(false);
            form.current?.reset();
          },
          () => {
            setMessage("Xatolik yuz berdi. Iltimos qayta urinib ko‘ring.");
            setIsSending(false);
          }
        );
    }
  };

  return (
    <section className="bg-[url('/Home.svg')] w-full h-full bg-center p-8">
      <h2 className="text-2xl font-bold mb-2 text-white">Bog'lanish</h2>
      <div className="w-34 border-b-4 border-blue-600 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-[#0e0e0e] p-16 rounded-lg text-center">
          <Image
            src="/gmail.svg"
            alt="gmail"
            width={40}
            height={40}
            className="mx-auto mb-2"
          />
          <h4 className="font-semibold text-white">E-pochta</h4>
          <p className="text-gray-400">ulugbeknizomov999@gmail.com</p>
        </div>

        <div className="bg-[#0e0e0e] p-16 rounded-lg text-center">
          <Image
            src="/telegram.svg"
            alt="telegram"
            width={40}
            height={40}
            className="mx-auto mb-2"
          />
          <h4 className="font-semibold text-white">Telegram</h4>
          <Link href={"https://t.me/nizomov_official"} className="text-gray-400 text-decoration-underline color-white">t.me/nizomov_official</Link>
        </div>

        <div className="bg-[#0e0e0e] p-16 rounded-lg text-center">
          <Image
            src="/phone.svg"
            alt="phone"
            width={40}
            height={40}
            className="mx-auto mb-2"
          />
          <h4 className="font-semibold text-white">Telefon raqam</h4>
          <p className="text-gray-400">+998 (91) 911-91-91</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-2 text-white">So‘rov yuborish</h2>
      <div className="w-34 border-b-4 border-blue-600 mb-6"></div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#0e0e0e] p-4 rounded-lg space-y-4"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Falonchiyev Falonchi"
            className="flex-1 bg-transparent border px-3 py-2 rounded text-white placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="misol@gmail.com"
            className="flex-1 bg-transparent border px-3 py-2 rounded text-white placeholder-gray-400"
            required
          />
          <select
            name="contact_method"
            className="bg-transparent border px-3 py-2 rounded text-white"
          >
            <option className="bg-black">E-pochta</option>
            <option className="bg-black">Telefon</option>
            <option className="bg-black">Telegram</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="O'z izohingizni yozing..."
          className="w-full bg-transparent border px-3 py-2 rounded text-white placeholder-gray-400 h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          disabled={isSending}
        >
          {isSending ? "Yuborilmoqda..." : "Yuborish"}
        </button>
        {message && <p className="text-green-400 mt-2">{message}</p>}
      </form>
    </section>
  );
};

export default ContactSection;
