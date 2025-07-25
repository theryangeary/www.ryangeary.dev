import type { Project } from '../types/content';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const formattedDate = new Date(project.completedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <header className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-violet-900/50 dark:text-violet-300">
            {project.title}
          </h3>
          {project.featured && (
            <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded text-xs font-medium">
              Featured
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Completed {formattedDate}
        </p>
      </header>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
          Tech Stack:
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 dark:text-violet-400 hover:underline font-medium text-sm"
          >
            View Code →
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 dark:text-violet-400 hover:underline font-medium text-sm"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;