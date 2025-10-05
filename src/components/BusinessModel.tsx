import React from 'react';
import { DollarSign, Users, TrendingUp, Globe, Zap, Shield } from 'lucide-react';

const revenueStreams = [
  {
    icon: DollarSign,
    title: 'Booking Commissions',
    description: 'Revenue share on flights, stays, experiences, and activities',
    color: 'purple'
  },
  {
    icon: Zap,
    title: 'Premium AI Features',
    description: 'Advanced personalization, live re-routing, and priority support',
    color: 'teal'
  },
  {
    icon: Users,
    title: 'Creator Revenue Share',
    description: 'Monetization of micro-guides, itineraries, and sponsored trails',
    color: 'orange'
  },
  {
    icon: Globe,
    title: 'Destination Partnerships',
    description: 'Tourism board partnerships and business intelligence insights',
    color: 'blue'
  }
];

const goToMarket = [
  {
    icon: Users,
    title: 'Creator Communities',
    description: 'Start with travel creators and student communities in high-density hubs'
  },
  {
    icon: Globe,
    title: 'Local Partners',
    description: 'Onboard authentic local experiences and verified businesses'
  },
  {
    icon: TrendingUp,
    title: 'City Sprints',
    description: 'Prove depth in key markets before expanding coverage globally'
  }
];

export const BusinessModel: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Business Model & Go-to-Market
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Multiple revenue streams and strategic market entry
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Revenue Streams</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {revenueStreams.map((stream, index) => {
              const Icon = stream.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${stream.color}-600 to-${stream.color}-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2 text-center">
                      {stream.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm text-center">
                      {stream.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Go-to-Market Strategy */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Go-to-Market Strategy</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {goToMarket.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 text-center">
                      {strategy.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-400 text-center leading-relaxed">
                      {strategy.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust & Safety */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Trust & Safety First</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Accessibility and safety first with comprehensive filters, guidance, and verified listings. 
              Community benefit tools for local earnings and cultural preservation. 
              Sustainability focus with smarter routing, off-peak discovery, and education.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-green-300">✓ Verification & Moderation</div>
              <div className="text-green-300">✓ Layered Reputation Signals</div>
              <div className="text-green-300">✓ Cultural Preservation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};