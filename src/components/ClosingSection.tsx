import React from 'react';
import { ArrowRight, Rocket, Users, Globe } from 'lucide-react';

export const ClosingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-purple-300 to-teal-300 bg-clip-text text-transparent leading-tight px-4 tracking-wide">
            Naveeka is on a mission to connect all 8 billion people through the power of travel
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 sm:mb-14 max-w-4xl mx-auto leading-relaxed px-4 tracking-normal">
            Redefining human connection, one journey at a time. Every journey becomes a bridge between cultures, communities, and humanity.
          </p>

          {/* Vision Icons */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm text-slate-400 mt-2 group-hover:text-slate-300 transition-colors duration-300">Global Unity</p>
            </div>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm text-slate-400 mt-2 group-hover:text-slate-300 transition-colors duration-300">Community</p>
            </div>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm text-slate-400 mt-2 group-hover:text-slate-300 transition-colors duration-300">Innovation</p>
            </div>
          </div>

          {/* Final Message */}
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10 px-4">
              The future of travel isn't just about going places — it's about connecting souls,
              preserving cultures, and building a world where every journey matters.
            </p>

            <div className="text-center">
              <p className="text-sm text-slate-500 mb-6">
                Ready to be part of history?
              </p>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
