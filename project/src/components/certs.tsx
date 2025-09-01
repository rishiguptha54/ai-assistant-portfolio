import React from 'react';

const Certifications: React.FC = () => {
  const certificates = [
    { 
      title: "AWS Certified Cloud Practitioner",
      description: "Demonstrated foundational knowledge of AWS cloud services, architecture, and best practices for deploying and managing applications on AWS.",
      issuer: "AWS",
      link: "https://www.credly.com/badges/7b96d1bb-06e7-43bd-9373-0f88a850b7a4/public_url",
      image: "/amazon.png"
    },
    { 
      title: "MongoDB Associate Database Administrator",
      description: "Validated expertise in managing, securing, and optimizing MongoDB deployments, including performance tuning, backup/restore, and replication.",
      issuer: "mongoDB",
      link: "https://www.credly.com/badges/76023355-2f0d-4706-bef9-88d9e64e21f3/public_url",
      image: "/mongo1.png"
    },
    {
      title: "Android App Development",
      description: "Completed professional training on native Android app development using Kotlin through Imarticus Learning.",
      issuer: "Imarticus Learning",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:8c0ea77f-0d38-4b2e-9ef0-a01ed0ce55a2",
      image: "/imarticus.png"
    },
    {
      title: "Oracle Cloud Database Services 2025 Certified Professional",
      description: "Certified by Oracle for expertise in managing cloud database services, with focus on performance, availability, and scalability.",
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=47FDC6EDC5331E2A8022D059906D072EC0A48A4776D22AB8884F5696DAC6DDDA",
      image: "/oracle.png"
    },
    {
      title: "DSA Skills Certification",
      description: "Recognized for strong data structures and algorithm skills through HackerRank's certification program.",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/5d38f91d630c",
      image: "/hack.png"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      description: "Credentialed in implementing and integrating generative AI solutions on Oracle Cloud Infrastructure.",
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DA897F67111EEFF3B9B6F417B693884A6865003365185CD0A4A276F4D441BEC3",
      image: "/oracle.png"
    },
    {
      title: "NPTEL - Privacy and Security in Online Social Media",
      description: "Completed NPTEL-certified course on data privacy and security challenges in digital social platforms.",
      issuer: "NPTEL",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:614596e0-d9d9-4b95-af3a-0607ce7638cf",
      image: "/nptel.png"
    },
    {
      title: "MATLAB Onramp Certification",
      description: "Certified in MATLAB fundamentals including data analysis, scripting, and visualization techniques.",
      issuer: "MathWorks",
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=615eeac1-a71f-43f0-aa02-99b047e8680b&",
      image: "/matlab.png"
    }
  ];

  return (
    <section className="relative py-20 text-white overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-700 to-indigo-800 animate-gradient-x bg-[length:400%_400%]">
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-teal-400 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob delay-1000"></div>

      {/* Floating Shadow Icons */}
      <img src="/postman.png" className="w-10 absolute bottom-10 left-[15%] opacity-10" />
<img src="/typescript.png" className="w-10 absolute bottom-14 left-[30%] opacity-10" />
<img src="/kotlin.png" className="w-10 absolute bottom-20 right-[25%] opacity-10" />
<img src="/mongodb.png" className="w-12 absolute bottom-10 right-10 opacity-10" />
<img src="/n8n.png" className="w-10 absolute bottom-[18%] right-[35%] opacity-10" />
<img src="/docker.png" className="w-10 absolute bottom-[22%] left-[10%] opacity-10" />
      <img src="/leetcode.png" className="w-12 absolute top-10 left-10 opacity-10 animate-float-slow" />
      <img src="/docker.png" className="w-12 absolute top-[30%] right-[20%] opacity-10 animate-float-medium" />
      <img src="/react.png" className="w-12 absolute bottom-10 left-[30%] opacity-10 animate-float-fast" />
      <img src="/python.png" className="w-10 absolute top-[20%] left-[60%] opacity-10 animate-float-slow" />
      <img src="/figma.png" className="w-10 absolute bottom-[15%] right-[10%] opacity-10 animate-float-medium" />
        <img src="/firebase.png" className="w-12 absolute top-[5%] right-[30%] opacity-10 animate-float-fast" />
        <img src="/github.png" className="w-12 absolute bottom-[20%] left-[40%] opacity-10 animate-float-slow" />
        <img src="/kotlin.png" className="w-12 absolute top-[15%] left-[70%] opacity-10 animate-float-medium" />
        <img src="/mongodb.png" className="w-12 absolute bottom-[10%] right-[40%] opacity-10 animate-float-fast" />
        <img src="/nodedotjs.png" className="w-12 absolute top-[25%] right-[50%] opacity-10 animate-float-slow" />
        <img src="/typescript.png" className="w-12 absolute bottom-[5%] left-[20%] opacity-10 animate-float-medium" />
        <img src="/n8n.png" className="w-12 absolute top-[35%] left-[80%] opacity-10 animate-float-fast" />
        <img src="/numpy.png" className="w-12 absolute bottom-[30%] right-[50%] opacity-10 animate-float-slow" />
        <img src="/typescript.png" className="w-12 absolute top-[45%] left-[40%] opacity-10 animate-float-medium" />
        <img src="/codechef.png" className="w-12 absolute bottom-[25%] right-[20%] opacity-10 animate-float-fast" />
        <img src="/figma.png" className="w-12 absolute top-[55%] left-[60%] opacity-10 animate-float-slow" />
        <img src="/postman.png" className="w-12 absolute bottom-[15%] right-[30%] opacity-10 animate-float-medium" />
        <img src="/vite.png" className="w-12 absolute top-[65%] left-[20%] opacity-10 animate-float-fast" />
        <img src="/supabase.png" className="w-12 absolute bottom-[5%] left-[80%] opacity-10 animate-float-slow" />
        <img src="/tailwind.png" className="w-12 absolute top-[75%] left-[40%] opacity-10 animate-float-medium" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Certifications & Credentials
          </h2>
          <p className="text-lg text-gray-300 italic mb-4">My Proof of Mastery</p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A curated list of professional certifications that validate my skills across data, cloud, and development domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10 backdrop-blur-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
                  {cert.title}
                </h3>
                <p className="text-gray-200 mb-2 leading-relaxed">{cert.description}</p>
                <p className="text-sm text-gray-400 mb-4">Issued by: {cert.issuer}</p>
                <a
                  href={cert.link}
                  className="inline-block text-sm text-teal-300 hover:text-teal-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
