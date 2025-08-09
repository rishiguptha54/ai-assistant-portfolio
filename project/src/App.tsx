// import React from 'react';
// import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import ChatBot from './components/ChatBot';
// import Certifications from './components/certs';
// import LeetCodeStats from './components/LeetCodeStats';
// import AppreciationsAndEvents from './components/AppreciationsAndEvents';

// function App() {
//   return (
//     <div className="min-h-screen">
//       <Hero />
//       <About />
//       <Projects />
//       <Certifications />
//       <LeetCodeStats />
//       <AppreciationsAndEvents />
//       <Contact />
//       <ChatBot />
//     </div>
//   );
// }

// export default App;



import React, { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import Certifications from './components/certs';
import LeetCodeStats from './components/LeetCodeStats';
import AppreciationsAndEvents from './components/AppreciationsAndEvents';

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero scrollToProjects={scrollToProjects} />
      <About />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Certifications />
      <LeetCodeStats />
      <AppreciationsAndEvents />
      <Contact />
      <ChatBot />
    </div>
  );
}

export default App;



