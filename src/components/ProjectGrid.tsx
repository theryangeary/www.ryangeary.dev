import ProjectCard from './ProjectCard';
import type { Project } from '../types/content';

interface ProjectGridProps {
  projects: Project[];
}

function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          No projects found.
        </p>
      </div>
    );
  }

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="space-y-8">
      {featuredProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-violet-900/50 dark:text-violet-300 mb-6">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section>
          {featuredProjects.length > 0 && (
            <h2 className="text-2xl font-bold text-violet-900/50 dark:text-violet-300 mb-6">
              Other Projects
            </h2>
          )}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProjectGrid;