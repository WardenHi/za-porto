import Link from "next/link";
import Navbar from "../../../public/components/Navbar";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <Navbar />
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-gray-300 mt-4 max-w-xl text-center">
        Saya memiliki kemampuan problem solving yang lebih paten dari kebanyakan rekan. Memiliki rasa penasaran tinggi dan siap untuk belajar maupun mengajarkan pemahaman yang dimiliki serta segala hal baru yang diharapkan oleh perusahaan.
      </p>
      <Link href="/" className="mt-5 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white">
        Kembali ke Home
      </Link>
    </main>
  );
}
