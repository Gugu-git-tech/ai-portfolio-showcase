import { Github, Linkedin, Mail, Brain, Code, Database, ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

const Index = () => {
  const featuredProjects = [
    {
      title: "End-to-End AI Solution",
      description: "Capstone project demonstrating the complete AI lifecycle from data collection and preprocessing to model training, deployment, and monitoring in production.",
      tags: ["Python", "TensorFlow", "Docker", "AWS", "MLOps"],
      demoUrl: "https://echo-assist-28.lovable.app/",
    },
    {
      title: "Sector-Specific AI Prototype",
      description: "Industry-focused AI solution addressing real-world challenges with custom machine learning models optimized for domain-specific applications.",
      tags: ["PyTorch", "NLP", "Computer Vision", "FastAPI"],
      demoUrl: "https://www.figma.com/make/r0pReRdMsAd0p9gSQ3wQXy/FreshScan?p=f&t=QZA9PER0l1QoaO5K-0&fullscreen=1",
    },
    {
      title: "AI Resume Builder",
      description: "AI-powered tool that generates ATS-friendly resumes using natural language processing to optimize content for job applications.",
      tags: ["OpenAI API", "React", "Node.js", "NLP"],
      demoUrl: "https://ai-cv-star.lovable.app/",
    },
  ];

  const otherProjects = [
    { title: "AI Concept Chatbot", description: "Conversational AI demonstrating core NLP concepts" },
    { title: "Custom Content Generator", description: "Generative AI for automated content creation" },
    { title: "AI in Action: Bias Audit Report", description: "Comprehensive analysis of AI fairness and bias" },
  ];

  const aiSkills = ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Reinforcement Learning", "Neural Networks"];
  const tools = ["Lovable AI", "Figma", "AI Prompt Engineer", "GitHub", "AWS"];
  const softSkills = ["Communication Skill", "Active Listening", "Problem Solving", "Customer Support", "Team Collaboration"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(340_82%_49%/0.08)_0%,_transparent_70%)]" />
        <div className="text-center z-10 max-w-3xl">
          <p className="text-primary font-mono text-sm tracking-widest mb-4 uppercase">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold font-mono mb-4 text-foreground">
            Gugu Mandisa Xulu
          </h1>
          <p className="text-2xl md:text-3xl text-gradient font-semibold mb-6">
            AI & Machine Learning Developer
          </p>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Building intelligent solutions that transform ideas into impactful, data-driven applications.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <a href="https://github.com/Gugu-git-tech" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <a href="#about" className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container max-w-4xl">
          <SectionHeading title="About Me" />
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Gugu Xulu, a Junior AI and Machine Learning Developer with hands-on experience in building intelligent solutions that solve real-world problems. I specialize in creating chatbots, content generators, and AI prototypes, while also bringing practical skills in technical support to ensure smooth deployment and user satisfaction. My expertise spans natural language processing, computer vision, and AI-driven automation. I'm passionate about turning ideas into impactful, data-driven applications and eager to contribute to a forward-thinking team where I can grow and make a difference.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-mono text-primary text-sm mb-4">Career Focus</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Brain className="w-4 h-4 text-primary" /> ML Engineering</li>
                <li className="flex items-center gap-2"><Code className="w-4 h-4 text-primary" /> AI Development</li>
                <li className="flex items-center gap-2"><Database className="w-4 h-4 text-primary" /> AI Prompt Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="container max-w-4xl">
          <SectionHeading title="Skills & Technologies" />
          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-primary text-sm mb-4">AI/ML Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {aiSkills.map((skill) => <SkillBadge key={skill} name={skill} />)}
              </div>
            </div>
            <div>
              <h3 className="font-mono text-primary text-sm mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => <SkillBadge key={tool} name={tool} />)}
              </div>
            </div>
            <div>
              <h3 className="font-mono text-primary text-sm mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => <SkillBadge key={skill} name={skill} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6">
        <div className="container max-w-5xl">
          <SectionHeading title="Featured Projects" subtitle="Showcasing end-to-end AI solutions and practical applications" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-24 px-6 bg-card/50">
        <div className="container max-w-4xl">
          <SectionHeading title="Other Projects" />
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.title} className="rounded-xl border border-border bg-card p-5 card-hover">
                <h3 className="font-mono text-foreground font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="container max-w-2xl text-center">
          <SectionHeading title="Get In Touch" subtitle="Interested in collaborating or have questions? Let's connect." />
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Gugu-git-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors font-medium"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 Gugu Mandisa Xulu. Built with passion for AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
