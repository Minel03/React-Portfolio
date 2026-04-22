import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id='top'
      className='relative min-h-[90vh] flex flex-col justify-center px-6 py-20 border-b border-black/10 dark:border-white/10 overflow-hidden'>
      {/* Background Decorative Elements */}
      <div className='absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse' />
      <div className='absolute bottom-1/4 -left-20 w-72 h-72 bg-accent-light/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000' />

      <div className='max-w-6xl mx-auto w-full space-y-4'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex items-center gap-2'>
          <span className='w-8 h-px bg-accent'></span>
          <p className='text-sm uppercase tracking-[0.2em] font-semibold text-accent'>
            Full Stack Developer
          </p>
        </motion.div>

        <div className='space-y-0'>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className='text-[clamp(3rem,15vw,10rem)] leading-[0.8] font-black tracking-tighter uppercase'>
            MYNEL
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className='text-[clamp(3rem,15vw,10rem)] leading-[0.8] font-black tracking-tighter uppercase text-transparent stroke-text'>
            SANTOS
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='max-w-md text-black/60 dark:text-white/60 text-lg md:text-xl font-medium mt-8'>
          Crafting digital experiences through elegant code and modern design.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'>
        <span className='text-[10px] uppercase tracking-widest opacity-40'>
          Scroll
        </span>
        <div className='w-px h-12 bg-linear-to-b from-accent to-transparent'></div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text {
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.3);
        }
        .dark .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      ` }} />
    </section>
  );
};

export default Hero;
