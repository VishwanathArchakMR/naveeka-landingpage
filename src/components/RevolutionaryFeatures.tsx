import React, { useState } from 'react';
import { MessageSquare, Eye, Globe, Users, Zap } from 'lucide-react';
import { HowItWorksModal } from './HowItWorksModal';
import { WhatMakesDifferentModal } from './WhatMakesDifferentModal';
import { ProductHighlightsModal } from './ProductHighlightsModal';
import { CreatorsLocalsModal } from './CreatorsLocalsModal';

const features = [
  {
    icon: MessageSquare,
    title: 'How It Works',
    description: 'Ask Navee AI in natural language: "Plan a 5‑day spiritual trip in India under ₹65,000 for a vegetarian solo woman." Get a day‑by‑day plan, safety notes, cultural etiquette, and bookings in one flow.',
    image: '/src/assets/features/howitworks.png',
    modalType: 'howItWorks'
  },
  {
    icon: Eye,
    title: 'What Makes It Different',
    description: 'End‑to‑end integration from inspiration to booking to on‑trip assistance. Community first with local voices, global reach, and creator earnings. AI at the core with real‑time, culturally aware, multi‑language guidance.',
    image: '/src/assets/features/whatmakesitdifferent.png',
    modalType: 'whatMakesDifferent'
  },
  {
    icon: Globe,
    title: 'Product Highlights',
    description: 'AI trip architect with budget controls, child‑friendly filters, and accessibility. Live cultural calendar with festivals, events, and seasonal windows. Predictive discovery from weekend micro‑trips to multi‑country expeditions.',
    image: '/src/assets/features/producthighlights.png',
    modalType: 'productHighlights'
  },
  {
    icon: Users,
    title: 'For Creators and Locals',
    description: 'A vertical platform built for travel content and community. Monetize stories, micro‑guides, and live experiences. Reach global audiences while promoting local businesses.',
    image: '/src/assets/features/forcreatorsandlocals.png',
    modalType: 'creatorsLocals'
  },
  
];

export const RevolutionaryFeatures: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Advanced capabilities that transform how you discover and experience the world
          </p>
        </div>

        {/* Features */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left px-4 sm:px-0">
                  <div className="mb-4 sm:mb-6 flex justify-center lg:justify-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-teal-600 rounded-2xl flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8">
                    {feature.description}
                  </p>
                  <button
                    onClick={() => feature.modalType && setActiveModal(feature.modalType)}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base text-white font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Know More
                  </button>
                </div>

                {/* Visual */}
                <div className="flex-1 max-w-lg w-full px-4 sm:px-0">
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                      
                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                        <div className="text-white">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-teal-600 rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{feature.title}</h4>
                          <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Experience the future of travel technology
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-teal-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modals */}
      {activeModal === 'howItWorks' && <HowItWorksModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'whatMakesDifferent' && <WhatMakesDifferentModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'productHighlights' && <ProductHighlightsModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'creatorsLocals' && <CreatorsLocalsModal onClose={() => setActiveModal(null)} />}
    </section>
  );
};
