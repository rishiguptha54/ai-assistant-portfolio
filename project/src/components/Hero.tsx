// import React from 'react';
// import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

// const Hero: React.FC = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 text-center text-white px-6 max-w-4xl">
//         <div className="animate-fade-in-up">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
//             Rishi Guptha Neelisetty
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
//             Full Stack Developer & AI Enthusiast
//           </p>
//           <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
//             Crafting innovative digital experiences with cutting-edge technology and creative problem-solving
//           </p>
//         </div>

//         <div className="animate-fade-in-up delay-300">
//           <div className="flex justify-center space-x-6 mb-12">
//             <a
//               href="#"
//               className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
//             >
//               <Github className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
//             </a>
//             <a
//               href="#"
//               className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
//             >
//               <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
//             </a>
//             <a
//               href="#"
//               className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
//             >
//               <Mail className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
//             </a>
//           </div>

//           <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
//             View My Work
//             <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
//           </button>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ChevronDown className="w-6 h-6 text-white/60" />
//       </div>
//     </section>
//   );
// };

// export default Hero;




import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Link } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 text-white overflow-hidden bg-[#0f172a]"
    >
      {/* Fixed Gradient Background Animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-500 via-purple-700 to-indigo-800 animate-gradient-x bg-[length:400%_400%]"></div>

      {/* Animated Floating Tech Icons */}
  <img src="/react.png" className="w-10 absolute top-10 left-10 opacity-20 float-1 z-0" />
  <img src="/figma.png" className="w-10 absolute top-16 left-24 opacity-20 float-2 z-0" />
  <img src="/numpy.png" className="w-12 absolute top-20 left-[30%] opacity-20 float-3 z-0" />
  <img src="/supabase.png" className="w-12 absolute bottom-10 right-20 opacity-20 float-4 z-0" />
  <img src="/kotlin.png" className="w-10 absolute top-[40%] right-[10%] opacity-20 float-5 z-0" />
  <img src="/github.png" className="w-10 absolute bottom-20 left-[30%] opacity-20 float-2 z-0" />
  <img src="/n8n.png" className="w-10 absolute top-32 left-[50%] opacity-20 float-1 z-0" />
  <img src="/typescript.png" className="w-10 absolute top-20 right-[40%] opacity-20 float-3 z-0" />
  <img src="/tailwindcss.png" className="w-10 absolute bottom-32 left-[20%] opacity-20 float-5 z-0" />
  <img src="/python.png" className="w-10 absolute top-16 right-[30%] opacity-20 float-4 z-0" />
  <img src="/postman.png" className="w-10 absolute bottom-10 left-[40%] opacity-20 float-1 z-0" />
  <img src="/nodedotjs.png" className="w-10 absolute bottom-16 right-[30%] opacity-20 float-2 z-0" />
  <img src="/mongodb.png" className="w-10 absolute top-12 right-[20%] opacity-20 float-3 z-0" />
  <img src="/docker.png" className="w-10 absolute bottom-24 left-[50%] opacity-20 float-4 z-0" />
  <img src="/leetcode.png" className="w-10 absolute top-8 left-[70%] opacity-20 float-5 z-0" />
  <img src="/firebase.png" className="w-10 absolute top-4 right-[60%] opacity-20 float-2 z-0" />
  <img src="/html5.png" className="w-10 absolute bottom-4 left-[70%] opacity-20 float-1 z-0" />
  <img src="/anaconda.png" className="w-10 absolute top-2 left-[80%] opacity-20 float-3 z-0" />
  <img src="/codechef.png" className="w-10 absolute bottom-2 right-[80%] opacity-20 float-5 z-0" />
  <img src="/vite.png" className="w-10 absolute top-[5%] left-[90%] opacity-20 float-4 z-0" />
  <img src="/javascript.png" className="w-10 absolute bottom-[5%] right-[90%] opacity-20 float-2 z-0" />


      {/* Floating Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-400 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob delay-1000"></div>

      {/* Parallax Image */}
      <motion.div
        style={{ rotateX: springRotateX, rotateY: springRotateY }}
        className="z-10 mb-10 md:mb-0"
      >
        <motion.div
          whileHover={{ rotate: 5, scale: 1.05 }}
          className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl"
        >
          <img
            src="/rishi.jpg"
            alt="Rishi Guptha"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Right Text Content */}
      <motion.div
        className="z-10 max-w-xl text-right md:text-left"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-purple-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Rishi Guptha
        </motion.h1>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-green-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Neelisetty
        </motion.h1>

        <p className="text-lg md:text-xl text-white/90 mb-6">
          "Crafting intelligent websites and apps. Automating with AI. Powering insights with data."
        </p>

        <div className="flex justify-end md:justify-start space-x-5 mb-6">
          <a href="https://github.com/rishiguptha54" className="hover:scale-110 transition-all">
            <Github className="w-6 h-6 text-white hover:text-cyan-300" />
          </a>
          <a href="https://www.linkedin.com/in/rishi-guptha-neelisetty-2878151b8/" className="hover:scale-110 transition-all">
            <Linkedin className="w-6 h-6 text-white hover:text-cyan-300" />
          </a>
          
          <a href="https://leetcode.com/rishiguptha54" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition-all"
            >
          <img src="/leetcode.svg" alt="LeetCode" className="w-6 h-6 filter brightness-0 invert hover:brightness-100 hover:invert-0" />
          </a>
          <a href="rishiguptha45@gmail.com" className="hover:scale-110 transition-all">
            <Mail className="w-6 h-6 text-white hover:text-cyan-300" />
          </a>
          <a href="https://drive.google.com/file/d/1TbjZ1f6nAKEmp_4cRu3_QIrOIFLr7aY4/view?usp=sharing" className="hover:scale-110 transition-all">
            <Link className="w-6 h-6 text-white hover:text-cyan-300" />
          </a>
        </div>

        <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all">
          View My Work →
        </button>
      </motion.div>

      {/* Scroll icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
