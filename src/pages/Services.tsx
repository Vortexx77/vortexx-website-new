import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | VORTEXX - Digital Excellence';
    
    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal-up').forEach((elem) => {
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: '🌐',
      title: 'Web Design',
      description: 'Crafting immersive, accessible, and high-performance interfaces tailored for modern browsers and devices.',
      offset: false
    },
    {
      icon: '⚙️',
      title: 'Systems Development',
      description: 'Architecting scalable backends and resilient cloud infrastructure to power complex enterprise applications.',
      offset: true
    },
    {
      icon: '🎨',
      title: 'Graphics Design',
      description: 'Developing compelling visual identities, brand systems, and high-fidelity assets that resonate with your audience.',
      offset: false
    },
    {
      icon: '📢',
      title: 'Digital Marketing',
      description: 'Data-driven strategies, SEO optimization, and targeted campaigns to maximize reach and conversion rates.',
      offset: true
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-[120px] pb-[120px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
        <div className="max-w-[1280px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="reveal-up opacity-0 translate-y-8 transition-all duration-500 z-10 flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Digital Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4 leading-tight tracking-tight">
              Transforming <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Capabilities.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              We architect premium digital experiences. Leveraging cutting-edge technology and design systems to propel your enterprise forward in a complex digital landscape.
            </p>
            <div className="flex gap-4">
              <a className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold text-base rounded shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" href="#services">
                Explore Services
              </a>
              <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-200 font-semibold text-base rounded shadow-sm hover:border-blue-600 transition-all duration-200 group" href="#process">
                Our Process
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>
          <div className="relative reveal-up opacity-0 translate-y-8 transition-all duration-500 w-full h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-lg group">
            <img 
              alt="Tech Interface" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* Core Services (Bento Grid) */}
      <section className="py-[120px] bg-white relative" id="services">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-8 reveal-up opacity-0 translate-y-8 transition-all duration-500">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Specialized disciplines converging to build robust, scalable, and visually arresting digital products.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 reveal-up opacity-0 translate-y-8 transition-all duration-500">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg overflow-hidden flex flex-col h-full cursor-default ${
                  service.offset ? 'lg:translate-y-4' : ''
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-2xl group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 relative z-10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-600 relative z-10 flex-grow leading-relaxed">{service.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-200 flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  View Capabilities <ArrowRight className="ml-1" size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-[120px] bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-12 reveal-up opacity-0 translate-y-8 transition-all duration-500">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures we deliver exceptional results that align with your business goals and exceed your expectations.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                number: '01',
                title: 'Discovery',
                description: 'We start by understanding your business, goals, and challenges through in-depth consultations.'
              },
              {
                number: '02',
                title: 'Strategy',
                description: 'Based on our findings, we develop a tailored strategy and roadmap for your solution.'
              },
              {
                number: '03',
                title: 'Implementation',
                description: 'Our team of experts brings the strategy to life with meticulous attention to detail.'
              },
              {
                number: '04',
                title: 'Optimization',
                description: 'We continuously refine and improve your solution based on performance data and feedback.'
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all duration-300 reveal-up opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-black text-blue-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;