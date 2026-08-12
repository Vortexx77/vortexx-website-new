import React, { useEffect } from 'react';
import { Lightbulb, Zap, Eye, RefreshCw } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | VORTEXX';
    
    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal-elem').forEach((elem) => {
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: 'Elena Rostova',
      position: 'Chief Executive Officer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbfU9wZQ51IUd8rGMQ-CFUmqevo9KtfY-jbRHC_sTEvhEoM7aB8bhWppfdJnJtk8rSzVBPt6bVOnQm6P8V7yX5w8HPYvxNFqBIazPmGWxMHPK9awbWVG68YxwSIV63cUO_EosXL6ilh0kv_wTtYvxv0thjnl16H6NYmvHeqzG6mgMCz0TXnLY6GrU3_vqD8F8UAw-FK12YkPa4cC9NC_Uq7uaWEn5YZI0jHr6iDjRjwErQ6vmeAze8Aw'
    },
    {
      name: 'Marcus Chen',
      position: 'Head of Engineering',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9Mt-DNltUvZM2EdroqCL4CmexjomoiBcmsmfvXc1E4uPsfMFJF0UGHglLNluDeKDP5KeWBLAnM9DWE-VniqIaqy6P1tvgLDw05IzufzK14I34M1v_1mdTGjNyaSGOX3eYYN2T9i_g1Y_Vc1KTaegSFnXH6hB9LNV0NoRT42A_EajGEpVR-254MJzgiKMAe61I-x2P_I8Ak7_4JT_y2gAWPCFW-BVedeb6lKiFXNb2QGH00gb0WyuKPQ'
    },
    {
      name: 'Sarah Jenkins',
      position: 'Creative Director',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkuj3wBsYAC9EaUEYG0tXiE95kPJsULsqAyk4xvkHshHkTLUIJRucoiNtLmCwNH3u8XKmsszdP79JxkzZOO_wPzewraGRajiT-MCOnIk6VSgUROi-eZRQ-iCsnYTXrCz9-ZTb6JI_gYbsrGjWdul0qG1yetvy0N-fOev9ubvvf3CTcxdmbgTHx8fV8xnqcUtixNQoRXcgepDptYZHeSDU5utbqpQrpXginZ1gK5kLSwZhQV7kL70Oq_Q'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-8 py-20 flex flex-col gap-6 reveal-elem opacity-0 translate-y-5 transition-all duration-500">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 max-w-4xl leading-tight tracking-tight">
          We are a creative agency driven by data.
        </h1>
        <div className="w-full aspect-[1.34] rounded-xl overflow-hidden border border-gray-200 relative group shadow-lg">
          <img 
            alt="About VORTEXX" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLv4MGkPCuzO1vXyVL8b97zEe9Gaz_SrkcxFvwsQYBcMEjPoNfxzOdMCJ_cB0oFC96M2fx44bzNj-758IYwoi3Ee5XDAJuB3nLlHE1GsK8VN7H-wRRUynJ78s-zQhG43klVAJ7SiUCDPOOFiPrqbmVaSUyifI5nkeLeETHW8qjXwr3OJUzuBIEeudPtN9cByujwKnnTgEwbaZ_J_TbRQVJPLz7w-yfzpaa40HsZgN9Ugtfq3XqHeoI7vM9Oq"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 border-y border-gray-200 py-20 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row gap-6 items-center reveal-elem opacity-0 translate-y-5 transition-all duration-500">
          <div className="md:w-1/2 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight relative z-20 -mr-12 mt-12 bg-white/60 backdrop-blur p-4 rounded-lg shadow-sm border border-gray-200">
              Forged in complexity.<br/>Refined by intent.
            </h2>
          </div>
          <div className="md:w-1/2 text-base text-gray-700 space-y-4">
            <p>VORTEXX is a team of creatives, strategists, and technologists who believe in the power of data-driven design. We are passionate about helping brands navigate the complex digital landscape and create meaningful connections with their audiences.</p>
            <p>Our approach is holistic, blending strategic thinking with cutting-edge execution to deliver results that matter. We don't just build websites; we create digital ecosystems that drive growth and foster long-term success.</p>
          </div>
        </div>
      </section>

      {/* Meet the Leaders */}
      <section className="max-w-[1280px] mx-auto px-8 py-20">
        <div className="mb-8 reveal-elem opacity-0 translate-y-5 transition-all duration-500">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Team</h2>
          <p className="text-sm text-gray-600 mt-2">The architects behind the ecosystem.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-elem opacity-0 translate-y-5 transition-all duration-500">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-2 shadow-sm hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="aspect-square rounded-md overflow-hidden bg-gray-200">
                <img 
                  className="w-full h-full object-cover" 
                  alt={member.name} 
                  src={member.image} 
                />
              </div>
              <div className="mt-2">
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 mt-1">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Bento */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-8 reveal-elem opacity-0 translate-y-5 transition-all duration-500">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[520px]">
            {/* Large Feature - Innovation */}
            <div className="md:col-span-2 md:row-span-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-base text-gray-700 max-w-md">
                  We are always looking for new and better ways to do things. We embrace change and are constantly pushing the boundaries of what is possible.
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            
            {/* Integrity */}
            <div className="md:col-span-2 md:row-span-1 bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Zap size={48} className="text-gray-900" />
              </div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Integrity</h4>
              <p className="text-sm text-gray-600">
                We are honest, transparent, and always do the right thing, even when no one is looking.
              </p>
            </div>
            
            {/* Collaboration */}
            <div className="md:col-span-1 md:row-span-1 bg-blue-600 text-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
              <Eye size={32} className="opacity-80" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest mb-1">Collaboration</h4>
                <p className="text-blue-100 opacity-90 text-xs">
                  Working together to achieve common goals.
                </p>
              </div>
            </div>
            
            {/* Excellence */}
            <div className="md:col-span-1 md:row-span-1 bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
              <RefreshCw size={32} className="text-blue-600" />
              <div>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-1">Excellence</h4>
                <p className="text-gray-600 text-xs">
                  Striving for greatness in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;