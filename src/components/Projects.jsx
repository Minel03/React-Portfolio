import React from 'react';
import ProjectsItem from './ProjectsItem';
import { projects } from '../assets/assets';

const Projects = () => {
  return (
    <section
      id='projects'
      className='px-6 py-24 border-b border-white/20'>
      <div className='flex items-baseline justify-between mb-16'>
        <h2 className='text-sm uppercase tracking-widest text-black/60 dark:text-white/60'>
          Projects
        </h2>
        <span className='text-sm text-black/40 dark:text-white/40'>
          2023 — Present
        </span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12'>
        {[...projects].reverse().map((project, index, arr) => (
          <ProjectsItem
            key={index}
            {...project}
            index={index}
            isLast={index === arr.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
