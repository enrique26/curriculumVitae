import { FC } from 'react';

interface HeroProps {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export const Hero: FC<HeroProps> = ({ name, title, description, imageUrl }) => {
  return (
    <section className="min-h-[500px] flex items-center justify-center py-20 bg-gradient-to-br from-background to-background-alt">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Image or Placeholder */}
        <div className="flex-shrink-0">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          ) : (
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary-light to-primary border-4 border-primary shadow-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl">👤</div>
              </div>
            </div>
          )}
        </div>

        {/* Hero Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-3 leading-tight">{name}</h1>
          <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6">{title}</h2>
          <p className="text-lg text-text-muted leading-relaxed mb-8">{description}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#experience"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              Ver Experiencia
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary-light hover:text-white hover:border-primary-light transition-colors duration-200"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
