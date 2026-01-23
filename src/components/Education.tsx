import { FC } from 'react';
import { CVData } from '../types';

interface EducationProps {
  education: CVData['education'];
}

export const Education: FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 bg-background-alt">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-background rounded-lg p-8 border-2 border-primary-light hover:border-primary hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary text-3xl flex-shrink-0">🎓</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text mb-2">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                  <p className="text-text-muted">{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
