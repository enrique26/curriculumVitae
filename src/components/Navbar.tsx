import { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-background border-b-2 border-primary-light shadow-md z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
          &lt;Dev /&gt;
        </a>

        <div className="hidden md:flex gap-8">
          <a href="#skills" className="text-text hover:text-primary transition-colors font-medium">
            Skills
          </a>
          <a href="#experience" className="text-text hover:text-primary transition-colors font-medium">
            Experience
          </a>
          <a href="#education" className="text-text hover:text-primary transition-colors font-medium">
            Education
          </a>
        </div>
      </div>
    </nav>
  );
};
