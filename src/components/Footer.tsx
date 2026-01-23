import { FC } from 'react';

interface ContactI {
  github?: string;
  linkedin?: string;
  email?: string;
}
interface FooterProps {
  contact?: ContactI,
}

export const Footer: FC<FooterProps> = ({contact}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-background-alt border-t-2 border-primary-light py-8">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-text-muted mb-4">
          Desarrollado con React, TypeScript y Tailwind CSS
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href={contact?.github ? contact.github : "https://github.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href={contact?.linkedin ? contact.linkedin : "https://linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={contact?.email ? contact.email : "mailto:email@example.com"}
            className="text-text-muted hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-text-muted text-sm">
          © {currentYear} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
