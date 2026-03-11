import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id='top'
      className=' flex flex-col justify-between px-6 pt-32 pb-12 border-b border-black/20 dark:border-white/20'>
      <div className='space-y-2'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-sm uppercase tracking-widest text-black/60 dark:text-white/60 '>
          Full Stack Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-[10vw] leading-[0.85] font-black tracking-tighter uppercase'>
          MYNEL
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-[10vw] leading-[0.85] font-black tracking-tighter uppercase text-black/40 dark:text-white/40'>
          SANTOS
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
