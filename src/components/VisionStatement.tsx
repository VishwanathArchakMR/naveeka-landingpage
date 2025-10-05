import React from 'react';
import { Globe as Globe2 } from 'lucide-react';

export const VisionStatement: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-teal-500 to-orange-500"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-teal-600 rounded-full flex items-center justify-center">
                <Globe2 className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-teal-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Main Statement */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent leading-tight">
            Why Now?
          </h2>

          {/* Why Now Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-bold text-purple-300 mb-3">Fragmented Experience</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Travel is digital and social, yet fragmented across dozens of apps, making planning, discovery, and booking inefficient.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-teal-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-400 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-bold text-teal-300 mb-3">AI Revolution</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                AI now enables true personalization, dynamic pricing, contextual guidance, and predictive recommendations at scale.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-bold text-blue-300 mb-3">Seamless Exploration</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The world craves seamless exploration, connecting villages to megacities, hidden gems to iconic landmarks, all in one platform.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-lg font-bold text-orange-300 mb-3">Global Marketplace</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Creators, communities, and local businesses need a single global marketplace to share authentic experiences and monetize their content.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-pink-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-400 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">5</span>
              </div>
              <h3 className="text-lg font-bold text-pink-300 mb-3">Real-time Insights</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Travelers demand real-time insights, safety guidance, and cultural awareness integrated into planning.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">6</span>
              </div>
              <h3 className="text-lg font-bold text-green-300 mb-3">Mobile-First Expectations</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Mobile-first, globally connected audiences expect instant access to inspiration, bookings, and social travel interactions.
              </p>
            </div>
          </div>

          {/* Summary Statement */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6">
              <p className="text-lg text-slate-200 leading-relaxed text-center">
                <span className="text-yellow-300 font-semibold">With rising interest in experiential and sustainable travel</span>, 
                now is the moment to unify discovery, planning, social, and booking into one AI-powered platform.
              </p>
            </div>
          </div>

          {/* Interactive Globe Visualization */}
          <div className="relative max-w-3xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-white/10 rounded-3xl p-4 sm:p-6 md:p-8 hover:border-white/20 transition-all duration-500">
              <div className="relative h-full flex items-center justify-center">
                {/* Left Side Points */}
                <div className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 flex-col space-y-2 sm:space-y-4 md:space-y-6 text-left">
                  <div className="text-xs sm:text-sm text-purple-300 bg-purple-500/10 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-purple-500/20">
                    <div className="font-semibold text-xs sm:text-sm">Fragmented Apps</div>
                    <div className="text-[10px] sm:text-xs text-slate-400">20+ apps per trip</div>
                  </div>
                  <div className="text-xs sm:text-sm text-teal-300 bg-teal-500/10 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-teal-500/20">
                    <div className="font-semibold text-xs sm:text-sm">AI Revolution</div>
                    <div className="text-[10px] sm:text-xs text-slate-400">Personalization at scale</div>
                  </div>
                  <div className="text-xs sm:text-sm text-blue-300 bg-blue-500/10 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-blue-500/20">
                    <div className="font-semibold text-xs sm:text-sm">Global Connectivity</div>
                    <div className="text-[10px] sm:text-xs text-slate-400">Villages to megacities</div>
                  </div>
                </div>

                {/* Central Globe */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-teal-500 to-purple-600 rounded-full relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-1 sm:inset-2 bg-gradient-to-br from-teal-400 to-purple-500 rounded-full"></div>
                  <Globe2 className="absolute inset-0 w-full h-full text-white/30" />
                </div>

                {/* Right Side Points */}
                <div className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 flex-col space-y-2 sm:space-y-4 md:space-y-6 text-right">
                  <div className="text-xs sm:text-sm text-orange-300 bg-orange-500/10 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-orange-500/20">
                    <div className="font-semibold text-xs sm:text-sm">Creator Economy</div>
                    <div className="text-[10px] sm:text-xs text-slate-400">Global marketplace</div>
                  </div>
                  <div className="text-xs sm:text-sm text-pink-300 bg-pink-500/10 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-pink-500/20">
                    <div className="font-semibold text-xs sm:text-sm">Real-time Insights</div>
                    <div className="text-[10px] sm:text-xs text-slate-400">Safety & culture</div>
                  </div>
                  <div className="text-xs sm:text-sm text-green-300 bg-green-500/10 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-green-500/20">
                    <div className="font-semibold text-xs sm:text-sm">Sustainable Travel</div>
                    <div className="text-[10px] sm:text-xs text-slate-400">Experiential focus</div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[
                  { color: 'purple', delay: '0s', radius: '120px' },
                  { color: 'teal', delay: '1s', radius: '120px' },
                  { color: 'orange', delay: '2s', radius: '120px' },
                  { color: 'purple', delay: '3s', radius: '120px' },
                  { color: 'teal', delay: '4s', radius: '120px' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="absolute w-6 h-6 rounded-full animate-orbit"
                    style={{
                      background: `var(--${item.color}-500)`,
                      animationDelay: item.delay,
                      '--orbit-radius': item.radius
                    } as React.CSSProperties}
                  ></div>
                ))}

                {/* Connection Lines */}
                <div className="absolute inset-0 opacity-30">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
                      style={{
                        top: '50%',
                        left: '50%',
                        width: '200px',
                        transformOrigin: '0 0',
                        transform: `rotate(${i * 45}deg) translateX(-100px)`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">One Platform</div>
              <div className="text-slate-400">Every Travel Need</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-teal-500/30 transition-all duration-300">
              <div className="text-3xl font-bold text-teal-400 mb-2">8 Billion</div>
              <div className="text-slate-400">Connected Travelers</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">Infinite</div>
              <div className="text-slate-400">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};