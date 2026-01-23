import { FC } from 'react';

interface SkillsProps {
  skills: string[];
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="py-20 bg-background-alt">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          Professional skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-background px-6 py-4 rounded-lg border-2 border-primary-light hover:border-primary hover:shadow-md transition-all duration-200 text-center"
            >
              <span className="text-text font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
