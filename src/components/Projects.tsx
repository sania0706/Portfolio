import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "studylab_10 ",
      description: "This React-based educational platform makes science fun for Class 10 students with interactive modules, 3D simulations for topics like atomic structure and fluid dynamics, and built-in assessments.",
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "react-three-fiber", "react-router-dom", "React hooks (useState and useMemo)"],
      github: "https://github.com/sania0706/studylab_10",
      live: "mystudylab10.netlify.app",
      status: "Completed"
    },
    {
      title: "RadiantSkin",
      description: "Radiant Skin is a modern beauty e-commerce site built with React, Vite, and Tailwind CSS. It features a personalized Skin Quiz, organized product categories , educational tutorials, and a functional shopping cart for a comprehensive user experience.",
      technologies: ["TypeScript", "React", "shadcn-ui ", "TailwindCSS", "Vite"],
      github: "https://github.com/sania0706/RadiantSkin.git",
      live: "skinradiant.netlify.app",
      status: "In Progress"
    },
    {
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for data visualization and analytics. Processes large datasets and presents insights through dynamic charts and graphs.",
      technologies: ["Python", "React", "SQL", "Chart.js", "Flask"],
      github: "#",
      live: "#",
      status: "Planning"
    },
    {
      title: "SRMS(student result management system) |team project",
      description: "A Web-based system for managing student results,built with php and a modern web stack.",
      technologies: ["PHP" , "HTML" , "CSS" , "Bootstrap" , "JavaScript" , "MySQL"],
      github: "https://github.com/sania0706/SRMS.git",
      live: "http://Sania.free.nf",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-success text-success-foreground';
      case 'In Progress': return 'bg-primary text-primary-foreground';
      case 'Planning': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development journey and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-effect border-border/20 hover:border-primary/20 transition-all group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge className={`${getStatusColor(project.status)} text-xs`}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="border-border/40 hover:border-primary/40 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="glass-effect border-border/40 hover:border-primary/40"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glass-effect border-border/40 hover:border-primary/40"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="code-block inline-block">
            <div className="text-success font-mono text-sm mb-2">// More projects coming soon...</div>
            <div className="text-foreground font-mono text-sm">
              <span className="text-primary">const</span> nextProject = <span className="text-accent">await</span> inspiration();
              <br />
              <span className="text-primary">if</span>(nextProject.isAwesome) {"{"}
              <br />
              <span className="ml-4 text-accent">startBuilding</span>();
              <br />
              {"}"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;