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
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <h2 className='text-sm uppercase tracking-widest text-black/60 dark:text-white/60 mb-8'>
              Contact
            </h2>

            {/* Email */}
            <a
              href='mailto:saint.mynel@gmail.com'
              className='group flex flex-col sm:flex-row items-center sm:items-center gap-3 text-base md:text-2xl hover:text-black/60 hover:dark:text-white/60 transition-colors'>
              <Mail className='w-6 h-6 shrink-0' />

              <span className='break-words'>saint.mynel@gmail.com</span>

              <ArrowRight className='w-6 h-6 shrink-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden sm:block' />
            </a>

            {/* Social Links */}
            <div className='flex gap-6 mt-6 justify-center md:justify-start'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group hover:text-black/60 hover:dark:text-white/60 transition-colors'>
                  <social.icon className='w-6 h-6' />
                  <span className='sr-only'>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className='hidden md:flex flex-col justify-end space-y-6'></div>
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
