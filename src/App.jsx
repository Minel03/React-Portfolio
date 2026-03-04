import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  return (
    <div className='bg-white dark:bg-black px-20 transition-colors duration-500'>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/project/:id'
          element={<Project />}
        />
      </Routes>
    </div>
  );
};

export default App;
