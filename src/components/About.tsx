import { FC } from 'react';

interface AboutProps {
  paragraphs: string[];
}

export const About: FC<AboutProps> = ({ paragraphs }) => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          Summary
        </h2>

        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-text-muted leading-relaxed border-l-4 border-primary pl-6 py-2"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
