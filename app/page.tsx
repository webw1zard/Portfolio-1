import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Home.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative z-10 text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Assalomu alaykum, Men <br />
          <span className="text-blue-500">Nizomov Ulug'bek</span>
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Veb dasturchi va dizayner sifatida natijaga yo‘naltirilgan ishchi.
          Veb-saytlar va veb-ilovalarni yaratish va boshqarish orqali umumiy
          mahsulot muvaffaqiyatiga erishish maqsadimdir.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white font-semibold transition">
          Loyihalar
        </button>
      </div>
    </div>
  );
}
