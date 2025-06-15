
import React from 'react';
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Node.js', level: 75 },
  { name: 'UI/UX Design', level: 80 },
];

const Skills = () => {
  return (
    <div className="mb-12 animate-fade-in">
      <h3 className="text-center text-gray-400 font-semibold mb-8 text-lg">
        My Skills
      </h3>
      <div className="max-w-xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-white">{skill.name}</span>
              <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2 bg-gray-800 [&>div]:bg-bio-red" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
