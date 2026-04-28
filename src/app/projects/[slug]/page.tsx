import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Next.js 16 async params
  return params.then((p) => {
    const project = projects.find((proj) => proj.slug === p.slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.name} — Mehul`,
      description: project.description,
      openGraph: {
        title: `${project.name} — Mehul`,
        description: project.description,
      },
    };
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
