import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  demoUrl?: string;
}

const ProjectCard = ({ title, description, tags, featured, demoUrl }: ProjectCardProps) => {
  return (
    <div className={`rounded-xl border border-border bg-card p-6 card-hover ${featured ? 'glow-box' : ''}`}>
      <h3 className="text-xl font-semibold font-mono text-foreground mb-3 flex items-center gap-2">
        {title}
        <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-primary border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={demoUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        <ExternalLink className="w-4 h-4" />
        Live Demo
      </a>
    </div>
  );
};

export default ProjectCard;
