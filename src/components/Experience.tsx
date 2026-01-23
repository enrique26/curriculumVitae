import { FC } from 'react';
import { CVData } from '../types';

interface ExperienceProps {
  experience: CVData['experience'];
}

export const Experience: FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={job.id}
              className="border-l-4 border-primary pl-8 py-4 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[18px] top-6 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>

              <div className="flex flex-col md:flex-row md:items-baseline md:gap-8 gap-2 mb-4">
                <h3 className="text-2xl font-bold text-text">{job.role}</h3>
                <span className="text-primary font-semibold text-lg">{job.company}</span>
              </div>

              <p className="text-text-muted mb-4 font-medium">
                {job.startDate} — {job.endDate}
              </p>

              {job.description && (
                <p className="text-text-muted leading-relaxed text-base">{job.description}</p>
              )}

              {index < experience.length - 1 && (
                <div className="mt-6 border-t border-primary-light opacity-40"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
