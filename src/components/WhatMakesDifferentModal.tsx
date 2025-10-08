import React from 'react';
import { X, RefreshCw, CircleUser as UserCircle, Bot, TrendingUp, AlertCircle, Calendar, Globe as GlobeIcon } from 'lucide-react';

interface WhatMakesDifferentModalProps {
  onClose: () => void;
}

export const WhatMakesDifferentModal: React.FC<WhatMakesDifferentModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center sm:p-4 overflow-y-auto">
      <div className="bg-slate-900 border-0 sm:border border-white/10 rounded-none sm:rounded-3xl max-w-6xl w-full h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="sticky top-4 right-4 ml-auto mr-4 mt-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 z-10"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="px-8 pb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
            What Makes NAVEEKA Different: Revolutionary Travel Technology
          </h2>

          <p className="text-slate-300 mb-8 text-lg leading-relaxed">
            While other platforms solve pieces of the travel puzzle, NAVEEKA is the first to reimagine travel as an integrated, intelligent, community-driven ecosystem.
          </p>

          {/* The Problem */}
          <div className="mb-12 bg-gradient-to-br from-red-900/20 to-slate-800/20 border border-red-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-400 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">The Problem with Today's Travel Technology</h3>
            </div>

            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Every traveler knows this frustration: You need 15+ apps to plan one trip. Instagram for inspiration. Google for flights. Booking.com for hotels. TripAdvisor for reviews. WhatsApp to coordinate with friends. Maps for navigation. Currency converters. Translation apps. The list goes on.
            </p>

            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              The result? Most people either don't travel because planning is overwhelming, or they stick to generic tourist experiences because finding authentic local culture is too complex.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <p className="text-slate-200 mb-3 font-semibold">Current platforms are broken by design:</p>
              <ul className="space-y-2 text-slate-300 ml-4">
                <li>• Booking sites focus only on inventory, not experience</li>
                <li>• Social media inspires but doesn't convert to bookings</li>
                <li>• Search engines show options but lack cultural context</li>
                <li>• Review sites aggregate opinions but don't understand your specific needs</li>
                <li>• Planning tools organize information but don't create intelligent itineraries</li>
              </ul>
            </div>
          </div>

          {/* Our Fundamental Difference */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8">Our Fundamental Difference: Integration + Intelligence + Community</h3>

            {/* End-to-End Integration */}
            <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-slate-800/20 border border-purple-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-white">🔄 End-to-End Integration: Seamless Journey Flow</h4>
              </div>

              <div className="mb-6">
                <p className="text-slate-300 mb-2"><span className="font-semibold text-slate-200">Current Experience:</span> Inspiration → Research → Compare → Book → Navigate → Experience</p>
                <p className="text-slate-400 italic">Each step requires different apps, losing context and creating friction</p>
              </div>

              <div className="mb-6">
                <p className="text-slate-300 mb-2"><span className="font-semibold text-slate-200">NAVEEKA Experience:</span> One Question → Complete Journey</p>
                <p className="text-slate-400 italic">Every step flows naturally within the same intelligent ecosystem</p>
              </div>

              <h5 className="text-2xl font-semibold text-purple-300 mb-4">How This Changes Everything:</h5>

              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h6 className="text-xl font-semibold text-white mb-3">During Planning:</h6>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• Ask Navee AI: "Plan a weekend adventure for college friends"</li>
                    <li>• See authentic experiences on Trail from real travelers</li>
                    <li>• Discover hidden gems through Atlas maps</li>
                    <li>• Find coordinated deals via HOME search</li>
                    <li>• Book everything together through Journey</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h6 className="text-xl font-semibold text-white mb-3">While Traveling:</h6>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• Atlas guides you to experiences AI recommended</li>
                    <li>• Trail shows live updates from travelers currently there</li>
                    <li>• Journey manages all your bookings and provides real-time alerts</li>
                    <li>• Navee AI adapts your plan based on weather, events, or preferences</li>
                    <li>• Community supports you with local tips and emergency assistance</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h6 className="text-xl font-semibold text-white mb-3">After Traveling:</h6>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• Share your authentic experiences on Trail, earning from helpful content</li>
                    <li>• Your journey data improves AI recommendations for future travelers</li>
                    <li>• Your discoveries become part of the global travel knowledge base</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Community First */}
            <div className="mb-12 bg-gradient-to-br from-teal-900/20 to-slate-800/20 border border-teal-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-400 rounded-xl flex items-center justify-center">
                  <UserCircle className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-white">👥 Community First: Local Voices, Global Reach, Creator Economy</h4>
              </div>

              <div className="mb-6">
                <p className="text-slate-300 mb-2"><span className="font-semibold text-slate-200">Other Platforms:</span> Generic reviews from anonymous users or sponsored content from tourism boards</p>
                <p className="text-slate-300"><span className="font-semibold text-slate-200">NAVEEKA Community:</span> Authentic voices earning real income from travel expertise</p>
              </div>

              <h5 className="text-2xl font-semibold text-teal-300 mb-4">Local Community Integration:</h5>

              <div className="space-y-4 mb-8">
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <p className="text-slate-300">
                    <span className="font-semibold text-teal-300">Street Food Vendor in Mumbai</span> creates 60-second videos showing how to safely enjoy local cuisine → Earns micro-tips from grateful travelers → Builds sustainable income from cultural sharing
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6">
                  <p className="text-slate-300">
                    <span className="font-semibold text-teal-300">Backpacker in Patagonia</span> documents off-the-beaten-path routes → Sells detailed trail guides → Creates passive income from adventure expertise
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6">
                  <p className="text-slate-300">
                    <span className="font-semibold text-teal-300">Accessibility Advocate in Tokyo</span> shares wheelchair-friendly routes and accommodations → Partners with tourism boards → Builds platform for inclusive travel advocacy
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6">
                  <p className="text-slate-300">
                    <span className="font-semibold text-teal-300">Cultural Ambassador in Morocco</span> offers virtual pre-trip consultations → Provides real-time guidance via chat → Creates personalized local experience packages
                  </p>
                </div>
              </div>

              <h5 className="text-2xl font-semibold text-teal-300 mb-4">How This Works:</h5>

              <div className="space-y-6">
                <div>
                  <h6 className="text-xl font-semibold text-white mb-3">Creator Monetization:</h6>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• Micro-tipping system for helpful travel content</li>
                    <li>• Premium guide and itinerary sales</li>
                    <li>• Sponsored experiences with local businesses</li>
                    <li>• Live consultation and virtual tour services</li>
                    <li>• Affiliate earnings from inspired bookings</li>
                  </ul>
                </div>

                <div>
                  <h6 className="text-xl font-semibold text-white mb-3">Global Network Effects:</h6>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• Every creator in every destination adds unique local knowledge</li>
                    <li>• Travelers get authentic insights impossible to find elsewhere</li>
                    <li>• Local communities benefit economically from sharing their culture</li>
                    <li>• Cultural exchange becomes a sustainable economic model</li>
                  </ul>
                </div>

                <div>
                  <h6 className="text-xl font-semibold text-white mb-3">Quality Through Community:</h6>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• Peer verification system for accuracy and authenticity</li>
                    <li>• Local expert badges for recognized community contributors</li>
                    <li>• Real-time fact-checking by residents and frequent visitors</li>
                    <li>• Reputation system rewarding helpful, accurate content</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI at the Core */}
            <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-slate-800/20 border border-orange-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl flex items-center justify-center">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-white">🤖 AI at the Core: Real-Time, Culturally Aware, Multi-Language Intelligence</h4>
              </div>

              <div className="mb-6">
                <p className="text-slate-300 mb-2"><span className="font-semibold text-slate-200">Other AI Travel Tools:</span> Generic chatbots that search existing booking sites and provide basic information</p>
                <p className="text-slate-300"><span className="font-semibold text-slate-200">Navee AI:</span> Travel-specialized intelligence that understands cultural context, safety considerations, and personal preferences</p>
              </div>

              <h5 className="text-2xl font-semibold text-orange-300 mb-4">Cultural Intelligence:</h5>

              <div className="space-y-4 mb-8">
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <p className="text-slate-400 mb-2 italic">Generic AI Response:</p>
                  <p className="text-slate-300">"Here are hotels in Delhi"</p>
                </div>

                <div className="bg-gradient-to-br from-orange-800/30 to-slate-800/30 border border-orange-500/30 rounded-xl p-6">
                  <p className="text-orange-300 mb-2 font-semibold">Navee AI Response:</p>
                  <p className="text-slate-300">
                    "For a solo female traveler during festival season, I recommend women-friendly accommodations in Karol Bagh with 24/7 front desk service. Avoid Old Delhi areas during Diwali due to crowds and noise. Book now as prices increase 40% during festival week. Here's what to wear when visiting temples, and these restaurants have authentic vegetarian options that match your dietary preferences."
                  </p>
                </div>
              </div>

              <h5 className="text-2xl font-semibold text-orange-300 mb-4">Real-Time Adaptation:</h5>

              <div className="space-y-4 mb-8">
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <p className="text-blue-300 font-semibold mb-2">Weather Intelligence:</p>
                  <p className="text-slate-300">"Monsoon arriving 2 days early in Kerala. Switching your outdoor activities to covered venues and suggesting beautiful indoor cultural experiences instead."</p>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6">
                  <p className="text-purple-300 font-semibold mb-2">Event Awareness:</p>
                  <p className="text-slate-300">"Local festival starting tomorrow in your area. Join the celebration with these respectful participation guidelines, or explore these quieter alternative attractions."</p>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6">
                  <p className="text-red-300 font-semibold mb-2">Safety Monitoring:</p>
                  <p className="text-slate-300">"Political demonstration affecting your planned route. Redirecting via scenic alternative that actually passes better local markets."</p>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6">
                  <p className="text-green-300 font-semibold mb-2">Opportunity Recognition:</p>
                  <p className="text-slate-300">"Rare cultural workshop happening this week in your destination. This aligns with your interest in traditional crafts and has only 3 spots remaining."</p>
                </div>
              </div>

              <h5 className="text-2xl font-semibold text-orange-300 mb-4">Multi-Language Cultural Bridge:</h5>

              <ul className="space-y-2 text-slate-300 ml-4 mb-8">
                <li>• <span className="font-semibold text-slate-200">Beyond Translation:</span> Understanding cultural nuances, not just language conversion</li>
                <li>• <span className="font-semibold text-slate-200">Context-Aware Communication:</span> Knowing when and how to greet, tip, negotiate, and show respect in each culture</li>
                <li>• <span className="font-semibold text-slate-200">Regional Variations:</span> Recognizing that "Indian culture" varies dramatically from Kerala to Kashmir to Gujarat</li>
                <li>• <span className="font-semibold text-slate-200">Religious Sensitivity:</span> Providing appropriate guidance for temple visits, mosque etiquette, or Sabbath considerations</li>
              </ul>

              <h5 className="text-2xl font-semibold text-orange-300 mb-4">Personal Learning:</h5>
              <p className="text-slate-300 mb-3">Your AI gets smarter with every interaction:</p>
              <ul className="space-y-2 text-slate-300 ml-4">
                <li>• <span className="font-semibold text-slate-200">Preference Recognition:</span> Learning you prefer small group activities over large tours</li>
                <li>• <span className="font-semibold text-slate-200">Budget Optimization:</span> Understanding your spending patterns and value priorities</li>
                <li>• <span className="font-semibold text-slate-200">Risk Tolerance:</span> Knowing whether you prefer planned schedules or spontaneous exploration</li>
                <li>• <span className="font-semibold text-slate-200">Interest Evolution:</span> Adapting as your travel interests mature and change</li>
              </ul>
            </div>
          </div>

          {/* Technical Innovation */}
          <div className="mb-12 bg-gradient-to-br from-blue-900/20 to-slate-800/20 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">Technical Innovation That Enables Magic</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-semibold text-blue-300 mb-3">Unified Data Architecture</h4>
                <p className="text-slate-400 mb-2 italic">Challenge: Travel data exists in countless formats across thousands of providers globally</p>
                <p className="text-slate-300"><span className="font-semibold text-slate-200">Our Solution:</span> Intelligent data normalization that preserves cultural context while enabling universal search</p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-300 mb-3">Real-Time Intelligence Network</h4>
                <p className="text-slate-400 mb-2 italic">Challenge: Travel conditions change constantly - weather, crowds, closures, events, safety</p>
                <p className="text-slate-300"><span className="font-semibold text-slate-200">Our Solution:</span> Community-powered real-time updates combined with official data feeds and AI verification</p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-300 mb-3">Cultural Context Engine</h4>
                <p className="text-slate-400 mb-2 italic">Challenge: Generic algorithms can't understand cultural nuances and local customs</p>
                <p className="text-slate-300"><span className="font-semibold text-slate-200">Our Solution:</span> AI trained on local insights, cultural guidelines, and respectful tourism practices</p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-300 mb-3">Creator Economy Platform</h4>
                <p className="text-slate-400 mb-2 italic">Challenge: Monetizing authentic travel content while maintaining quality and authenticity</p>
                <p className="text-slate-300"><span className="font-semibold text-slate-200">Our Solution:</span> Multi-stream revenue system that rewards accuracy, helpfulness, and cultural sensitivity</p>
              </div>
            </div>
          </div>

          {/* Why This Approach Will Win */}
          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-slate-800/20 border border-green-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Why This Approach Will Win</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-semibold text-green-300 mb-3">Network Effects Compound Value:</h4>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• More travelers → Better AI recommendations</li>
                  <li>• More creators → More authentic content</li>
                  <li>• More bookings → Better deals for everyone</li>
                  <li>• More local voices → Richer cultural understanding</li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-green-300 mb-3">Switching Costs Increase Over Time:</h4>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• Your travel history creates personalized AI</li>
                  <li>• Your creator followers provide ongoing value</li>
                  <li>• Your community connections offer local support</li>
                  <li>• Your accumulated data improves every future trip</li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-green-300 mb-3">Global Scale with Local Authenticity:</h4>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• Technology enables worldwide reach</li>
                  <li>• Community ensures local relevance</li>
                  <li>• AI bridges cultural and language barriers</li>
                  <li>• Creator economy sustains quality content</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Future We're Building */}
          <div className="mb-8 bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-teal-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">The Future We're Building</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-semibold text-purple-300 mb-3">By 2027:</h4>
                <p className="text-slate-300 mb-3">NAVEEKA becomes the primary platform where:</p>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• Students plan gap year adventures with confidence and safety</li>
                  <li>• Families discover accessible, educational travel experiences</li>
                  <li>• Seniors explore the world with appropriate pace and support</li>
                  <li>• Business travelers enhance work trips with authentic local culture</li>
                  <li>• Creators build sustainable careers sharing their travel expertise</li>
                  <li>• Local communities benefit economically from cultural exchange</li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-teal-300 mb-3">By 2030:</h4>
                <p className="text-slate-300 text-lg">
                  Travel planning becomes as natural as asking a knowledgeable local friend, while every destination benefits from respectful, informed tourism that preserves and celebrates local culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
