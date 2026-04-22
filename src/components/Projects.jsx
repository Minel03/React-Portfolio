import React, { useState, useMemo } from 'react';
import ProjectsItem from './ProjectsItem';
import { projects } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Get unique categories and add 'All'
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projects.map(p => p.category))];
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id='projects'
      className='px-6 py-24 md:py-32 max-w-6xl mx-auto'>
      <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8'>
        <div className="space-y-4">
          <h2 className='text-sm uppercase tracking-[0.2em] font-semibold text-accent'>
            Selected Works
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
            Passionate <br /> Digital Craft.
          </h3>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2">
          <span className='text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40'>
            2023 — Present
          </span>
          <div className="h-[2px] w-12 bg-accent"></div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
              activeFilter === cat
                ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white scale-105'
                : 'bg-transparent text-black/40 dark:text-white/40 border-black/10 dark:border-white/10 hover:border-accent hover:text-accent'
            }`}>
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8'>
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              <ProjectsItem
                {...project}
                index={index}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
