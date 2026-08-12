import React, { useEffect, useState } from 'react';
import { Mail, Users, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Contact VORTEXX';
    
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

    document.querySelectorAll('.reveal').forEach((elem) => {
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-[120px] pb-[120px] bg-gradient-to-b from-blue-50 to-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4 reveal opacity-0 translate-y-5 transition-all duration-500">
            Let's Create<br/>
            Something <span className="text-blue-600">Extraordinary</span>.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 reveal opacity-0 translate-y-5 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
            Reach out to our global team of strategists and engineers. We're ready to transform your ideas into digital reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal opacity-0 translate-y-5 transition-all duration-500" style={{ transitionDelay: '200ms' }}>
            <a className="bg-blue-600 text-white font-semibold text-base px-8 py-4 rounded uppercase shadow-lg hover:scale-95 transition-transform duration-250" href="#inquiry-form">
              Start a Project
            </a>
            <a className="bg-white text-gray-900 border border-gray-200 font-semibold text-base px-8 py-4 rounded uppercase hover:bg-gray-50 transition-colors duration-250" href="#offices">
              View Global Offices
            </a>
          </div>
        </div>
      </section>

      {/* Project Inquiry Form */}
      <section className="py-[120px] bg-white" id="inquiry-form">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="reveal opacity-0 translate-y-5 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Project Inquiry</h2>
              <p className="text-gray-600 mb-8">Tell us about your challenges and goals. We'll get back to you within 24 hours to schedule a discovery call.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Email Us Directly</h3>
                    <p className="text-gray-600">hello@vortexx.digital</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">24/7 Support Desk</h3>
                    <p className="text-gray-600">For existing clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 reveal opacity-0 translate-y-5 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2" htmlFor="first-name">First Name</label>
                    <input 
                      className="w-full bg-white/80 backdrop-blur-md border border-gray-200 rounded px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-250" 
                      id="first-name" 
                      placeholder="Jane" 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2" htmlFor="last-name">Last Name</label>
                    <input 
                      className="w-full bg-white/80 backdrop-blur-md border border-gray-200 rounded px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-250" 
                      id="last-name" 
                      placeholder="Doe" 
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2" htmlFor="email">Work Email</label>
                  <input 
                    className="w-full bg-white/80 backdrop-blur-md border border-gray-200 rounded px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-250" 
                    id="email" 
                    placeholder="jane@company.com" 
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2" htmlFor="company">Company</label>
                  <input 
                    className="w-full bg-white/80 backdrop-blur-md border border-gray-200 rounded px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-250" 
                    id="company" 
                    placeholder="Company Inc." 
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2" htmlFor="message">Project Details</label>
                  <textarea 
                    className="w-full bg-white/80 backdrop-blur-md border border-gray-200 rounded px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-250" 
                    id="message" 
                    placeholder="Briefly describe your needs..." 
                    rows={4}
                  ></textarea>
                </div>
                <button 
                  className={`relative overflow-hidden flex items-center justify-center gap-2 w-full text-white font-semibold text-base py-4 rounded uppercase shadow-lg transition-all duration-400 ${
                    isLoading ? 'bg-blue-600 opacity-90 scale-98' :
                    isSuccess ? 'bg-green-600 scale-102' :
                    'bg-blue-600 hover:scale-98 hover:bg-blue-700'
                  }`}
                  type="submit"
                  disabled={isLoading || isSuccess}
                >
                  {isLoading && <span className="animate-spin">⏳</span>}
                  {isSuccess && <span>✅</span>}
                  <span>{isLoading ? 'SENDING...' : isSuccess ? 'MESSAGE SENT' : 'Submit Inquiry'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[120px] bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-12 reveal opacity-0 translate-y-5 transition-all duration-500">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What types of businesses do you work with?',
                answer: 'We work with businesses of all sizes across various industries, from startups to enterprise-level organizations. Our solutions are tailored to meet the specific needs and goals of each client.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex system could take several months. We provide detailed timelines during our planning phase.'
              },
              {
                question: 'Do you offer ongoing support and maintenance?',
                answer: 'Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. Our team is available for updates, troubleshooting, and ongoing enhancements.'
              },
              {
                question: 'How do you handle project pricing?',
                answer: 'We provide customized quotes based on project requirements. Depending on the project, we may use fixed-price models, time and materials pricing, or retainer agreements. We\'re transparent about costs from the beginning.'
              },
              {
                question: 'Can you work with our existing systems and technology?',
                answer: 'Absolutely. We specialize in both building new solutions and integrating with or enhancing existing systems. Our team has experience working with a wide range of technologies and platforms.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden reveal opacity-0 translate-y-5 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-white p-6 font-semibold">
                    {item.question}
                    <div className="ml-2 text-blue-600 transition-transform duration-300 group-open:rotate-180">
                      <ArrowRight className="rotate-90" size={20} />
                    </div>
                  </summary>
                  <div className="border-t border-gray-200 bg-gray-50 p-6">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;