import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Globe, GraduationCap } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock'; // Import the new component

const About = () => {
  const codeSnippet = 
`const developer = {
  name: "sania khan",
  focus: ["Web Dev", "Java", "SQL"],
  passion: "Building digital solutions",
  learning: "Always"
};`;

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of technology, creativity, and problem-solving
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <CodeBlock 
              code={codeSnippet}
              language="javascript"
              header="About me"
            />
            
            <p className="text-lg text-muted-foreground leading-relaxed">
            As a Computer Science student and aspiring full-stack developer, I’m passionate about creating digital solutions that matter. My journey has taken me through web development, Java programming, and database management, where I’ve learned to blend creativity with logic. For me, coding is more than syntax — it’s about designing experiences that are functional, elegant, and impactful.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
             I believe in writing clean, efficient code and approaching every project with curiosity and dedication. Whether it’s building responsive web applications, developing robust Java programs, or designing optimized database schemas, I love solving problems that push me to think differently. Beyond the screen, I’m constantly exploring new tools, frameworks, and ideas — driven by the belief that innovation starts with curiosity.
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card className="glass-effect border-border/20 hover:border-primary/20 transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-primary">
                  <GraduationCap size={24} />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Computer Science Student</p>
                <p className="text-sm text-muted-foreground/80">Focused on Software Development & Data Systems</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-border/20 hover:border-primary/20 transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-accent">
                  <Globe size={24} />
                  Web Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Modern web technologies</p>
                <p className="text-sm text-muted-foreground/80">React, JavaScript, HTML/CSS, Responsive Design</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-border/20 hover:border-primary/20 transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-success">
                  <Code size={24} />
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Java Development</p>
                <p className="text-sm text-muted-foreground/80">Object-Oriented Programming, Data Structures</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-border/20 hover:border-primary/20 transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Database size={24} />
                  Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">SQL & Data Management</p>
                <p className="text-sm text-muted-foreground/80">MySQL, PostgreSQL, Database Design</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;