import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ArrowUp,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const Footer = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const socialLinks = [
    { name: 'GitHub', url: 'http://github.com/Minel03', icon: Github },
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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputClass =
    'w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:border-accent focus:bg-black/8 dark:focus:bg-white/8 transition-all';

  return (
    <footer
      id='contact'
      className='px-6 pt-32 pb-12 bg-black/2 dark:bg-white/2 border-t border-black/5 dark:border-white/5'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 mb-24'>
          {/* Left Side */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <h2 className='text-sm uppercase tracking-[0.2em] font-semibold text-accent'>
                Get in Touch
              </h2>
              <h3 className='text-4xl md:text-6xl font-black uppercase tracking-tighter'>
                Let's Build <br /> Something <br /> Great.
              </h3>
            </div>
            <p className='text-lg text-black/60 dark:text-white/60 font-medium max-w-sm'>
              Open for collaborations and new opportunities. Fill out the form or
              reach me on social media!
            </p>
            <div className='flex gap-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all'>
                  <social.icon className='w-5 h-5' />
                  <span className='sr-only'>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side — Contact Form */}
          <div className='flex flex-col justify-between gap-8'>
            <form ref={formRef} onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input
                  id='contact-name'
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Your Name'
                  required
                  className={inputClass}
                />
                <input
                  id='contact-email'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='your@email.com'
                  required
                  className={inputClass}
                />
              </div>
              <textarea
                id='contact-message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Your message...'
                required
                rows={5}
                className={inputClass + ' resize-none'}
              />

              {/* Status Feedback */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-2 text-sm text-emerald-500 font-medium'>
                  <CheckCircle className='w-4 h-4' />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-2 text-sm text-red-500 font-medium'>
                  <AlertCircle className='w-4 h-4' />
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <button
                id='contact-submit'
                type='submit'
                disabled={status === 'loading'}
                className='group flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-accent/90 disabled:opacity-60 transition-all'>
                {status === 'loading' ? (
                  <Loader2 className='w-4 h-4 animate-spin' />
                ) : (
                  <Send className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                )}
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className='pt-4 md:pt-0'>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='group flex items-center gap-3 text-xs font-black uppercase tracking-widest hover:text-accent transition-colors'>
                Back to Top
                <div className='w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center group-hover:-translate-y-1 transition-transform'>
                  <ArrowUp className='w-4 h-4' />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40'>
            © {new Date().getFullYear()} Mynel Santos.
          </p>
          <div className='flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40'>
            <span>Cavite, Philippines</span>
            <span>Available for Work</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
