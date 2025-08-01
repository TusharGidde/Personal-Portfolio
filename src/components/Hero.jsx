import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="min-h-screen relative flex items-center justify-center py-8 md:py-0">
        <div className="container grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          
          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8 text-white order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
            {/* Main Title */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                {hero.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white font-light">
                Software Engineer Coding Dreams into Reality
              </p>
              <div className="h-1 w-16 sm:w-[90%] md:w-[90%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4" data-aos="fade-up" data-aos-delay="600">
              {/* Resume Button */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <a
                  href="https://drive.google.com/file/d/13DMQEaO0kF2k1CgHKNfYMVi_D3XaJ1c4/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-6 sm:px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition duration-300 flex items-center gap-2"
                >
                  <i className="bx bx-download text-white"></i>
                  <span className=" text-white">{hero.btnText}</span>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                {hero.social_media.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/90 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-110 transition-all duration-300 shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay={700 + i * 100}
                  >
                    <i className={`bx bxl-${social.name} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0" data-aos="fade-left" data-aos-duration="1000">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Main image container */}
            <div className="relative">
              {/* Animated border ring */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-75 blur-sm animate-spin-slow"></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
                <img
                  src={hero.image}
                  alt="Tushar Gidde - Software Engineer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>

              {/* Floating dots */}
              <div className="absolute inset-0">
                {/* Large floating dots */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float-1 opacity-70"></div>
                <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float-2 opacity-60"></div>
                <div className="absolute bottom-1/4 left-3/4 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-float-3 opacity-80"></div>
                <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-4 opacity-50"></div>
                <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-float-5 opacity-65"></div>
                
                {/* Small floating dots */}
                <div className="absolute top-1/6 right-1/2 w-1 h-1 bg-blue-300 rounded-full animate-float-6 opacity-40"></div>
                <div className="absolute bottom-1/6 left-1/2 w-1 h-1 bg-purple-300 rounded-full animate-float-7 opacity-45"></div>
                <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-float-8 opacity-55"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-8px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-8px) translateX(-6px); }
          66% { transform: translateY(-12px) translateX(4px); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          20% { transform: translateY(-6px) translateX(7px); }
          40% { transform: translateY(-14px) translateX(-3px); }
          60% { transform: translateY(-4px) translateX(9px); }
          80% { transform: translateY(-10px) translateX(-5px); }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-12px) translateX(-8px) scale(1.2); }
        }
        
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-7px) translateX(6px); }
          75% { transform: translateY(-11px) translateX(-4px); }
        }
        
        @keyframes float-6 {
          0%, 100% { transform: translateY(0px) translateX(0px) opacity(0.4); }
          50% { transform: translateY(-8px) translateX(5px) opacity(0.8); }
        }
        
        @keyframes float-7 {
          0%, 100% { transform: translateY(0px) translateX(0px) opacity(0.3); }
          33% { transform: translateY(-6px) translateX(-7px) opacity(0.7); }
          66% { transform: translateY(-10px) translateX(3px) opacity(0.5); }
        }
        
        @keyframes float-8 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-5px) translateX(4px) scale(0.8); }
          75% { transform: translateY(-9px) translateX(-6px) scale(1.1); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        .animate-float-1 {
          animation: float-1 4s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 3.5s ease-in-out infinite 0.5s;
        }
        
        .animate-float-3 {
          animation: float-3 5s ease-in-out infinite 1s;
        }
        
        .animate-float-4 {
          animation: float-4 3s ease-in-out infinite 1.5s;
        }
        
        .animate-float-5 {
          animation: float-5 4.5s ease-in-out infinite 0.8s;
        }
        
        .animate-float-6 {
          animation: float-6 2.8s ease-in-out infinite 2s;
        }
        
        .animate-float-7 {
          animation: float-7 3.2s ease-in-out infinite 0.3s;
        }
        
        .animate-float-8 {
          animation: float-8 3.8s ease-in-out infinite 1.2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;