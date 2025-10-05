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
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
    modalType: 'howItWorks'
  },
  {
    icon: Eye,
    title: 'What Makes It Different',
    description: 'End‑to‑end integration from inspiration to booking to on‑trip assistance. Community first with local voices, global reach, and creator earnings. AI at the core with real‑time, culturally aware, multi‑language guidance.',
    image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg',
    modalType: 'whatMakesDifferent'
  },
  {
    icon: Globe,
    title: 'Product Highlights',
    description: 'AI trip architect with budget controls, child‑friendly filters, and accessibility. Live cultural calendar with festivals, events, and seasonal windows. Predictive discovery from weekend micro‑trips to multi‑country expeditions.',
    image: 'https://images.pexels.com/photos/1268551/pexels-photo-1268551.jpeg',
    modalType: 'productHighlights'
  },
  {
    icon: Users,
    title: 'For Creators and Locals',
    description: 'A vertical platform built for travel content and community. Monetize stories, micro‑guides, and live experiences. Reach global audiences while promoting local businesses.',
    image: 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg',
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
      {false && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-white/10 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="sticky top-4 right-4 ml-auto mr-4 mt-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Modal Content */}
            <div className="px-8 pb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
                How NAVEEKA Will Work: The Complete Vision
              </h2>

              <p className="text-slate-300 mb-4 text-lg italic">
                This is how our travel super-app will function once fully developed. Currently, we have an MVP prototype demonstrating core concepts.
              </p>

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">The Promise: One Question, Complete Journey</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  When you ask NAVEEKA "Plan a 5-day spiritual trip in India under ₹65,000 for a vegetarian solo woman", here's how our five integrated platforms will work together:
                </p>
              </div>

              {/* NAVEE AI Section */}
              <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-slate-800/20 border border-purple-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">🧠 NAVEE AI: Your Travel Oracle</h3>
                </div>

                <h4 className="text-2xl font-semibold text-purple-300 mb-4">What You'll Experience:</h4>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Open the app and simply type or speak your travel idea naturally:
                </p>

                <div className="bg-slate-800/50 rounded-xl p-6 mb-6 space-y-2">
                  <p className="text-slate-200">Example Prompts:</p>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• "Weekend adventure near Delhi for college friends under ₹5,000 each"</li>
                    <li>• "Family trip to Kerala with wheelchair accessibility"</li>
                    <li>• "Digital nomad month in Southeast Asia with coworking spaces"</li>
                    <li>• "Solo female backpacking through Europe, budget-friendly"</li>
                  </ul>
                </div>

                <h4 className="text-2xl font-semibold text-purple-300 mb-4">How It Will Work:</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Instant Understanding:</h5>
                    <p className="text-slate-300 mb-3">Navee AI processes your intent, recognizing:</p>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• Spiritual journey = temples, meditation centers, peaceful environments</li>
                      <li>• Solo woman = safety-verified stays, women-friendly transport, cultural guidance</li>
                      <li>• Vegetarian = plant-based restaurants, regional food specialties</li>
                      <li>• ₹65,000 budget = mid-range accommodations, efficient transport, value experiences</li>
                      <li>• India context = monsoon patterns, festival calendars, cultural customs</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Smart Response:</h5>
                    <p className="text-slate-300 mb-3">Within 10 seconds, you receive:</p>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• Complete day-by-day itinerary with timing and logistics</li>
                      <li>• Cultural etiquette tips and appropriate dress codes</li>
                      <li>• Safety considerations and emergency contacts</li>
                      <li>• Budget breakdown with alternatives for flexibility</li>
                      <li>• Weather-appropriate activity scheduling</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* HOME Section */}
              <div className="mb-12 bg-gradient-to-br from-teal-900/20 to-slate-800/20 border border-teal-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-400 rounded-xl flex items-center justify-center">
                    <Home className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">🏠 HOME: Universal Travel Discovery</h3>
                </div>

                <h4 className="text-2xl font-semibold text-teal-300 mb-4">What You'll Experience:</h4>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Instead of searching flights on one site and hotels on another, HOME will be your single search engine for everything travel-related.
                </p>

                <div className="bg-slate-800/50 rounded-xl p-6 mb-6 space-y-2">
                  <p className="text-slate-200">Example Searches:</p>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• "Romantic weekend getaway from Mumbai" → Flights + hotels + dinner reservations + experiences</li>
                    <li>• "Adventure activities in Rishikesh" → Rafting + trekking + accommodation + gear rental</li>
                    <li>• "Business trip to Bangalore with cultural experiences" → Flights + business hotels + local tours + networking venues</li>
                  </ul>
                </div>

                <h4 className="text-2xl font-semibold text-teal-300 mb-4">How It Will Work:</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Unified Results:</h5>
                    <p className="text-slate-300 mb-3">One search returns coordinated options across:</p>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• Transport: Flights, trains, buses, car rentals</li>
                      <li>• Accommodation: Hotels, hostels, homestays, unique stays</li>
                      <li>• Experiences: Tours, activities, workshops, cultural events</li>
                      <li>• Dining: Restaurants, food tours, cooking classes</li>
                      <li>• Local Services: Guides, translators, equipment rental</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Smart Filtering:</h5>
                    <p className="text-slate-300 mb-3">Results automatically consider:</p>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• Your budget and travel dates</li>
                      <li>• Previous preferences and booking history</li>
                      <li>• Real-time availability and pricing</li>
                      <li>• Weather and seasonal factors</li>
                      <li>• Local events and festivals</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TRAIL Section */}
              <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-slate-800/20 border border-orange-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl flex items-center justify-center">
                    <Image className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">🌟 TRAIL: Travel Social Universe</h3>
                </div>

                <h4 className="text-2xl font-semibold text-orange-300 mb-4">What You'll Experience:</h4>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Discover authentic travel content from real travelers and local creators, not generic tourism content.
                </p>

                <div className="bg-slate-800/50 rounded-xl p-6 mb-6 space-y-2">
                  <p className="text-slate-200">Feed Content You'll See:</p>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• 60-second videos of sunrise at Golden Temple with crowd-avoiding tips</li>
                    <li>• Local food vendor showing how to eat street food safely</li>
                    <li>• Solo traveler sharing women-specific safety tips for each city</li>
                    <li>• Group of friends documenting their budget backpacking route</li>
                    <li>• Local guide revealing hidden gems tourists never find</li>
                  </ul>
                </div>

                <h4 className="text-2xl font-semibold text-orange-300 mb-4">How It Will Work:</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Creator Economy:</h5>
                    <p className="text-slate-300 mb-3">Travel content creators earn money through:</p>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• Micro-tip system for helpful content</li>
                      <li>• Sponsored experiences with tourism boards</li>
                      <li>• Affiliate commissions on bookings inspired by their content</li>
                      <li>• Premium travel guides and itinerary sales</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Community Features:</h5>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• Follow travelers currently in your planned destinations</li>
                      <li>• Ask questions and get real-time answers from locals</li>
                      <li>• Join travel challenges (like "Heritage Site Discovery Week")</li>
                      <li>• Share your own journey and build your travel community</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Content Discovery:</h5>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• Personalized feed based on your travel interests</li>
                      <li>• Location-based content when you're traveling</li>
                      <li>• Trending destinations and experiences</li>
                      <li>• Live streams from travelers worldwide</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ATLAS Section */}
              <div className="mb-12 bg-gradient-to-br from-blue-900/20 to-slate-800/20 border border-blue-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
                    <Map className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">🗺 ATLAS: Living World Discovery</h3>
                </div>

                <h4 className="text-2xl font-semibold text-blue-300 mb-4">What You'll Experience:</h4>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Maps that reveal hidden layers of culture, history, and authentic experiences at every location.
                </p>

                <div className="bg-slate-800/50 rounded-xl p-6 mb-6 space-y-2">
                  <p className="text-slate-200">Map Layers You Can Toggle:</p>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• Food Trail: Street vendors, local favorites, vegetarian options</li>
                    <li>• Spiritual Sites: Temples, meditation centers, peaceful spots</li>
                    <li>• Adventure Zone: Trekking routes, water sports, climbing areas</li>
                    <li>• Cultural Heritage: Museums, historical sites, art galleries</li>
                    <li>• Local Life: Markets, community centers, authentic neighborhoods</li>
                  </ul>
                </div>

                <h4 className="text-2xl font-semibold text-blue-300 mb-4">How It Will Work:</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Augmented Reality:</h5>
                    <p className="text-slate-300 mb-3">Point your phone at any location to see:</p>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• Reviews and photos from recent visitors</li>
                      <li>• Historical context and cultural significance</li>
                      <li>• Current events or festivals happening</li>
                      <li>• Best photography spots and respectful timing</li>
                      <li>• Local customs and etiquette for that specific place</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Offline Functionality:</h5>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• Download complete area guides with maps</li>
                      <li>• Access cultural information without internet</li>
                      <li>• Offline translation for common phrases</li>
                      <li>• Emergency contact information for each region</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Real-Time Intelligence:</h5>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• Live updates from local Naveeka users</li>
                      <li>• Current weather and crowd conditions</li>
                      <li>• Temporary closures or special events</li>
                      <li>• Best times to visit based on real data</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* JOURNEY Section */}
              <div className="mb-12 bg-gradient-to-br from-pink-900/20 to-slate-800/20 border border-pink-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-pink-400 rounded-xl flex items-center justify-center">
                    <Plane className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">✈ JOURNEY: Unified Booking Platform</h3>
                </div>

                <h4 className="text-2xl font-semibold text-pink-300 mb-4">What You'll Experience:</h4>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Book your entire trip in one place, from international flights to local rickshaw rides.
                </p>

                <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
                  <h5 className="text-xl font-semibold text-white mb-3">Single-Click Booking:</h5>
                  <p className="text-slate-300 mb-3">After Navee AI creates your itinerary, Journey will let you:</p>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• Book all flights, trains, and buses in sequence</li>
                    <li>• Reserve accommodations for each destination</li>
                    <li>• Purchase tickets for experiences and attractions</li>
                    <li>• Arrange local transport and transfers</li>
                    <li>• Make restaurant reservations</li>
                  </ul>
                </div>

                <h4 className="text-2xl font-semibold text-pink-300 mb-4">How It Will Work:</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Smart Bundling:</h5>
                    <p className="text-slate-300 mb-3">Journey optimizes your bookings by:</p>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• Finding package deals across multiple providers</li>
                      <li>• Suggesting timing adjustments to save money</li>
                      <li>• Offering insurance and protection options</li>
                      <li>• Providing flexible cancellation policies</li>
                      <li>• Coordinating pickup times and transfers</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Group Collaboration Features:</h5>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• Shared itinerary planning with friends/family</li>
                      <li>• Split payment options for group bookings</li>
                      <li>• Voting system for activity choices</li>
                      <li>• Real-time group chat integration</li>
                      <li>• Expense tracking and settlement</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xl font-semibold text-white mb-3">Travel Management:</h5>
                    <ul className="space-y-2 text-slate-300 ml-4">
                      <li>• All confirmations in one place</li>
                      <li>• Real-time alerts for delays or changes</li>
                      <li>• Alternative options if plans get disrupted</li>
                      <li>• Local contact information and support</li>
                      <li>• Post-trip expense reports and memories</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Integration Section */}
              <div className="mb-8 bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-white/10 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-white mb-6">🔄 How It All Connects</h3>

                <div className="mb-6">
                  <h4 className="text-2xl font-semibold text-purple-300 mb-4">The Integrated Flow:</h4>
                  <ol className="space-y-3 text-slate-300 ml-6 list-decimal">
                    <li>Ask Navee AI your travel question</li>
                    <li>Discover on Trail what real travelers experienced in those places</li>
                    <li>Explore through Atlas to find hidden gems and cultural insights</li>
                    <li>Search via HOME for the best deals across all providers</li>
                    <li>Book with Journey everything in one seamless transaction</li>
                  </ol>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-teal-300 mb-4">Continuous Learning:</h4>
                  <p className="text-slate-300 mb-3">Every interaction improves the entire system:</p>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• Your preferences train Navee AI for better suggestions</li>
                    <li>• Your Trail content helps other travelers discover authentic experiences</li>
                    <li>• Your Atlas discoveries become part of the global knowledge base</li>
                    <li>• Your Journey bookings optimize pricing and availability for everyone</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
