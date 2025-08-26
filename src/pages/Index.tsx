import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Portfolio. Built with React, and Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground/80 mt-2">
            <span className="gradient-text font-mono">&lt;/&gt;</span> with ❤️ by a Sania Khan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;