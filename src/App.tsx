import { About } from 'components/About/About';
import { Awards } from 'components/Awards/Awards';
import { Contact } from 'components/Contact/Contact';
import { Experience } from 'components/Experience/Experience';
import { Hero } from 'components/Hero/Hero';
import { Navbar } from 'components/Navbar/Navbar';
import { Projects } from 'components/Projects/Projects';
import { ThemeProvider } from 'theme/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
