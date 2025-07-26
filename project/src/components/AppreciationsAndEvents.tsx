import React from "react";

const AppreciationsAndEvents: React.FC = () => {
  const events = [
    {
      title: "CSI SPM Web Member",
      description: "Served as a technical member in CSI SPM, where I honed my web development skills  through hands-on sessions and workshops.",
      image: "/CSI.jpeg",
      tag: "Appreciation",
      link: "https://credsverse.com/credentials/f657d9c4-924c-4179-ab92-5af6e66178e4"
    },
    {
      title: "Creative Team Member – Microsoft Student Chapter - VIT-AP",
      description: "Contributed to MSC Club by designing posters, writing content, and editing videos to enhance event branding and engagement.",
      image: "/MSC.webp",
      tag: "Appreciation",
      link: "https://www.linkedin.com/in/rishiguptha/overlay/1731252388731/single-media-viewer/?profileId=ACoAADKqlEcBx8SHe14X83Bhhih_u8W6i4sViz8"
    },
    {
      title: "Recognized Venture -Wadhwani Foundation",
      description: "Created a mock startup venture that was certified by a global jury as a viable real-world business idea.",
      image: "/wadwani.png",
      tag: "Appreciation",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:b9657487-9f7e-4e06-906e-76d4a82c575b"
    }
  ];

  return (
    <section className="relative py-20 px-6 text-white overflow-hidden bg-gradient-to-br from-cyan-700 via-indigo-800 to-purple-900 animate-gradient-x bg-[length:400%_400%]">
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-pink-400 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob delay-1000"></div>

      {/* Floating Icons (top and bottom aligned) */}
      <img src="/mongodb.png" className="w-10 absolute top-[8%] left-[10%] opacity-10 animate-float-slow" />
      <img src="/postman.png" className="w-10 absolute top-[10%] left-[30%] opacity-10 animate-float-medium" />
      <img src="/docker.png" className="w-10 absolute top-[12%] right-[5%] opacity-10 animate-float-fast" />
      <img src="/n8n.png" className="w-10 absolute top-[10%] right-[25%] opacity-10 animate-float-fast" />
      <img src="/tailwindcss.png" className="w-10 absolute top-[12%] left-[80%] opacity-10 animate-float-slow" />
      <img src="/react.png" className="w-10 absolute top-[14%] right-[15%] opacity-10 animate-float-medium" />
      <img src="/figma.png" className="w-10 absolute bottom-[10%] left-[20%] opacity-10 animate-float-medium" />
      <img src="/n8n.png" className="w-10 absolute bottom-[12%] left-[40%] opacity-10 animate-float-medium" />
      <img src="/html5.png" className="w-10 absolute bottom-[10%] right-[5%] opacity-10 animate-float-slow" />
      <img src="/python.png" className="w-10 absolute bottom-[8%] left-[60%] opacity-10 animate-float-fast" />
      <img src="/github.png" className="w-10 absolute bottom-[12%] right-[20%] opacity-10 animate-float-medium" />
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

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Engagement & Excellence
        </h2>
        <p className="text-lg text-gray-300 italic mb-4">
          Highlighting the creative, collaborative, and leadership roles I've embraced through active club participation and recognized contributions.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative group bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl shadow-xl hover:shadow-2xl backdrop-blur-md transition-transform transform hover:-translate-y-2 p-1"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs bg-pink-600 text-white px-2 py-1 rounded-full text-[0.7rem] tracking-wider uppercase">
                  {event.tag}
                </span>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal-300 hover:underline"
                >
                  View Certificate
                </a>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {event.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppreciationsAndEvents;
