import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: "🌐",
      color: "primary",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      color: "accent",
      skills: [
        { name: "Java", level: 88 },
        { name: "Python", level: 70 },
        { name: "C", level: 65 },
        { name: "JavaScript", level: 85 },
      ]
    },
    {
      title: "Database & Backend",
      icon: "🗄️",
      color: "success",
      skills: [
        { name: "SQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Node.js", level: 72 },
      ]
    }
  ];

  const tools = [
    "VS Code", "IntelliJ IDEA", "Git", "GitHub", "npm", "Vite", 
    , "Postman", "Docker", "Windows", "Netlify" , "React" , "Spring Boot" , "MYSQL"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect border-border/20 hover:border-primary/20 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <span className={`text-${category.color}`}>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">Tools & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="glass-effect border-border/20 hover:border-primary/40 hover:text-primary transition-all px-4 py-2 text-sm"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="code-block inline-block">
            <div className="text-success font-mono text-sm mb-2">// Current focus</div>
            <div className="text-foreground font-mono text-sm">
              <span className="text-primary">while</span>(learning) {"{"}
              <br />
              <span className="ml-4 text-accent">explore</span>(<span className="text-success">"new technologies"</span>);
              <br />
              <span className="ml-4 text-accent">build</span>(<span className="text-success">"amazing projects"</span>);
              <br />
              <span className="ml-4 text-accent">improve</span>(<span className="text-success">"every day"</span>);
              <br />
              {"}"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;