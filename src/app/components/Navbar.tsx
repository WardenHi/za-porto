"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full h-10 bg-gray-800 shadow-md flex items-center justify-center">
      <div className="flex gap-8">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Projects", path: "/projects" },
          { name: "Contact", path: "/contact" },
        ].map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`mx-2 text-gray-300 hover:text-white transition ${
              pathname === link.path ? "text-blue-400 font-bold" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
