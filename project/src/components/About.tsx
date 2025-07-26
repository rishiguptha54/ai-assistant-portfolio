// import React from 'react';
// import { Code, Palette, Zap } from 'lucide-react';

// const About: React.FC = () => {
//   const skills = [
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: "Full Stack Development",
//       description: "Expertise in React, Node.js, Python, and modern web technologies"
//     },
//     {
//       icon: <Palette className="w-8 h-8" />,
//       title: "UI/UX Design",
//       description: "Creating beautiful, intuitive interfaces with attention to detail"
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "AI Integration",
//       description: "Building intelligent applications with machine learning and AI"
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             About Me
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             I'm a passionate developer who loves creating innovative solutions that make a difference. 
//             With a strong foundation in both frontend and backend technologies, I enjoy bringing ideas to life 
//             through clean code and exceptional user experiences.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
//             >
//               <div className="text-blue-600 mb-4 group-hover:text-teal-600 transition-colors duration-300">
//                 {skill.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 {skill.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {skill.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from 'react';
import { Code, Palette, Zap, Smartphone, BarChart2, Wrench } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Expertise in React, Node.js, Python, and modern web technologies"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces with attention to detail"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Integration",
      description: "Building intelligent applications with machine learning and AI Workflows"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description: "Developing mobile apps with Kotlin and modern Android architecture"
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Data Science & Analysis",
      description: "Turning data into insights using Power BI and analytical tools"
    },
    {
  icon: <Wrench className="w-8 h-8" />,
  title: "DevOps & Automation",
  description: "Automating deployment with GitHub Actions, Docker, and CI/CD pipelines"
}
  ];

  return (
    <section className="relative py-20 text-white overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-700 to-indigo-800 animate-gradient-x bg-[length:400%_400%]">
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-teal-400 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob delay-1000"></div>

      {/* Shadow Icons */}
      {/* Top Icons - floating irregularly */}
<img src="/react.png" className="w-12 absolute top-10 left-10 opacity-10" />
<img src="/supabase.png" className="w-12 absolute top-14 left-[20%] opacity-10" />
<img src="/typescript.png" className="w-10 absolute top-16 left-[35%] opacity-10" />
<img src="/figma.png" className="w-10 absolute top-[22%] left-[50%] opacity-10" />
<img src="/github.png" className="w-10 absolute top-[26%] right-[18%] opacity-10" />
<img src="/python.png" className="w-12 absolute top-20 right-[28%] opacity-10" />
<img src="/n8n.png" className="w-10 absolute top-12 right-[15%] opacity-10" />
<img src="/docker.png" className="w-12 absolute top-10 right-10 opacity-10" />
<img src="/postman.png" className="w-10 absolute top-24 left-[8%] opacity-10" />
<img src="/kotlin.png" className="w-10 absolute top-[18%] left-[65%] opacity-10" />


{/* Bottom Icons - floating irregularly */}
<img src="/postman.png" className="w-10 absolute bottom-10 left-[15%] opacity-10" />
<img src="/typescript.png" className="w-10 absolute bottom-14 left-[30%] opacity-10" />
<img src="/kotlin.png" className="w-10 absolute bottom-20 right-[25%] opacity-10" />
<img src="/mongodb.png" className="w-12 absolute bottom-10 right-10 opacity-10" />
<img src="/n8n.png" className="w-10 absolute bottom-[18%] right-[35%] opacity-10" />
<img src="/docker.png" className="w-10 absolute bottom-[22%] left-[10%] opacity-10" />


      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves creating innovative solutions that make a difference. 
            With a strong foundation in both frontend and backend technologies, I enjoy bringing ideas to life 
            through clean code and exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10 backdrop-blur-md"
            >
              <div className="text-teal-300 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
                {skill.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
