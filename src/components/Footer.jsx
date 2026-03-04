import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Mail,
  MapPin,
  ArrowRight,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Phone,
} from 'lucide-react';

const Footer = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Social links - customize these
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'http://github.com/Minel03',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mynel-iesu-santos-ab4110315/',
      icon: Linkedin,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/myneliesu.santos/',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mynelsantos/',
      icon: Instagram,
    },
  ];

  return (
    <footer
      id='contact'
      className='relative'>
      {/* Progress Bar */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50'
        style={{ scaleX }}
      />

      <div className='px-6 pt-24 pb-12'>
        {/* Contact Links */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-24'>
          <div>
            <h2 className='text-sm uppercase tracking-widest text-black/60 dark:text-white/60 mb-8'>
              Contact
            </h2>
          </div>

          <div className='flex flex-col justify-end space-y-6'>
            <a
              href='mailto:saint.mynel@gmail.com'
              className='group flex items-center gap-4 md:text-2xl hover:text-black/60 hover:dark:text-white/60 transition-colors'>
              <Mail className='w-6 h-6' />
              saint.mynel@gmail.com
              <ArrowRight className='w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all' />
            </a>

            {/* Social Links - Updated to remove deprecated Instagram */}
            <div className='flex gap-6'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-2 text-xl hover:text-black/60 hover:dark:text-white/60 transition-colors'>
                  <social.icon className='w-6 h-6' />
                  <span className='sr-only'>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className='flex justify-center items-center pt-12 border-t border-white/20'>
          <p className='text-sm text-black/40 dark:text-white/40 text-center'>
            © {new Date().getFullYear()} Mynel Santos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
