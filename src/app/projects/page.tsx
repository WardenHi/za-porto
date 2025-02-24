import { projects } from "../../../public/data/projects";
import Navbar from "../../../public/components/Navbar";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <Navbar />
      <h1 className="text-4xl font-bold mb-8">Projek Saya</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <Link
              href={`/projects/${project.id}`}
              className="text-blue-400 hover:underline mt-4 block"
            >
              Lihat Detail →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
