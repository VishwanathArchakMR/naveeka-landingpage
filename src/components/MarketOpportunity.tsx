import React, { useEffect, useState } from 'react';
import { TrendingUp, Globe, Users, Zap } from 'lucide-react';

export const MarketOpportunity: React.FC = () => {
  const [counters, setCounters] = useState({
    market: 0,
    online: 0,
    users: 0
  });

  useEffect(() => {
    const duration = 2000;
    const targets = {
      market: 17.46,
      online: 74,
      users: 8
    };

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);

      setCounters({
        market: Number((targets.market * easedProgress).toFixed(2)),
        online: Math.floor(targets.online * easedProgress),
        users: Math.floor(targets.users * easedProgress)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animate();
        observer.disconnect();
      }
    });

    const element = document.getElementById('market-opportunity');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="market-opportunity" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Business Model & Market
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Multiple revenue streams in the world's largest industry
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {/* Market Size */}
          <div className="text-center group">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
                ${counters.market}T
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Travel Market 2035</h3>
              <p className="text-slate-400">By 2035 - The world's largest industry</p>
            </div>
          </div>

          {/* Online Penetration */}
          <div className="text-center group">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text mb-4">
                {counters.online}%
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Online Bookings</h3>
              <p className="text-slate-400">Digital transformation accelerating</p>
            </div>
          </div>

          {/* User Base */}
          <div className="text-center group">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-4">
                {counters.users}B
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Travelers</h3>
              <p className="text-slate-400">Potential users worldwide</p>
            </div>
          </div>
          
          {/* Revenue Streams */}
          <div className="text-center group">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-green-500/30 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-4">
                4+
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Revenue Streams</h3>
              <p className="text-slate-400">Commissions, premium AI, creator share, partnerships</p>
            </div>
          </div>
        </div>

        {/* Network Effects Visualization */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                <Zap className="w-6 h-6 text-orange-400" />
                Exponential Network Effects
              </h3>
              <p className="text-slate-400">
                Every user makes the platform smarter and more valuable for everyone
              </p>
            </div>

            {/* Network Visualization */}
            <div className="relative h-48 sm:h-56 md:h-64 flex items-center justify-center">
              {/* Central Hub */}
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-teal-600 rounded-full flex items-center justify-center relative z-10">
                <Globe className="w-12 h-12 text-white" />
              </div>

              {/* Connecting Nodes */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * (Math.PI / 180);
                const radius = window.innerWidth < 640 ? 80 : window.innerWidth < 768 ? 100 : 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={i}
                    className="absolute w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-teal-500 to-purple-500 rounded-full animate-pulse"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(${x}px, ${y}px)`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                );
              })}

              {/* Connection Lines */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * (Math.PI / 180);
                const length = window.innerWidth < 640 ? 80 : window.innerWidth < 768 ? 100 : 120;
                
                return (
                  <div
                    key={i}
                    className="absolute h-px bg-gradient-to-r from-white/20 via-white/40 to-transparent"
                    style={{
                      left: '50%',
                      top: '50%',
                      width: `${length}px`,
                      transformOrigin: '0 0',
                      transform: `rotate(${i * 30}deg)`
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-xl text-slate-300 mb-8">
            Ready to capture the world's largest opportunity?
          </p>
          <button className="bg-gradient-to-r from-purple-600 via-teal-600 to-orange-600 hover:from-purple-500 hover:via-teal-500 hover:to-orange-500 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Join the Revolution
          </button>
        </div>
      </div>
    </section>
  );
};