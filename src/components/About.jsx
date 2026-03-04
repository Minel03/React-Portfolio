const About = () => {
  return (
    <section
      id='about'
      className='px-6 py-24 border-b border-white/20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div>
          <h2 className='text-sm uppercase tracking-widest text-black/60 dark:text-white/60 mb-8'>
            About
          </h2>
          <p className='text-xl md:text-2xl font-medium leading-tight'>
            I am a Full Stack Developer based in the Philippines, specializing
            in building modern, scalable, and user-friendly web applications.
          </p>
        </div>

        <div className='space-y-8'>
          <div className='space-y-2'>
            <h3 className='text-sm uppercase tracking-widest text-black/60 dark:text-white/60'>
              Skills
            </h3>
            <ul className='space-y-1 text-lg text-black/70 dark:text-white/70'>
              <li>
                <strong>Frontend:</strong> React.js, Tailwind CSS, HTML, CSS
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, FastAPI
              </li>
              <li>
                <strong>Databases:</strong> MongoDB, MySQL
              </li>
              <li>
                <strong>APIs & Integration:</strong> REST APIs, Stripe, Razorpay
              </li>
              <li>
                <strong>Tools & Deployment:</strong> Git, GitHub, VSCode,
                Vercel, Netlify
              </li>
              <li>
                <strong>Languages:</strong> JavaScript, PHP, Python, Java
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
