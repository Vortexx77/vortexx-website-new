import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, Target, Award, TrendingUp, ChevronLeft, ChevronRight, Star, Calendar } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.title = 'VORTEXX - Transforming Ideas Into Digital Reality';
    
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

    document.querySelectorAll('.reveal-on-scroll').forEach((elem) => {
      observer.observe(elem);
    });

    // Carousel auto-slide
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const slides = [
    {
      title: 'Transforming',
      subtitle: 'Ideas Into',
      highlight: 'Digital Reality',
      description: 'We architect full-service technology solutions, driving innovation and scale.',
      badge: 'Enterprise Solutions',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      title: 'Engineered for',
      subtitle: 'Unmatched',
      highlight: 'Performance',
      description: 'Building robust infrastructure for effortless and secure scaling.',
      badge: 'Systems Architecture',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      title: 'The Team Behind',
      subtitle: 'Your Future',
      highlight: 'Success',
      description: 'Partner with dedicated engineers and designers committed to your vision.',
      badge: 'Expert Collaboration',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Carousel Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-gray-900" id="hero-carousel">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1200 ${
              currentSlide === index ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 z-0 h-[120%] -top-[10%]">
              <img 
                alt={slide.badge}
                className="w-full h-full object-cover object-center opacity-70"
                src={slide.image}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
            </div>
            
            <div className="relative z-10 w-full h-full max-w-[1280px] mx-auto px-8 flex flex-col justify-center">
              <div className="max-w-4xl relative">
                <div className="absolute -inset-6 md:-inset-10 -z-10 rounded-2xl opacity-60 bg-gray-900/40 backdrop-blur-[24px] border border-white/10"></div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white text-[10px] tracking-widest uppercase mb-6 backdrop-blur-xl">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
                  </span>
                  {slide.badge}
                </div>
                <h1 className="text-4xl lg:text-7xl text-white leading-[0.95] tracking-tighter mb-6 font-black">
                  {slide.title}<br/>
                  <span className="font-light italic text-white/90">{slide.subtitle}</span><br/>
                  <span className="bg-gradient-to-r from-[#001e2c] via-[#00668a] to-[#3abef9] bg-clip-text text-transparent inline-block -mt-2">
                    {slide.highlight}
                  </span>
                </h1>
                <p className="text-base lg:text-lg text-gray-300 max-w-xl leading-relaxed font-light mb-8">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-blue-400 text-gray-900 px-7 py-3 rounded-full text-sm font-semibold hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(196,231,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2 group">
                    {index === 0 ? 'Explore Services' : index === 1 ? 'Our Approach' : 'Meet the Team'}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={16} />
                  </button>
                  {index === 0 && (
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-white/20 transition-all duration-500">
                      Book a Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Navigation */}
        <div className="absolute bottom-6 left-0 w-full z-20">
          <div className="max-w-[1280px] mx-auto px-8 flex gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-0.5 rounded-full transition-all duration-300 relative overflow-hidden ${
                  currentSlide === index 
                    ? 'w-16 bg-white/30' 
                    : 'w-8 bg-white/30'
                }`}
              >
                {currentSlide === index && (
                  <div className="absolute top-0 left-0 h-full bg-white animate-progress-bar"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-10"></div>
      </section>

      {/* Trusted By Section */}
      <div className="py-12 border-b border-gray-200 bg-white reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-12">
          <p className="text-center text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-10">Trusted by forward-thinking teams</p>
        </div>
        
        <div className="relative">
          {/* Fade edges - extending to actual page edges */}
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div className="flex gap-16 animate-scroll-left">
            <div className="flex gap-16 shrink-0">
              <div className="text-lg lg:text-xl font-black text-gray-700 tracking-tighter hover:text-blue-600 transition-all duration-500 cursor-pointer whitespace-nowrap">
                ACME Corp
              </div>
              <div className="text-lg lg:text-xl font-black text-gray-700 tracking-tighter hover:text-blue-600 transition-all duration-500 cursor-pointer whitespace-nowrap">
                GlobalTech
              </div>
              <div className="text-lg lg:text-xl font-black text-gray-700 tracking-tighter hover:text-blue-600 transition-all duration-500 cursor-pointer whitespace-nowrap">
                Nexus Ind.
              </div>
              <div className="text-lg lg:text-xl font-black text-gray-700 tracking-tighter hover:text-blue-600 transition-all duration-500 cursor-pointer whitespace-nowrap">
                Stark Sys.
              </div>
              <div className="text-lg lg:text-xl font-black text-gray-700 tracking-tighter hover:text-blue-600 transition-all duration-500 cursor-pointer whitespace-nowrap">
                TechVentures
              </div>
              <div className="text-lg lg:text-xl font-black text-gray-700 tracking-tighter hover:text-blue-600 transition-all duration-500 cursor-pointer whitespace-nowrap">
                InnovateCo
              </div>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex gap-16 shrink-0" aria-hidden="true">
              <div className="text-lg lg:text-xl font-black text-gray-700 tracking-tighter hover:text-blue-600 transition-all duration-500 cursor-pointer whitespace-nowrap">
                ACME Corp
              </div>
              <div className="text-lg lg:text-xl font-black text-gray-700 tracking-tighter hover:text-blue-600 transition-all duration-500 cursor-pointer whitespace-nowrap">
                GlobalTech
              </div>
              <div className="text-lg lg:text-xl font-black text-gray-700 tracking-tighter hover:text-blue-600 transition-all duration-500 cursor-pointer whitespace-nowrap">
                Nexus Ind.
              </div>
              <div className="text-lg lg:text-xl font-black text-gray-700 tracking-tighter hover:text-blue-600 transition-all duration-500 cursor-pointer whitespace-nowrap">
                Stark Sys.
              </div>
              <div className="text-lg lg:text-xl font-black text-gray-700 tracking-tighter hover:text-blue-600 transition-all duration-500 cursor-pointer whitespace-nowrap">
                TechVentures
              </div>
              <div className="text-lg lg:text-xl font-black text-gray-700 tracking-tighter hover:text-blue-600 transition-all duration-500 cursor-pointer whitespace-nowrap">
                InnovateCo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Craftsmanship Section */}
      <section className="py-24 bg-gray-50 relative z-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
            <div className="w-full lg:w-8/12 relative group reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 z-10">
              <div className="aspect-[16/9] rounded-[1.5rem] overflow-hidden shadow-xl relative">
                <img 
                  alt="Tech Craftsmanship" 
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-5/12 lg:-ml-24 relative z-20 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-8 lg:mt-0">
              <div className="bg-gray-900/80 backdrop-blur-xl p-8 lg:p-10 rounded-[1.5rem] border border-white/10 shadow-xl hover:scale-[1.02] transition-transform duration-500">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-blue-400 text-[10px] mb-6 uppercase tracking-[0.2em] font-bold">Tech Craftsmanship</div>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tighter leading-tight">
                  Engineered for<br/>
                  <span className="italic font-light text-blue-400">Scale & Precision</span>
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-blue-400/50 pl-5 hover:border-blue-400 transition-colors">
                    <h3 className="text-lg font-bold mb-1.5 text-white">Systems Development</h3>
                    <p className="text-gray-300 text-xs font-light leading-relaxed">Custom infrastructure for flawless integration and high performance.</p>
                  </div>
                  <div className="border-l-2 border-white/20 pl-5 hover:border-blue-400 transition-colors">
                    <h3 className="text-lg font-bold mb-1.5 text-white">Digital Design</h3>
                    <p className="text-gray-300 text-xs font-light leading-relaxed">Conversion-optimized interfaces that capture brand essence.</p>
                  </div>
                </div>
                <a className="mt-8 inline-flex items-center gap-3 text-blue-400 font-bold text-xs uppercase tracking-wider group/link" href="#">
                  Explore Capabilities
                  <div className="w-8 h-8 rounded-full border border-blue-400/30 flex items-center justify-center group-hover/link:bg-blue-400 group-hover/link:text-gray-900 transition-all">
                    <ArrowRight size={14} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineered Collaboration Section */}
      <section className="relative min-h-[700px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Engineered Collaboration" 
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        <div className="max-w-[1200px] mx-auto px-12 relative z-10 w-full reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="max-w-2xl bg-gray-900/80 backdrop-blur-md p-8 lg:p-10 rounded-[1.5rem] border border-white/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-white text-[10px] mb-5 uppercase tracking-[0.2em] font-bold">
              Engineered Collaboration
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              The Engine Behind <br/>
              <span className="italic font-light text-blue-400">Your Success</span>
            </h2>
            <p className="text-sm lg:text-base text-white/80 font-light mb-8 max-w-lg leading-relaxed">
              Our expert teams work in seamless synergy, translating complex challenges into elegant digital solutions.
            </p>
            <button className="bg-blue-400 text-gray-900 px-8 py-3.5 rounded-full text-sm hover:bg-white transition-all duration-500 shadow-lg font-bold uppercase tracking-widest flex items-center gap-2">
              Meet The Team
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Impact Section - Updated with Icons */}
      <section className="relative py-16 bg-gray-900 overflow-hidden border-t border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none z-0"></div>
        <div className="max-w-[1200px] mx-auto px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { value: '50', suffix: '+', label: 'Happy Clients', Icon: Users },
              { value: '100', suffix: '+', label: 'Projects Delivered', Icon: Target },
              { value: '2', suffix: 'yrs', label: 'Years Experience', Icon: Award },
              { value: '98', suffix: '%', label: 'Satisfaction Rate', Icon: TrendingUp }
            ].map((metric, index) => {
              const IconComponent = metric.Icon;
              return (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl flex flex-col justify-between h-[160px] group border border-white/5 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 hover:scale-105 hover:bg-white/10"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-gray-300 uppercase tracking-[0.15em] text-[10px] font-bold">{metric.label}</div>
                    <IconComponent className="text-blue-400/60 group-hover:text-blue-400 transition-colors" size={20} />
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-1 font-black">
                      <span className="text-4xl lg:text-5xl text-white">{metric.value}</span>
                      <span className={`text-blue-400 ${metric.suffix === 'yrs' ? 'text-xl font-light italic' : 'text-2xl'}`}>{metric.suffix}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Testimonial Section */}
      <section className="py-24 bg-gray-50 px-12 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="relative max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              {/* Editorial Image */}
              <div className="w-full md:w-2/5 relative hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-[3/4] rounded-xl overflow-hidden relative shadow-xl">
                  <img 
                    alt="Jennifer Kasuku" 
                    className="w-full h-full object-cover contrast-[1.1]" 
                    src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-overlay"></div>
                </div>
              </div>
              
              {/* Quote Content */}
              <div className="w-full md:w-3/5 text-center md:text-left pt-6 md:pt-0">
                <div className="flex gap-1 justify-center md:justify-start mb-6 text-blue-600">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-2xl lg:text-3xl font-black text-gray-900 leading-[1.2] mb-8 tracking-tight">
                  "VORTEXX's expertise in systems development has been invaluable. They helped us migrate to more robust infrastructure."
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-gray-900 text-base uppercase tracking-wider">Jennifer Kasuku</h4>
                    <p className="text-gray-600 text-sm font-light mt-0.5">Operations Director, TechFlow</p>
                  </div>
                  <div className="w-12 h-[1px] bg-gray-300 hidden sm:block mx-3"></div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:text-blue-600 transition-all duration-300 hover:border-transparent group">
                      <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-md group">
                      <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refined CTA Section */}
      <section className="py-20 px-12 bg-gray-50 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="bg-gray-900 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden shadow-xl border border-white/10 group hover:scale-[1.01] transition-transform duration-500">
            {/* Premium Mesh Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-400/10 opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 mix-blend-screen pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900/40 backdrop-blur-md text-blue-400 text-[10px] mb-8 uppercase tracking-[0.3em] font-bold border border-white/10 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                </span>
                Start Your Journey
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1] tracking-tighter">
                Ready to <span className="text-transparent" style={{WebkitTextStroke: '1.5px rgba(255,255,255,0.3)'}}>Transform</span><br/> Your Business?
              </h2>
              <p className="text-sm lg:text-base text-gray-300/90 mb-12 font-light max-w-xl mx-auto leading-relaxed">
                Partner with VORTEXX to unlock your full digital potential. Our expert team is ready to help you navigate the technology landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-blue-400 text-gray-900 px-8 py-3.5 rounded-full text-sm hover:bg-white transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(0,102,138,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,102,138,0.5)] hover:-translate-y-2 font-bold uppercase tracking-widest flex items-center gap-2">
                  Schedule Consultation
                  <Calendar size={18} />
                </button>
                <button className="bg-white/10 backdrop-blur-md border-white/20 text-white px-8 py-3.5 rounded-full text-sm hover:bg-white/20 transition-all duration-500 flex items-center justify-center gap-3 font-bold uppercase tracking-widest group/btn hover:-translate-y-1">
                  Explore Services 
                  <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-gray-900 transition-all">
                    <ArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" size={14} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
