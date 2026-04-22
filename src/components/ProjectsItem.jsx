import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsItem = ({ title, role, category, index, image, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className='mb-12 group'>
      <Link
        to={`/project/${id}`}
        onClick={() => window.scrollTo(0, 0)}
        className='block relative overflow-hidden rounded-2xl aspect-16/10 bg-black/5 dark:bg-white/5'>
        {/* Project Image */}
        <motion.img
          src={image}
          alt={title}
          className='w-full h-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]'
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8'>
          <div className='flex justify-between items-end'>
            <div>
              <p className='text-white/60 text-xs uppercase tracking-[0.2em] font-semibold mb-2'>
                {category}
              </p>
              <h3 className='text-white text-3xl font-black uppercase tracking-tighter'>
                {title}
              </h3>
            </div>
            <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
              <ArrowUpRight className='w-6 h-6 text-black' />
            </div>
          </div>
        </div>
      </Link>

      <Link
        to={`/project/${id}`}
        onClick={() => window.scrollTo(0, 0)}
        className='mt-6 flex justify-between items-start px-2 group/info'>
        <div className='space-y-1'>
          <h4 className='text-xl font-bold uppercase tracking-tight group-hover/info:text-accent transition-colors'>
            {title}
          </h4>
          <p className='text-sm text-black/50 dark:text-white/50 font-medium'>
            {category} • {role}
          </p>
        </div>
        <div className='text-xs font-bold uppercase tracking-widest text-accent'>
          View Detail
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectsItem;
