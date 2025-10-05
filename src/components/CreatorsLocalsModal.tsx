import React from 'react';
import { X, Users, DollarSign, Zap, Shield, TrendingUp, Award, MapPin, Calendar, BarChart } from 'lucide-react';

interface CreatorsLocalsModalProps {
  onClose: () => void;
}

export const CreatorsLocalsModal: React.FC<CreatorsLocalsModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-white/10 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="sticky top-4 right-4 ml-auto mr-4 mt-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 z-10"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="px-6 sm:px-8 pb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
            For Creators and Locals: Build, Earn, Empower
          </h2>

          <p className="text-slate-300 mb-8 text-base sm:text-lg leading-relaxed">
            NAVEEKA is a vertical platform for travel creators and local hosts to turn authentic knowledge into income while promoting community businesses and culture. It gives the tools to publish once, earn in multiple ways, and reach travelers right when they are ready to act.
          </p>

          {/* What Creators Can Publish */}
          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-slate-800/20 border border-purple-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">What creators can publish</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-purple-300 mb-2">Stories</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Short, swipeable videos or photo sequences with geo‑tags, best times to visit, and do/don't tips.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-purple-300 mb-2">Micro‑guides</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  5–20 step "do this, eat here, go next" routes for a neighborhood, day, or theme.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-purple-300 mb-2">Live experiences</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  IRL walks, food crawls, photo walks, workshops, or virtual pre‑trip sessions.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-purple-300 mb-2">Deep dives</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Longer narratives with cultural context, accessibility notes, and pricing clarity.
                </p>
              </div>
            </div>
          </div>

          {/* How Earnings Work */}
          <div className="mb-12 bg-gradient-to-br from-teal-900/20 to-slate-800/20 border border-teal-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-600 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">How earnings work</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-teal-300 mb-2">Booking influence</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Earn when travelers book stays, tours, or restaurants from content and guides.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-teal-300 mb-2">Guide sales</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Set a price for premium micro‑guides; offer bundles by city or theme.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-teal-300 mb-2">Live/IRL sessions</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Charge for limited‑seat walks, tastings, classes, or virtual consults.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-teal-300 mb-2">Tips and thanks</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Receive micro‑tips on helpful posts, maps, and answers.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-teal-300 mb-2">Brand slots</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Optional, clearly labeled placements for aligned local partners.
                </p>
              </div>
            </div>
          </div>

          {/* Tools That Make It Easy */}
          <div className="mb-12 bg-gradient-to-br from-blue-900/20 to-slate-800/20 border border-blue-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Tools that make it easy</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">One‑tap publish</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Create once, auto‑format for stories, maps, and guide storefronts.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Smart linking</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Auto‑attach nearby bookable inventory to locations in posts.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Session scheduler</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Calendar, capacity, and payments for live or virtual experiences.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Reputation signals</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Badges for accuracy, responsiveness, accessibility advocacy, and safety.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">Analytics</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Views → saves → clicks → bookings, with city, language, and device breakdowns.
                </p>
              </div>
            </div>
          </div>

          {/* Trust and Quality Safeguards */}
          <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-slate-800/20 border border-orange-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Trust and quality safeguards</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-orange-300 mb-2">Community verification</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Locals and recent visitors confirm details like hours, access, and safety.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-orange-300 mb-2">Accuracy score</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Content gets periodic prompts to refresh; stale info is flagged for review.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-orange-300 mb-2">Respect by design</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Location sensitivity (sacred sites, private communities) and conduct guides.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-orange-300 mb-2">Clear disclosures</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Paid partnerships marked; affiliate and host relationships visible.
                </p>
              </div>
            </div>
          </div>

          {/* Value for Local Businesses */}
          <div className="mb-12 bg-gradient-to-br from-pink-900/20 to-slate-800/20 border border-pink-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-600 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Value for local businesses</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-pink-300 mb-2">Discovery</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Appear directly in creator content seen by travelers with intent.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-pink-300 mb-2">Simple onboarding</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  WhatsApp‑first flow, photo capture, hours, menu/pricing, accessibility notes.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-pink-300 mb-2">Flexible models</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Commission on bookings or fixed creator sponsorships; both are transparent.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-pink-300 mb-2">Community loop</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Businesses support creators; creators drive measurable local spend.
                </p>
              </div>
            </div>
          </div>

          {/* Example Flows */}
          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-slate-800/20 border border-green-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Example flows</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-green-300 mb-3">Street‑food guide (free + paid)</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  A Chennai creator posts 8 must‑try stalls with hygiene notes; the free story inspires, the paid micro‑guide includes maps, timing, and a ₹199 "one‑hour tasting path," with the option to book a live crawl on Saturdays.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-green-300 mb-3">Spiritual route (accessibility‑first)</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  A Varanasi guide publishes a step‑free temple circuit with restroom markers and quiet windows; earnings come from tips, a ₹299 annotated map, and donations to a local trust highlighted in the guide.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-green-300 mb-3">Photo walk (live session)</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  A Lisbon photographer runs sunset photo walks (10 seats, ₹1,500 each), with a free story reel converting to bookings; reschedules and waitlists are handled in‑app.
                </p>
              </div>
            </div>
          </div>

          {/* Why This Works Now */}
          <div className="mb-12 bg-gradient-to-br from-indigo-900/20 to-slate-800/20 border border-indigo-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Why this works now</h3>
            </div>

            <div className="space-y-3">
              <p className="text-sm sm:text-base text-slate-300 flex items-start gap-2">
                <span className="text-indigo-400 mt-1 flex-shrink-0">✓</span>
                <span>Direct‑to‑fan monetization is mainstream; creators want earnings beyond generic social ads.</span>
              </p>
              <p className="text-sm sm:text-base text-slate-300 flex items-start gap-2">
                <span className="text-indigo-400 mt-1 flex-shrink-0">✓</span>
                <span>Travel creators increasingly host paid trips, workshops, and shoppable recommendations.</span>
              </p>
              <p className="text-sm sm:text-base text-slate-300 flex items-start gap-2">
                <span className="text-indigo-400 mt-1 flex-shrink-0">✓</span>
                <span>Multi‑stream income (subs, tips, affiliates, live) stabilizes payouts across seasons.</span>
              </p>
              <p className="text-sm sm:text-base text-slate-300 flex items-start gap-2">
                <span className="text-indigo-400 mt-1 flex-shrink-0">✓</span>
                <span>Guide storefront: free previews, paid unlock, and QR for on‑ground discovery.</span>
              </p>
              <p className="text-sm sm:text-base text-slate-300 flex items-start gap-2">
                <span className="text-indigo-400 mt-1 flex-shrink-0">✓</span>
                <span>Payouts v1: bank/UPI setup, clear fees, monthly statements.</span>
              </p>
            </div>
          </div>

          {/* Roadmap */}
          <div className="mb-12 bg-gradient-to-br from-violet-900/20 to-slate-800/20 border border-violet-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-violet-600 to-violet-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Roadmap (near term)</h3>
            </div>

            <div className="space-y-3">
              <p className="text-sm sm:text-base text-slate-300 flex items-start gap-2">
                <span className="text-violet-400 flex-shrink-0">→</span>
                <span><span className="font-semibold text-slate-200">Co‑authoring:</span> Local + creator revenue split for hybrid guides.</span>
              </p>
              <p className="text-sm sm:text-base text-slate-300 flex items-start gap-2">
                <span className="text-violet-400 flex-shrink-0">→</span>
                <span><span className="font-semibold text-slate-200">Multi‑language captions,</span> auto‑translate, and subtitle upload.</span>
              </p>
              <p className="text-sm sm:text-base text-slate-300 flex items-start gap-2">
                <span className="text-violet-400 flex-shrink-0">→</span>
                <span><span className="font-semibold text-slate-200">Creator collabs:</span> City takeovers, challenge weeks, and brand‑safe sponsor kits.</span>
              </p>
              <p className="text-sm sm:text-base text-slate-300 flex items-start gap-2">
                <span className="text-violet-400 flex-shrink-0">→</span>
                <span><span className="font-semibold text-slate-200">On‑trip mode:</span> Travelers get creator snippets exactly where they stand (offline too).</span>
              </p>
            </div>
          </div>

          {/* Simple, Fair Economics */}
          <div className="mb-12 bg-gradient-to-br from-cyan-900/20 to-slate-800/20 border border-cyan-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-600 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Simple, fair economics</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-2">Tips</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  0–5% platform fee, transparent before payment.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-2">Guide sales</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Platform share 10–20%, creator keeps majority.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-2">Bookings</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Standard affiliate/commission share; creators see exact rates.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-2">Live sessions</h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Payment processing + small platform fee; refunds handled in‑app.
                </p>
              </div>
            </div>
          </div>

          {/* The Impact */}
          <div className="mb-8 bg-gradient-to-br from-amber-900/20 to-slate-800/20 border border-amber-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-600 to-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">The impact</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4 sm:p-6">
                <p className="text-base sm:text-lg text-slate-200 font-semibold mb-2">
                  Creators build durable income around authentic expertise.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4 sm:p-6">
                <p className="text-base sm:text-lg text-slate-200 font-semibold mb-2">
                  Locals gain visibility and fair participation in tourism economics.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20 rounded-xl p-4 sm:p-6">
                <p className="text-base sm:text-lg text-slate-200 font-semibold mb-2">
                  Travelers get trustworthy, bookable guidance from people who actually know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
