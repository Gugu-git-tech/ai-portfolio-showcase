interface SkillBadgeProps {
  name: string;
}

const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <span className="px-4 py-2 rounded-lg bg-secondary border border-border text-foreground text-sm font-medium hover:border-primary/50 transition-colors cursor-default">
      {name}
    </span>
  );
};

export default SkillBadge;
