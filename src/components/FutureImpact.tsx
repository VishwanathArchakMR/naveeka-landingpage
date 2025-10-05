import React from 'react';
import { Heart, DollarSign, Leaf, TrendingUp } from 'lucide-react';

const impacts = [
  {
    icon: Heart,
    title: 'Cultural Understanding',
    description: 'Bridge cultures through authentic connections'
  },
  {
    icon: DollarSign,
    title: 'Economic Opportunity',
    description: 'Empower local communities worldwide'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Promote responsible travel practices'
  },
  {
    icon: TrendingUp,
    title: 'Human Growth',
    description: 'Expand perspectives through exploration'
  }
];

export const FutureImpact: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Earth Background */}
      <div className="absolute inset-0">
        {/* Earth Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-green-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
        
        {/* Orbiting Particles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full animate-orbit"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: '20s',
                '--orbit-radius': '200px'
              } as React.CSSProperties}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Responsible Travel & Why We Win
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-16 px-4">
              <span className="text-purple-300 font-semibold">Network effects</span> across users, creators, and local businesses. 
              <span className="text-teal-300 font-semibold">Increasing returns to data</span> - every interaction improves recommendations. 
              <span className="text-orange-300 font-semibold">Category focus</span> with travel-only social graph and booking engine.
            </p>
            
            {/* Why We Win Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 sm:p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500">
                <h3 className="text-lg font-bold text-purple-300 mb-3">All-in-One Platform</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We unify discovery, planning, social connection, and booking across every travel touchpoint — villages to megacities, hidden gems to iconic landmarks.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500">
                <h3 className="text-lg font-bold text-teal-300 mb-3">AI-First Advantage</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Personalized recommendations, predictive pricing, contextual guidance, and real-time insights make travel effortless and smarter than any competitor.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500">
                <h3 className="text-lg font-bold text-orange-300 mb-3">Social & Community Network</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Trail empowers travelers, creators, and local businesses to share authentic experiences, driving engagement and network effects.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Global Scale with Local Depth</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Hyper-local discovery meets worldwide coverage, enabling both scalable growth and meaningful local experiences.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-500">
                <h3 className="text-lg font-bold text-pink-300 mb-3">Seamless Experience</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  From search to booking to journey management, every feature is integrated, reducing friction and increasing conversion.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-green-500/30 transition-all duration-500">
                <h3 className="text-lg font-bold text-green-300 mb-3">Creator & Partner Ecosystem</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Monetization for creators and partnerships with local businesses ensures loyalty, content richness, and recurring revenue streams.
                </p>
              </div>
            </div>
          </div>

          {/* Central Earth Visual */}
          <div className="mb-20 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600 via-green-500 to-blue-700 rounded-full relative overflow-hidden animate-slow-spin">
                {/* Continents */}
                <div className="absolute inset-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-80"></div>
                {/* Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent rounded-full"></div>
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-green-400/30 rounded-full blur-xl animate-pulse"></div>
              </div>
              
              {/* Connection Lines */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px h-32 bg-gradient-to-t from-white/40 to-transparent"
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: '0 128px',
                      transform: `rotate(${i * 30}deg)`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {impact.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {impact.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quote */}
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-slate-300 leading-relaxed mb-8 italic px-4">
              "When 8 billion people can truly understand each other through travel, 
              we don't just change tourism — we change the world."
            </blockquote>
            <p className="text-slate-500">— The Naveeka Vision</p>
          </div>

          {/* Future Timeline */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                2025
              </div>
              <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Global Launch
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                2030
              </div>
              <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                1B Connected Travelers
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                2035
              </div>
              <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                World Transformed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};