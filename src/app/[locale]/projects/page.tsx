import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  const projects = [
    { name: "Vi-Mongo", url: "https://vi-mongo.com/", description: "A powerful MongoDB visualization tool." },
    { name: "Notibox", url: "https://notibox.pl/", description: "A smart notification management system." },
    { name: "ContentFlow", url: "https://contentflow.ovh/", description: "A seamless content delivery platform." },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.name} className="hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <Button asChild>
              <Link href={project.url}>
                <p className="text-teal-500 hover:text-teal-700 font-medium">Visit {project.name}</p>
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}