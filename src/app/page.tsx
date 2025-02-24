import Link from "next/link";
import Navbar from "../../public/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center my-5">
        <h1 className="text-5xl font-bold">WardenHi</h1>
        <h2 className="text-xl mt-2 text-gray-400">Web Developer | Tech Enthusiast</h2>
        <p className="mt-4 max-w-md text-gray-300">
        Seorang Tech Enthusiast yang berpengalaman dalam pengembangan dan pemahaman mendalam perangkat lunak dan keras. Memiliki rasa penasaran tinggi dan siap untuk belajar maupun mengajarkan pemahaman yang dimiliki serta segala hal baru yang diharapkan oleh perusahaan.</p>
      </section>

      {/* Link to Projects */}
      <Link href="/projects">
        <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
          Lihat Projek Saya
        </button>
      </Link>
    </main>
  );
}
