import React, { useState, useEffect } from 'react';
import { Shield, Mic, CheckCircle, Smartphone, Zap, ChevronDown, Lock } from 'lucide-react';

const EchoLandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeField, setActiveField] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#05050A] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;600;700;800&display=swap');
        body { font-family: 'Assistant', sans-serif; }
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .glass-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
        }
        .neon-glow {
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.15);
        }
        .hero-text-gradient {
          background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .accent-gradient {
          background: linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes wave {
          0%, 100% { height: 10px; }
          50% { height: 30px; }
        }
        .sound-bar {
          animation: wave 1s ease-in-out infinite;
        }
        .sound-bar:nth-child(odd) { animation-duration: 0.8s; }
        .sound-bar:nth-child(2n) { animation-duration: 1.1s; }
        .sound-bar:nth-child(3n) { animation-duration: 1.3s; }
        .sound-bar:nth-child(4n) { animation-duration: 0.9s; }
      `}</style>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#05050A]/80 backdrop-blur-md border-white/5 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <img 
              src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200&auto=format&fit=crop" 
              alt="Echo AI Logo" 
              className="w-10 h-10 rounded-xl object-cover neon-glow border border-white/10"
            />
            <span className="text-xl font-bold tracking-wide">Echo AI</span>
          </div>
          <button onClick={() => scrollToSection('contact')} className="px-5 py-2 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 transition-all hover:border-cyan-500/50">
            גישה מוקדמת
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center items-center gap-1 h-12 mb-8 opacity-80">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`w-1.5 bg-gradient-to-t from-cyan-400 to-blue-600 rounded-full sound-bar`} style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight hero-text-gradient">
            לישון בשקט<br />
            <span className="accent-gradient">גם בעסק שלך.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            העוזר האישי שהופך כל שיחה עסקית, הקלטה או פגישה למסמך מסודר, מאובטח ומוכן לפעולה.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollToSection('features')} className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105">
              <span className="relative flex items-center gap-2">איך זה עובד? <ChevronDown className="w-4 h-4" /></span>
            </button>
             <div className="mt-12 md:mt-0 md:absolute md:left-10 md:bottom-20 z-0 hidden lg:block">
              <div className="relative group perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" alt="Echo AI Demo" className="relative w-80 rounded-2xl glass-card rotate-[-6deg] group-hover:rotate-0 transition-all duration-500 shadow-2xl shadow-cyan-500/20 object-cover border border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 px-4 bg-[#05050A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">יותר מרק תמלול. <span className="text-cyan-400">המוח השני שלך.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={<Mic />} title="תמלול חכם בעברית" desc="מנוע זיהוי דיבור שתוכנן לישראל. מבין סלנג, מבטאים ומונחים מקצועיים בדיוק של 99%." color="cyan" />
            <FeatureCard icon={<CheckCircle />} title="סיכום ומשימות" desc="קבל סיכום מנהלים, החלטות שהתקבלו ורשימת Action Items לביצוע מידי." color="purple" />
            <FeatureCard icon={<Shield />} title="אבטחה בנקאית" desc="הצפנה מקצה לקצה (E2EE), שרתים מאובטחים ושליטה מלאה במידע." color="emerald" />
            <FeatureCard icon={<Smartphone />} title="מותאם לעצמאים" desc="תיעוד מושלם משיחות טלפון, זום או הקלטות שטח ישירות למייל." color="blue" />
            <FeatureCard icon={<Zap />} title="אינטגרציה חלקה" desc="מתחבר לכלי העבודה שאתה כבר מכיר ואוהב. עבודה חלקה מהרגע הראשון." color="orange" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-4 overflow-hidden">
        <div className="container mx-auto max-w-xl relative">
          <div className="glass-card p-8 md:p-12 rounded-3xl border-t border-white/10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-wider mb-4">השקה שקטה</div>
              <h2 className="text-3xl font-bold mb-2">הצטרפות ל-Echo AI</h2>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="שם מלא" className="w-full p-4 rounded-xl glass-input text-white outline-none focus:border-cyan-500/50" />
              <input type="email" placeholder="אימייל עסקי" className="w-full p-4 rounded-xl glass-input text-white outline-none focus:border-cyan-500/50" />
              <input type="tel" placeholder="טלפון" className="w-full p-4 rounded-xl glass-input text-white outline-none focus:border-cyan-500/50" />
              <button className="w-full py-4 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg hover:scale-[1.02] transition-all">רוצה ש-Echo יעבוד בשבילי</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/5 text-center text-slate-600 text-sm bg-[#05050A]">
        <p>© 2024 Echo AI Israel - כל הזכויות שמורות</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, color }) => (
  <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group">
    <div className={`w-12 h-12 rounded-lg bg-${color}-500/10 flex items-center justify-center mb-6 text-${color}-400 group-hover:scale-110 transition-transform`}>
      {React.cloneElement(icon, { className: "w-6 h-6" })}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default EchoLandingPage;
