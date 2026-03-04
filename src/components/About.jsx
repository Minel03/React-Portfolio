import {
  Code,
  Terminal,
  Database,
  Server,
  Settings,
  Activity,
} from 'lucide-react';

const About = () => {
  return (
    <section
      id='about'
      className='px-6 py-16 md:py-24 border-b border-white/20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* LEFT SIDE */}
        <div>
          <h2 className='text-sm uppercase tracking-widest text-black/60 dark:text-white/60 mb-6'>
            About
          </h2>

          <p className='text-lg md:text-xl lg:text-2xl font-medium leading-relaxed'>
            I am a Full Stack Developer based in the Philippines, specializing
            in building modern, scalable, and user-friendly web applications.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3 className='text-sm uppercase tracking-widest text-black/60 dark:text-white/60 mb-6'>
            Skills
          </h3>

          <ul className='space-y-5 text-base md:text-lg text-black/70 dark:text-white/70'>
            <li className='flex items-start gap-3'>
              <Code className='w-5 h-5 mt-1 shrink-0' />
              <p>
                <strong>Frontend:</strong> React.js, Tailwind CSS, HTML, CSS
              </p>
            </li>

            <li className='flex items-start gap-3'>
              <Terminal className='w-5 h-5 mt-1 shrink-0' />
              <p>
                <strong>Backend:</strong> Node.js, Express.js, FastAPI
              </p>
            </li>

            <li className='flex items-start gap-3'>
              <Database className='w-5 h-5 mt-1 shrink-0' />
              <p>
                <strong>Databases:</strong> MongoDB, MySQL
              </p>
            </li>

            <li className='flex items-start gap-3'>
              <Server className='w-5 h-5 mt-1 shrink-0' />
              <p>
                <strong>APIs & Integration:</strong> REST APIs, Stripe, Razorpay
              </p>
            </li>

            <li className='flex items-start gap-3'>
              <Settings className='w-5 h-5 mt-1 shrink-0' />
              <p>
                <strong>Tools & Deployment:</strong> Git, GitHub, VSCode,
                Vercel, Netlify
              </p>
            </li>

            <li className='flex items-start gap-3'>
              <Activity className='w-5 h-5 mt-1 shrink-0' />
              <p>
                <strong>Programming Languages:</strong> JavaScript, PHP, Python,
                Java
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
