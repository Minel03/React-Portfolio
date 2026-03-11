import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsItem = ({ title, role, category, index, image, id }) => {
  return (
    <>
      {/* Image cell */}
      <Link
        to={`/project/${id}`}
        onClick={() => window.scrollTo(0, 0)}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className='group relative overflow-hidden aspect-video mb-20'>
          <img
            src={image}
            alt={title}
            className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
          />
          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50'>
            <span className='text-white uppercase tracking-widest border border-white px-6 py-3'>
              View Project
            </span>
          </div>
        </motion.div>
      </Link>

      {/* Content cell */}
      <Link
        to={`/project/${id}`}
        onClick={() => window.scrollTo(0, 0)}>
        <div className='group flex justify-between items-start pb-6 mb-16 border-b border-white/20'>
          <div>
            <h3 className='text-3xl font-bold uppercase mb-1 group-hover:translate-x-2 transition-transform duration-300'>
              {title}
            </h3>
            <p className='text-sm text-black/50 dark:text-white/50 uppercase tracking-wider'>
              {category}
            </p>
            <p className='text-sm text-black/50 dark:text-white/50 uppercase tracking-wider'>
              {role}
            </p>
          </div>
          <ArrowUpRight className='w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300' />
        </div>
      </Link>
    </>
  );
};

export default ProjectsItem;
