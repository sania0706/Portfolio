import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-20 left-20 animate-float"></div>
        <div className="absolute w-64 h-64 bg-accent/10 rounded-full blur-3xl bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <div className="mb-6">
            <span className="text-primary text-lg font-mono">&lt;hello&gt;</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Glad you’re here</span>
            <br />
            <span className="text-foreground">💻🌱🚀 </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Hi, I’m Sania Khan, a Computer Science Student & Developer.I specialize in 
 <span className="text-primary font-semibold"> Web Development</span>, 
            <span className="text-accent font-semibold"> Java</span>, and 
            <span className="text-success font-semibold"> SQL</span>. 
          crafting digital solutions with clean, efficient, and innovative code.
          </p>
          
          <div className="mb-6">
            <span className="text-primary text-lg font-mono">&lt;/hello&gt;</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground tech-glow px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="glass-effect border-primary/20 hover:border-primary/40 px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/sania0706" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sania-khan-180673275" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="saniaakhan76@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;