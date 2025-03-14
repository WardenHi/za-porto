import Link from "next/link";

export default function Contact() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-gray-300 mt-4 max-w-xl text-center">
          Jangan sungkan untuk kontak saya di alamat pos-el atau LinkedIn :
        </p>
        <div className="flex flex-row">
        <Link href="mailto:rayhanilhamrabbani@gmail.com" className="text-blue-200 hover:text-blue-500 px-2 underline">Email</Link>
        <Link href="https://www.linkedin.com/in/rayhan-ilham-rabbani-197383356"
        className="text-blue-200 hover:text-blue-500 px-2 underline"
        target="_blank"
        rel="noopener noreferrer">LinkedIn</Link>
        </div>
        <Link href="/" className="mt-5 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white">
        Kembali ke Home
      </Link>
      </main>
    );
  }