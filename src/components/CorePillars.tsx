import React from 'react';
import { Brain, Users, Search, Map, CreditCard } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    title: 'Navee AI',
    description: 'Navee AI is a chat-native travel planner that turns complex trips into personalized itineraries, offering smart suggestions for safety, culture, budget, local experiences, hidden gems, real-time updates, and seamless planning for every journey.',
    gradient: 'from-purple-600 to-purple-400',
    hoverGradient: 'from-purple-500 to-purple-300'
  },
  {
    icon: Users,
    title: 'Trail',
    description: 'Trail is a travel-only social universe where users can share authentic stories, live stream adventures, connect with friends and family to follow their travel journeys, participate in challenges and photo contests, discover hidden gems and local experiences, publish travel journals, collaborate on trips, and support creators through monetization all in one place.',
    gradient: 'from-teal-600 to-teal-400',
    hoverGradient: 'from-teal-500 to-teal-300'
  },
  {
    icon: Search,
    title: 'Home',
    description: 'NAVEEKA\'s home screen is a universal search for all travel — from villages to cities, restaurants to landmarks, trips to hidden gems. It\'s the starting point of every journey — simple, powerful, and built for global exploration.',
    gradient: 'from-orange-600 to-orange-400',
    hoverGradient: 'from-orange-500 to-orange-300'
  },
  {
    icon: Map,
    title: 'Atlas',
    description: 'Atlas is a living world map that lets users explore hyper-local destinations, uncover cultural insights, interact with AR overlays, track popular spots, plan routes, and access all features offline for seamless global discovery.',
    gradient: 'from-blue-600 to-blue-400',
    hoverGradient: 'from-blue-500 to-blue-300'
  },
  {
    icon: CreditCard,
    title: 'Journey',
    description: 'Journey is the ultimate booking hub where users can discover and reserve every place to visit, hotels, restaurants, transport, and experiences, manage itineraries, collaborate with friends or groups, and enjoy a seamless all-in-one travel experience.',
    hoverGradient: 'from-pink-500 to-pink-300'
  }
];

export const CorePillars: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Core Ecosystem Pillars
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Five revolutionary foundations that power the future of travel
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                  {/* Icon Container */}
                  <div className="mb-6 flex justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} group-hover:bg-gradient-to-br group-hover:${pillar.hoverGradient} rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-400 text-center leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {pillar.description}
                  </p>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                </div>

                {/* Connection Lines */}
                {index < pillars.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/20 to-transparent transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};