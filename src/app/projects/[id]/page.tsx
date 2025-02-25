import { projects } from "../../data/projects";
import Image from "next/image";
import Link from "next/link";
interface ProjectDetailsProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  if (!params || !params.id) {
    throw new Error("Invalid project ID");
  }
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Projek tidak ditemukan.</h1>
        <Link href="/projects" className="text-blue-400 mt-4">
          Kembali ke Projek
        </Link>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold my-5">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={350}
        className="rounded-lg shadow-lg"
      />
      <p className="text-gray-300 mt-4 max-w-2xl text-center">{project.details}</p>
      <Link href={project.link} className="text-blue-400 hover:underline mt-4">
        Menuju Projek (GitHub) →
      </Link>
      <Link href="/projects" className="text-gray-400 mt-6 hover:text-white">
        ← Kembali ke Projek
      </Link>
    </main>
  );
}