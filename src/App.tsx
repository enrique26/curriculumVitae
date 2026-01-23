import { useState, useEffect } from 'react';
import { cvData } from './data/cv';
import { applyTheme, getTheme, DEFAULT_THEME, themes } from './config/themes';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Footer } from './components/Footer';

function App() {
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    // Try to get theme from localStorage, fallback to default
    return localStorage.getItem('theme') || DEFAULT_THEME;
  });

  // Apply theme on mount and when it changes
  useEffect(() => {
    const theme = getTheme(currentTheme);
    applyTheme(theme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  return (
    <div className="bg-background text-text min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <Hero
          name={cvData.hero.name}
          title={cvData.hero.title}
          description={cvData.hero.description}
          imageUrl={cvData.hero.imageUrl}
        />

        <About paragraphs={cvData.about} />

        <section id="skills">
          <Skills skills={cvData.skills} />
        </section>

        <Experience experience={cvData.experience} />

        <Education education={cvData.education} />
      </main>

      <Footer contact={cvData.contact} />

      <ThemeSwitcher currentTheme={currentTheme} onThemeChange={handleThemeChange} />
    </div>
  );
}

export default App;
