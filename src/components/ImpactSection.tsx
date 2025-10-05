import React from 'react';
import { GraduationCap, Heart, Users, Briefcase, Camera, Home } from 'lucide-react';

const impacts = [
  {
    icon: GraduationCap,
    title: 'Students',
    benefit: 'Budget optimization, discovery, adventure. Personalized itineraries and cultural understanding.',
    color: 'purple',
    gradient: 'from-purple-600 to-purple-400'
  },
  {
    icon: Heart,
    title: 'Families',
    benefit: 'Safety, child-friendly, group tools. Real-time insights and frictionless booking.',
    color: 'pink',
    gradient: 'from-pink-600 to-pink-400'
  },
  {
    icon: Users,
    title: 'Seniors',
    benefit: 'Accessibility, comfort, culture. Local etiquette, safety, and accessibility features.',
    color: 'teal',
    gradient: 'from-teal-600 to-teal-400'
  },
  {
    icon: Briefcase,
    title: 'Business Travelers',
    benefit: 'Efficient, localized experiences. Smart routing and cultural context.',
    color: 'blue',
    gradient: 'from-blue-600 to-blue-400'
  },
  {
    icon: Camera,
    title: 'Creators',
    benefit: 'Monetization, global reach. Revenue share for micro-guides and sponsored trails.',
    color: 'orange',
    gradient: 'from-orange-600 to-orange-400'
  },
  {
    icon: Home,
    title: 'Local Communities',
    benefit: 'Sustainable income, exposure. Tools for local earnings and cultural preservation.',
    color: 'green',
    gradient: 'from-green-600 to-green-400'
  }
];

export const ImpactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            A Billion-User Revolution
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transforming travel for every type of explorer across the globe
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${impact.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {impact.title}
                  </h3>

                  {/* Benefit */}
                  <p className="text-sm sm:text-base text-slate-400 text-center leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {impact.benefit}
                  </p>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${impact.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-${impact.color}-400 rounded-full animate-float`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                2B+
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Global Students</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                3B+
              </div>
              <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Family Travelers</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                500M+
              </div>
              <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Business Trips/Year</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                1B+
              </div>
              <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Local Communities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};