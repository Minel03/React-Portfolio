import { motion } from 'framer-motion';
import {
  Code,
  Terminal,
  Database,
  Server,
  Settings,
  Activity,
} from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className='p-6 rounded-2xl bg-black/2 dark:bg-white/2 border border-black/5 dark:border-white/5 hover:border-accent/30 transition-colors group'>
    <div className='w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
      <Icon className='w-6 h-6 text-accent' />
    </div>
    <h4 className='font-bold mb-2'>{title}</h4>
    <p className='text-sm text-black/50 dark:text-white/50 leading-relaxed'>
      {skills}
    </p>
  </motion.div>
);

const About = () => {
  const skillData = [
    {
      icon: Code,
      title: 'Frontend',
      skills: 'React.js, Next.js, Tailwind CSS, HTML, CSS',
    },
    {
      icon: Terminal,
      title: 'Backend',
      skills: 'Laravel, Node.js, Express.js, FastAPI',
    },
    { icon: Database, title: 'Databases', skills: 'MongoDB, MySQL, Supabase' },
    { icon: Server, title: 'APIs', skills: 'REST APIs, Stripe, Razorpay' },
    { icon: Settings, title: 'Tools', skills: 'Git, GitHub, Vercel, Netlify' },
    {
      icon: Activity,
      title: 'Languages',
      skills: 'JavaScript, PHP, Python, Java',
    },
  ];

  return (
    <section
      id='about'
      className='px-6 py-24 md:py-32 max-w-6xl mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-16'>
        {/* LEFT SIDE - Bio */}
        <div className='lg:col-span-5 space-y-8'>
          <div className='space-y-4'>
            <h2 className='text-sm uppercase tracking-[0.2em] font-semibold text-accent'>
              About Me
            </h2>
            <h3 className='text-4xl md:text-5xl font-black tracking-tight uppercase'>
              Transforming <br /> Ideas into <br /> Reality.
            </h3>
          </div>

          <div className='space-y-4 text-lg text-black/70 dark:text-white/70 font-medium leading-relaxed'>
            <p>
              I am a Full Stack Developer based in the Philippines, specializing
              in building modern, scalable, and user-friendly web applications.
            </p>
            <p>
              With a strong foundation in both frontend and backend
              technologies, I focus on creating seamless digital experiences
              that solve real-world problems.
            </p>
          </div>

          <div className='pt-4'>
            <a
              href='#projects'
              className='inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-accent dark:hover:bg-accent transition-colors group'>
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}>
                &rarr;
              </motion.span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - Skills Grid */}
        <div className='lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {skillData.map((item, index) => (
            <SkillCard
              key={index}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
