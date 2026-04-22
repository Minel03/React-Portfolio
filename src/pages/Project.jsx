import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../assets/assets';
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Github,
  Globe,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className='min-h-screen bg-white dark:bg-black flex items-center justify-center'>
        <p className='text-accent text-xl font-bold'>Project not found.</p>
      </div>
    );
  }

  const totalImages = project.images.length;
  const handlePrev = () =>
    setCurrentImage((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  const handleNext = () =>
    setCurrentImage((prev) => (prev === totalImages - 1 ? 0 : prev + 1));

  const techStack = project.language.split(',').map((tech) => tech.trim());



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 pb-24'>
      {/* Hero Header */}
      <div className='relative h-[60vh] md:h-[70vh] overflow-hidden group'>
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src={project.images[currentImage]}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/40 backdrop-blur-[2px]' />

        <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-6'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='text-white/70 text-sm uppercase tracking-[0.4em] font-bold mb-4'>
            {project.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='text-white text-5xl md:text-8xl font-black uppercase tracking-tighter'>
            {project.title}
          </motion.h1>
        </div>

        {/* Carousel Controls */}
        {totalImages > 1 && (
          <>
            <button
              onClick={handlePrev}
              className='absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors text-white'>
              <ChevronLeft className='w-6 h-6' />
            </button>
            <button
              onClick={handleNext}
              className='absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors text-white'>
              <ChevronRight className='w-6 h-6' />
            </button>
            <div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2'>
              {project.images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-300 rounded-full ${i === currentImage ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className='max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16'>
        {/* Project Info */}
        <div className='lg:col-span-8 space-y-12'>
          <section className='space-y-6'>
            <h2 className='text-3xl font-black uppercase tracking-tight flex items-center gap-3'>
              <span className='w-8 h-[2px] bg-accent'></span>
              Overview
            </h2>
            <p className='text-xl text-black/70 dark:text-white/70 leading-relaxed font-medium'>
              {project.description}
            </p>
          </section>

          <section className='space-y-8'>
            <div className='flex items-center justify-between'>
              <h2 className='text-3xl font-black uppercase tracking-tight flex items-center gap-3'>
                <span className='w-8 h-[2px] bg-accent'></span>
                Visual Showcase
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {project.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 group aspect-[4/3]'>
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i}`}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]'
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className='lg:col-span-4 space-y-10'>
          <div className='p-8 rounded-3xl bg-black/2 dark:bg-white/2 border border-black/5 dark:border-white/5 sticky top-24'>
            <div className='space-y-8'>
              <div>
                <h4 className='text-[10px] uppercase tracking-[0.2em] font-black text-accent mb-4'>
                  Roles
                </h4>
                <p className='font-bold text-lg'>{project.role}</p>
              </div>

              <div>
                <h4 className='text-[10px] uppercase tracking-[0.2em] font-black text-accent mb-4'>
                  Technologies
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-bold uppercase tracking-wider'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='pt-8 space-y-3'>
                {project.github && (
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center justify-center gap-2 w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-black uppercase tracking-widest text-xs hover:bg-accent dark:hover:bg-accent transition-colors'>
                    <Github className='w-4 h-4' />
                    Source Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center justify-center gap-2 w-full py-4 border-2 border-black dark:border-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all'>
                    <Globe className='w-4 h-4' />
                    Live Preview
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
