import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

const ProjectCard = ({ title, description, tags, featured }: ProjectCardProps) => {
  return (
    <div className={`rounded-xl border border-border bg-card p-6 card-hover ${featured ? 'glow-box' : ''}`}>
      <h3 className="text-xl font-semibold font-mono text-foreground mb-3 flex items-center gap-2">
        {title}
        <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-primary border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
