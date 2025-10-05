import React from 'react';
import { ArrowRight, Globe, Users, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-teal-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Logo Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="flex items-center gap-4">
            {/* Stylized Globe Icon */}
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-teal-500 to-orange-500 rounded-full flex items-center justify-center animate-spin-slow">
                <Globe className="w-9 h-9 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-teal-500 to-orange-500 rounded-full blur-lg opacity-40 animate-pulse"></div>
            </div>
            
            {/* Stylized NAVEEKA Text */}
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text">N</span>
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-teal-400 bg-clip-text">A</span>
              <span className="text-transparent bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text">V</span>
              <span className="text-transparent bg-gradient-to-r from-teal-300 to-orange-400 bg-clip-text">E</span>
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text">E</span>
              <span className="text-transparent bg-gradient-to-r from-orange-300 to-pink-400 bg-clip-text">K</span>
              <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">A</span>
            </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl text-purple-200 mb-4 font-light px-4">
          The AI Travel Super‑App
        </p>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          Reimagining how 8B people discover, plan, and book the world
        </p>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          The world's first end‑to‑end travel ecosystem: AI that plans, a social network that inspires, maps that discover, and a unified engine that books anything, anywhere.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          One platform unifying discovery, social, maps, AI planning, and unified booking. Built to serve every traveler and every destination, from local gems to global routes.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div className="flex flex-col items-center gap-2">
            <a
              href="https://vishwanatharchakmr.github.io/naveeka-frontend/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-500 hover:to-teal-500 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                Prototype Link
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            <p className="text-xs text-slate-400 mt-1">
              current prototype is not that nice, but my vision is in correct path
            </p>
          </div>
          
          <a
            href="https://drive.google.com/file/d/1axj3QqoelK-Vq-xrpXfoB7SxVaZKw9nz/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-white/30 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              Watch Pitch
              <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center px-4">
          <div className="group">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">$707billion</div>
            <div className="text-sm sm:text-base text-teal-300">Current Global Online Travel Market</div>
          </div>
          <div className="group">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">$10.62T</div>
            <div className="text-sm sm:text-base text-teal-300">Current Global Travel Market</div>
          </div>
          <div className="group">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">8B</div>
            <div className="text-sm sm:text-base text-purple-300">Future Travelers</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-transparent via-white to-transparent rounded-full"></div>
      </div>
    </section>
  );
};
