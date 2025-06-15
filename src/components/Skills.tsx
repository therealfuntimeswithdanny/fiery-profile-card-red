
import React from 'react';

const skills = [
  { name: 'React', icon: 'fab fa-react' },
  { name: 'TypeScript', icon: 'fas fa-code' },
  { name: 'Tailwind CSS', icon: 'fas fa-palette' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'UI/UX Design', icon: 'fas fa-drafting-compass' },
];

const Skills = () => {
  return (
    <div className="mb-12 animate-fade-in">
      <h3 className="text-center text-gray-400 font-semibold mb-8 text-lg">
        My Skills
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-4 rounded-lg bg-gray-900 hover:bg-bio-red transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-default h-28"
            aria-label={skill.name}
          >
            <i className={`${skill.icon} text-3xl text-gray-400 group-hover:text-white transition-colors duration-300 mb-2`}></i>
            <span className="text-sm text-center text-gray-300 group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
