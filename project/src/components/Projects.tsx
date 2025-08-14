import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
  {
  title: "PrazeAI – Personal AI Guide",
  description: "An AI assistant powered by n8n workflows to help with studies, daily queries, and task automation via a smart chat interface.",
  image: "https://images.pexels.com/photos/8296978/pexels-photo-8296978.jpeg?auto=compress&cs=tinysrgb&w=800",
  tech: ["React", "Supabase", "n8n", "OpenAI", "No-Code Low-Code Automation"],
  github: "https://github.com/rishiguptha54/prazeAI-Agent",
  demo: "https://praze-ai-agent.vercel.app/"
},
{
  title: "DesiDukaan - Connecting Local Shops to Digital India",
  description: "A platform for local shopkeepers to manage products and orders, and for customers to shop easily with secure payments and real-time support via an integrated chatbot",
  image: "/desi.png",
  tech: ["React", "TypeScript", "TailwindCSS", "Paypal Sandbox", "MongoDB", "Express", "Node.js"],
  github: "https://github.com/rishiguptha54/DesiDukaan",
  demo: "https://desi-dukaan-inky.vercel.app/"
},
{
  title: "Wanderlust – Room Booking Platform",
  description: "A full-featured room booking website with user authentication, listing management, real-time availability, and interactive maps using Mapbox.",
  image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
  tech: ["MongoDB", "Express", "React", "Node.js", "Mapbox"],
  github: "https://github.com/rishiguptha54/WanderLust",
  demo: "https://wanderlust-r.onrender.com/listings"
},
{
  title: "Smart Portfolio Website with AI Assistant",
  description: "A modern portfolio built using the MERN stack and TypeScript, featuring an interactive AI chatbot integrated via n8n and LangChain to answer recruiter-specific questions about my skills, projects, and experience.",
  image: "/port.png",
  tech: ["TailwindCSS", "React", "TypeScript", "n8n", "LangChain"],
  github: "https://github.com/rishiguptha54/ai-assistant-portfolio",
  demo: "https://www.rishi45.dev/"
},
{
  title: "FeastXpress – Food Delivery App",
  description: "A native Android food delivery application built with Kotlin and Java, featuring real-time order tracking, restaurant listings, and seamless user experience.",
  image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  tech: ["Kotlin", "Java", "Android"],
  github: "https://github.com/rishiguptha54/feastXpress",
  demo: "https://github.com/rishiguptha54/feastXpress"
},
{
  title: "VidO – Real-Time Video Meeting Platform",
  description: "A full-stack video calling web app built with the MERN stack and WebSockets, supporting group video meetings, chat, and screen sharing in real-time.",
  image: "/video.png",
  tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "WebRTC"],
  github: "https://github.com/rishiguptha54/vidO",
  demo: "https://github.com/rishiguptha54/vidO"
},
{
  title: "Interactive Chatting Web App",
  description: "A real-time chatting platform with an interactive UI, enabling seamless communication through a responsive web interface.",
  image: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=800",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/rishiguptha54/chating",
  demo: "https://github.com/rishiguptha54/chating"
},
{
  title: "Lumber Spain – X-ray Image Classification",
  description: "A deep learning project for classifying lumber spain samples using X-ray imaging and EfficientNet, trained in Python on Google Colab.",
  image: "/lumber.png",
  tech: ["Python", "Colaboratory", "EfficientNet", "X-ray Image Classification"],
  github: "https://github.com/rishiguptha54/Lumber_spine_efficientNet",
  demo: "https://github.com/rishiguptha54/Lumber_spine_efficientNet"
},
{
  title: "Amazon Sales Analysis & Dashboard",
  description: "A comprehensive sales data analysis project using Python for data wrangling and Power BI for interactive dashboarding and business insights.",
  image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
  tech: ["Python", "NumPy", "Pandas", "Power BI"],
  github: "https://github.com/rishiguptha54/amazon-sales",
  demo: "https://github.com/rishiguptha54/amazon-sales"
},
{
  title: "FDI Data – Exploratory Data Analysis",
  description: "Performed exploratory data analysis on Foreign Direct Investment data using NumPy and Pandas to uncover trends, patterns, and insights across sectors and countries.",
  image: "https://images.pexels.com/photos/4386368/pexels-photo-4386368.jpeg?auto=compress&cs=tinysrgb&w=800",
  tech: ["Python", "NumPy", "Pandas", "EDA"],
  github: "https://github.com/rishiguptha54/FDI-PROJECT",
  demo: "https://github.com/rishiguptha54/FDI-PROJECT"
},
{
  title: "Twitter Sentiment Analysis",
  description: "A machine learning project for analyzing tweet sentiments using cleaned Twitter data and ML models built with NumPy and Pandas.",
  image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
  tech: ["Python", "NumPy", "Pandas", "Machine Learning"],
  github: "https://github.com/rishiguptha54/Twitter_sentiment_analysis",
  demo: "https://github.com/rishiguptha54/Twitter_sentiment_analysis"
},
{
  title: "Stock Price Prediction",
  description: "A deep learning-based web app for forecasting stock prices using LSTM models. Built with Python, Keras, and Streamlit for interactive visualization and prediction.",
  image: "stock.png",
  tech: ["Python", "NumPy", "Pandas", "Keras", "Streamlit"],
  github: "https://github.com/rishiguptha54/Stock-Predictor",
  demo: "https://github.com/rishiguptha54/Stock-Predictor"
},
{
  title: "Emotion Detection – NLP Model Comparison",
  description: "An NLP project for detecting emotions from text using GRU, LSTM, Stacked GRU, Bi-LSTM, and BERT with detailed evaluation and comparisons.",
  image: "emotion.png",
  tech: ["Python", "GRU", "LSTM", "Bi-LSTM", "BERT", "NLP"],
  github: "https://github.com/rishiguptha54/emotion_detecion_analysis_models",
  demo: "https://github.com/rishiguptha54/emotion_detecion_analysis_models"
},
{
  title: "FIFA Data Analysis & Visualization",
  description: "Performed exploratory data analysis and interactive visualizations on FIFA player data to uncover patterns in player performance, positions, and attributes using Python.",
  image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800",
  tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
  github: "https://github.com/rishiguptha54/FIFA",
  demo: "https://github.com/rishiguptha54/FIFA"
},
  ];

 return (
    <section className="relative py-20 text-white overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-700 to-indigo-800 animate-gradient-x bg-[length:400%_400%]">
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-teal-400 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob delay-1000"></div>

      {/* Shadow Icons */}
      <img src="/react.png" className="w-12 absolute top-10 left-10 opacity-10" />
      <img src="/python.png" className="w-12 absolute top-20 right-16 opacity-10" />
      <img src="/typescript.png" className="w-10 absolute bottom-10 left-[30%] opacity-10" />
      <img src="/kotlin.png" className="w-10 absolute bottom-20 right-[25%] opacity-10" />
      <img src="/figma.png" className="w-10 absolute top-[30%] left-[50%] opacity-10" />
      <img src="/mongodb.png" className="w-10 absolute top-[45%] right-[10%] opacity-10" />
      <img src="/n8n.png" className="w-10 absolute bottom-[10%] right-[40%] opacity-10" />
      <img src="/openai.png" className="w-10 absolute top-[15%] left-[80%] opacity-10" />
      <img src="/supabase.png" className="w-10 absolute bottom-[5%] left-[15%] opacity-10" />
      <img src="/javascript.png" className="w-10 absolute top-[5%] right-[50%] opacity-10" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10 backdrop-blur-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100/10 text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-300 hover:text-teal-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
