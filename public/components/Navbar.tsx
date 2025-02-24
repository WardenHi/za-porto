import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-center p-4 bg-gray-800">
      <Link href="/" className="mx-4 text-gray-300 hover:text-white">Home</Link>
      <Link href="/about" className="mx-4 text-gray-300 hover:text-white">About</Link>
      <Link href="/projects" className="mx-4 text-gray-300 hover:text-white">Projects</Link>
      <Link href="/contact" className="mx-4 text-gray-300 hover:text-white">Contact</Link>
    </nav>
  );
}
