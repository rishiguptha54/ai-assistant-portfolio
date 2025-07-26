import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/xjkowlea", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    } catch (err) {
      alert("Failed to send");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-20 px-6 text-white overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-700 to-indigo-800 animate-gradient-x bg-[length:400%_400%]">
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob delay-1000"></div>

      {/* Floating Icons */}
      {["/figma.png", "/tailwind.png", "/typescript.png", "/vite.png", "/html5.png", "/nodedotjs.png", "/python.png", "/n8n.png", "/github.png", "/react.png", "/postman.png", "/supabase.png", "/n8n.png", "/kotlin.png", "/numpy.png"].map((src, i) => (
        <img
          key={i}
          src={src}
          className={`w-10 absolute opacity-10 animate-float-${['slow', 'medium', 'fast'][i % 3]} ${[ 
            'top-[5%] left-[10%]',
            'top-[85%] left-[20%]',
            'top-[10%] right-[15%]',
            'top-[90%] right-[25%]',
            'top-[30%] left-[75%]',
            'top-[20%] right-[35%]',
            'top-[15%] left-[60%]',
            'top-[80%] left-[40%]',
            'top-[10%] right-[5%]',
            'top-[50%] left-[20%]',
            'top-[40%] right-[5%]',
            'top-[25%] left-[25%]',
            'top-[60%] right-[40%]',
            'top-[70%] left-[50%]',
            'top-[50%] right-[15%]'
          ][i]}`}
        />
      ))}

      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
          Let’s Collaborate
        </h2>
        <p className="text-lg text-gray-300 italic mb-4">
          Open to projects, collaborations, and opportunities. Drop your message.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 bg-white/5 p-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl">
        {/* Sidebar Left Info */}
        <div className="col-span-1 space-y-6 text-left">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/10 rounded-xl">
              <Mail className="w-6 h-6 text-blue-300" />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-300">rishiguptha45@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/10 rounded-xl">
              <Phone className="w-6 h-6 text-teal-300" />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-300">+91 7569920368</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/10 rounded-xl">
              <MapPin className="w-6 h-6 text-pink-300" />
            </div>
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-300">Ongole , Andhra Pradesh</p>
            </div>
          </div>
        </div>

        {/* Form Right Side */}
        <form
          onSubmit={handleSubmit}
          className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 relative"
        >
          {submitted && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10 flex flex-col items-center justify-center rounded-2xl text-center px-6">
              <CheckCircle className="w-20 h-20 text-green-400 animate-pulse mb-4" />
              <p className="text-2xl font-semibold text-white">Message Sent!</p>
              <p className="text-md text-gray-300 mt-2">Thank you for reaching out. Rishi will get back to you very soon....</p>
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="col-span-1 px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="col-span-1 px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="col-span-2 px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <div className="col-span-2">
            <button
              type="submit"
              className="group w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
