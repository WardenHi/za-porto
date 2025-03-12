import { certification } from "../data/certified";
import Image from "next/image";

export default function Certified() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 mt-8">
      <h1 className="text-4xl font-bold mb-8">My Certification</h1>
      <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-6 max-w-[90%] mx-auto justify-center items-center">
        {certification.map((certified) => (
          <div 
            key={certified.id} 
            className="bg-gray-800 p-10 rounded-lg shadow-lg w-full h-full flex flex-col items-center text-center"
          >
            <h2 className="text-xl font-semibold mb-3">{certified.title}</h2>
            <Image
              src={certified.image1}
              alt={certified.title}
              width={600}
              height={350}
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <Image
              src={certified.image2}
              alt={certified.title}
              width={600}
              height={350}
              className="rounded-lg shadow-lg w-full h-auto mt-4"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
