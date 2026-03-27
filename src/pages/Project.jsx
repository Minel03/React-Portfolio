import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { projects } from '../assets/assets';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projects.find((p) => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <div className='min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 flex items-center justify-center'>
        <p className='text-red-500 text-lg'>Project not found.</p>
      </div>
    );
  }

  const totalImages = project.images.length;

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  // Back button logic similar to handleScrollTo
  const handleBackToProjects = () => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const section = document.getElementById('projects');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById('projects');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className='min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 pt-24 px-6'>
      {/* Back Button */}
      <button
        onClick={handleBackToProjects}
        className='flex items-center mb-6 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
        <ArrowLeft className='w-5 h-5 mr-2' />
        Back to Projects
      </button>

      {/* Project Image Carousel */}
      <div className='relative mb-12 flex justify-center items-center max-w-full md:max-w-3xl mx-auto'>
        <img
          src={project.images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
          className='w-full h-auto rounded-lg shadow-lg transition-all duration-500'
        />

        {/* Left Arrow */}
        {totalImages > 1 && (
          <button
            onClick={handlePrev}
            className='absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-black/30 rounded-full hover:bg-black/60 transition z-20 cursor-pointer'>
            <ChevronLeft className='w-5 md:w-6 h-5 md:h-6 text-white' />
          </button>
        )}

        {/* Right Arrow */}
        {totalImages > 1 && (
          <button
            onClick={handleNext}
            className='absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-black/30 rounded-full hover:bg-black/60 transition z-20 cursor-pointer'>
            <ChevronRight className='w-5 md:w-6 h-5 md:h-6 text-white' />
          </button>
        )}
      </div>

      {/* Project Title */}
      <h1 className='text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500'>
        {project.title}
      </h1>

      {/* Project Category & Role */}
      <p className='text-sm uppercase tracking-wider mb-6 text-black/50 dark:text-white/50 transition-colors duration-500'>
        {project.category} — {project.role}
      </p>

      {/* Project Description */}
      <p className='text-lg mb-6 text-black/80 dark:text-white/80 transition-colors duration-500'>
        {project.description}
      </p>

      {/* Technologies / Languages */}
      <p className='text-sm mb-6 text-black/50 dark:text-white/50 transition-colors duration-500'>
        <strong>Technologies:</strong> {project.language}
      </p>

      {/* Links */}
      <div className='flex flex-wrap gap-4 mb-12'>
        {project.github && (
          <a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-2 rounded text-white dark:text-black bg-black dark:bg-white hover:bg-white dark:hover:bg-white/70 transition-colors duration-500'>
            GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-2 rounded text-white dark:text-black bg-black dark:bg-white hover:bg-white dark:hover:bg-white/70 transition-colors duration-500'>
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Project;
