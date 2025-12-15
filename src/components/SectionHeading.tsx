interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-gradient mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
