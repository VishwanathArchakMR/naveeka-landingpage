import React from 'react';
import { X, Brain, DollarSign, Users, Calendar, Target, Zap, Shield, Globe as GlobeIcon, Camera, Heart } from 'lucide-react';

interface ProductHighlightsModalProps {
  onClose: () => void;
}

export const ProductHighlightsModal: React.FC<ProductHighlightsModalProps> = ({ onClose }) => {
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
            Product Highlights: Advanced Travel Intelligence Features
          </h2>

          <p className="text-slate-300 mb-8 text-lg leading-relaxed">
            NAVEEKA's breakthrough features that transform travel planning from overwhelming research into intelligent, personalized experiences for every type of traveler.
          </p>

          {/* AI Trip Architect */}
          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-slate-800/20 border border-purple-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">🏗 AI Trip Architect: Your Personal Travel Intelligence</h3>
            </div>

            <h4 className="text-2xl font-semibold text-purple-300 mb-4">Smart Budget Controls That Actually Work</h4>

            <div className="mb-6">
              <h5 className="text-xl font-semibold text-slate-200 mb-3">Traditional Budget Planning:</h5>
              <p className="text-slate-400 mb-3">
                Set total budget → Hope it works out → Overspend on first few days → Compromise rest of trip
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-xl font-semibold text-purple-300 mb-3">NAVEEKA's AI Budget Architect:</h5>

              <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
                <h6 className="text-lg font-semibold text-white mb-3">Dynamic Budget Optimization:</h6>
                <p className="text-slate-300 mb-3">User Input: "5-day trip to Thailand, ₹80,000 budget"</p>

                <div className="mb-4">
                  <p className="text-slate-200 mb-2 font-semibold">AI Analysis:</p>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>✓ Peak season detected (December) → +20% accommodation costs</li>
                    <li>✓ Festival week identified (Loy Krathong) → Premium experiences available</li>
                    <li>✓ Exchange rate favorable → 8% more buying power than last month</li>
                    <li>✓ Your spending pattern: 40% experiences, 35% accommodation, 25% food</li>
                  </ul>
                </div>

                <div>
                  <p className="text-slate-200 mb-2 font-semibold">Smart Allocation:</p>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>→ ₹32,000 for experiences (including festival activities)</li>
                    <li>→ ₹28,000 for mid-range hotels in non-touristy areas</li>
                    <li>→ ₹15,000 for authentic local dining</li>
                    <li>→ ₹5,000 buffer for spontaneous discoveries</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h6 className="text-lg font-semibold text-white mb-3">Real-Time Budget Tracking:</h6>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• <span className="font-semibold text-slate-200">Expense Alerts:</span> "You're ₹3,000 under budget in Chiang Mai. Perfect time to try that cooking class you saved!"</li>
                    <li>• <span className="font-semibold text-slate-200">Smart Substitutions:</span> "Rain canceled your trek? Here's an equivalent cultural workshop that fits your budget and interests."</li>
                    <li>• <span className="font-semibold text-slate-200">Group Splitting:</span> Automatic fair division for shared expenses with instant settlement options</li>
                    <li>• <span className="font-semibold text-slate-200">Currency Intelligence:</span> Live rate monitoring with "buy now vs wait" recommendations</li>
                  </ul>
                </div>

                <div>
                  <h6 className="text-lg font-semibold text-white mb-3">Flexible Budget Categories:</h6>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• <span className="font-semibold text-slate-200">Splurge vs Save Mode:</span> Identify where to invest (experiences) and where to economize (transport)</li>
                    <li>• <span className="font-semibold text-slate-200">Emergency Buffers:</span> Built-in contingency planning for unexpected situations</li>
                    <li>• <span className="font-semibold text-slate-200">Local Cost Intelligence:</span> Real pricing data from actual travelers, not tourist markup estimates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Child-Friendly Filters */}
          <div className="mb-12 bg-gradient-to-br from-teal-900/20 to-slate-800/20 border border-teal-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-400 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Child-Friendly Filters: Family Travel Made Simple</h3>
            </div>

            <h4 className="text-2xl font-semibold text-teal-300 mb-4">Beyond Basic Age Ranges:</h4>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
              <h5 className="text-xl font-semibold text-white mb-3">Intelligent Age-Appropriate Planning:</h5>
              <p className="text-slate-300 mb-3">Input: "Family trip to Japan with 4-year-old and 12-year-old"</p>

              <div className="mb-4">
                <p className="text-slate-200 mb-2 font-semibold">AI Considerations:</p>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>✓ 4-year-old attention span: 45-minute activity blocks with rest periods</li>
                  <li>✓ 12-year-old interests: Technology, gaming culture, hands-on experiences</li>
                  <li>✓ Family dynamics: Activities engaging for both age groups</li>
                  <li>✓ Logistical needs: Stroller-friendly routes, family bathrooms, kid meals</li>
                </ul>
              </div>

              <div>
                <p className="text-slate-200 mb-2 font-semibold">Smart Suggestions:</p>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>→ teamLab Borderless: Interactive digital art (engaging for both kids)</li>
                  <li>→ Ueno Zoo: 2-hour visit with nearby picnic spot for break</li>
                  <li>→ Tokyo Disney: Half-day plan avoiding overwhelming crowds</li>
                  <li>→ Sushi-making class: Kid-friendly chef with English instructions</li>
                </ul>
              </div>
            </div>

            <h5 className="text-xl font-semibold text-teal-300 mb-4">Comprehensive Family Features:</h5>

            <div className="space-y-6">
              <div>
                <h6 className="text-lg font-semibold text-white mb-3">Safety & Health:</h6>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• Hospital locations with pediatric care along your route</li>
                  <li>• Pharmacy information for common childhood medications</li>
                  <li>• Emergency contact protocols in local languages</li>
                  <li>• Childproofing assessments for accommodations</li>
                </ul>
              </div>

              <div>
                <h6 className="text-lg font-semibold text-white mb-3">Practical Planning:</h6>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• <span className="font-semibold text-slate-200">Nap-Friendly Itineraries:</span> Built-in rest periods and quiet spaces</li>
                  <li>• <span className="font-semibold text-slate-200">Dietary Accommodations:</span> Kid-friendly meal options at every restaurant</li>
                  <li>• <span className="font-semibold text-slate-200">Equipment Rental:</span> Strollers, car seats, cribs available at destinations</li>
                  <li>• <span className="font-semibold text-slate-200">Weather Contingency:</span> Indoor backup activities for every outdoor plan</li>
                </ul>
              </div>

              <div>
                <h6 className="text-lg font-semibold text-white mb-3">Educational Integration:</h6>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• <span className="font-semibold text-slate-200">Learning Opportunities:</span> History, culture, and science tied to destinations</li>
                  <li>• <span className="font-semibold text-slate-200">Interactive Experiences:</span> Hands-on workshops and cultural immersion</li>
                  <li>• <span className="font-semibold text-slate-200">Memory Making:</span> Photo spot recommendations and journey documentation tools</li>
                  <li>• <span className="font-semibold text-slate-200">Cultural Sensitivity:</span> Teaching moments about respecting local customs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accessibility Excellence */}
          <div className="mb-12 bg-gradient-to-br from-blue-900/20 to-slate-800/20 border border-blue-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Accessibility Excellence: Travel Without Barriers</h3>
            </div>

            <h4 className="text-2xl font-semibold text-blue-300 mb-4">Universal Design Approach:</h4>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
              <h5 className="text-xl font-semibold text-white mb-3">Physical Accessibility Intelligence:</h5>
              <p className="text-slate-300 mb-3">Input: "Rome trip, wheelchair accessible"</p>

              <div className="mb-4">
                <p className="text-slate-200 mb-2 font-semibold">Comprehensive Assessment:</p>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>✓ Cobblestone alternative routes mapped</li>
                  <li>✓ Elevator access to Vatican Museums confirmed</li>
                  <li>✓ Accessible bathroom locations every 500 meters</li>
                  <li>✓ Restaurant entrance widths and table heights verified</li>
                  <li>✓ Transport options: Metro accessibility vs taxi recommendations</li>
                </ul>
              </div>

              <div>
                <p className="text-slate-200 mb-2 font-semibold">Detailed Planning:</p>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>→ Colosseum: Accessible entrance, elevator to upper levels, reserved viewing areas</li>
                  <li>→ Trevi Fountain: Wheelchair viewing platform, optimal photo angles identified</li>
                  <li>→ Accommodations: Roll-in showers, grab bars, accessible balconies verified</li>
                  <li>→ Dining: 15+ restaurants with confirmed accessibility and adapted menu options</li>
                </ul>
              </div>
            </div>

            <h5 className="text-xl font-semibold text-blue-300 mb-4">Beyond Physical Needs:</h5>

            <div className="space-y-6">
              <div>
                <h6 className="text-lg font-semibold text-white mb-3">Sensory Considerations:</h6>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• <span className="font-semibold text-slate-200">Visual Impairments:</span> Audio descriptions, tactile experiences, guide compatibility</li>
                  <li>• <span className="font-semibold text-slate-200">Hearing Impairments:</span> Visual alert systems, sign language interpreters, written communication cards</li>
                  <li>• <span className="font-semibold text-slate-200">Cognitive Accessibility:</span> Clear signage, simplified directions, sensory-friendly environments</li>
                </ul>
              </div>

              <div>
                <h6 className="text-lg font-semibold text-white mb-3">Chronic Condition Support:</h6>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• <span className="font-semibold text-slate-200">Energy Management:</span> Flexible pacing, frequent rest options, low-exertion alternatives</li>
                  <li>• <span className="font-semibold text-slate-200">Medical Needs:</span> Pharmacy locations, medical facility access, emergency protocols</li>
                  <li>• <span className="font-semibold text-slate-200">Dietary Requirements:</span> Specialized diet accommodation, safe food preparation verification</li>
                </ul>
              </div>

              <div>
                <h6 className="text-lg font-semibold text-white mb-3">Assistive Technology Integration:</h6>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• <span className="font-semibold text-slate-200">Screen Reader Compatibility:</span> Full app accessibility for vision assistive devices</li>
                  <li>• <span className="font-semibold text-slate-200">Voice Control:</span> Hands-free operation for mobility-impaired users</li>
                  <li>• <span className="font-semibold text-slate-200">Text Size Control:</span> Customizable display options for visual clarity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Live Cultural Calendar */}
          <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-slate-800/20 border border-orange-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl flex items-center justify-center">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">📅 Live Cultural Calendar: Perfect Timing Intelligence</h3>
            </div>

            <h4 className="text-2xl font-semibold text-orange-300 mb-4">Real-Time Event Integration</h4>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
              <h5 className="text-xl font-semibold text-white mb-3">Festival & Event Intelligence:</h5>
              <p className="text-slate-300 mb-3">Planning Trip to India in October</p>

              <div>
                <p className="text-slate-200 mb-2 font-semibold">Cultural Calendar Analysis:</p>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>🎉 Diwali (November 1-5): Book accommodations now, prices increase 60%</li>
                  <li>🎭 Navratri (October 15-24): Join authentic celebrations in Gujarat</li>
                  <li>⛈ Post-monsoon season: Perfect weather, fewer crowds, optimal pricing</li>
                  <li>🌾 Harvest festivals: Regional celebrations, authentic food experiences</li>
                  <li>🏛 Heritage site schedules: Extended hours during festival season</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold text-orange-300 mb-3">Seasonal Window Optimization:</h5>
                <h6 className="text-lg font-semibold text-white mb-3">Weather Intelligence:</h6>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• <span className="font-semibold text-slate-200">Micro-Climate Awareness:</span> "Shimla mornings are 5°C, afternoons 15°C in October"</li>
                  <li>• <span className="font-semibold text-slate-200">Activity Timing:</span> "Visit Taj Mahal at sunrise (6:30 AM) to avoid crowds and heat"</li>
                  <li>• <span className="font-semibold text-slate-200">Seasonal Activities:</span> "Whale watching season in Sri Lanka: May-October optimal"</li>
                  <li>• <span className="font-semibold text-slate-200">Clothing Guidance:</span> Regional and seasonal dress recommendations</li>
                </ul>
              </div>

              <div>
                <h5 className="text-xl font-semibold text-orange-300 mb-3">Cultural Event Participation:</h5>
                <h6 className="text-lg font-semibold text-white mb-3">Authentic Experience Access:</h6>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• <span className="font-semibold text-slate-200">Local Festival Integration:</span> Participate respectfully in community celebrations</li>
                  <li>• <span className="font-semibold text-slate-200">Seasonal Food Experiences:</span> Regional specialties available only during specific times</li>
                  <li>• <span className="font-semibold text-slate-200">Cultural Workshops:</span> Traditional craft sessions aligned with cultural calendar</li>
                  <li>• <span className="font-semibold text-slate-200">Religious Observances:</span> Respectful participation guidelines for sacred events</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Predictive Discovery */}
          <div className="mb-12 bg-gradient-to-br from-pink-900/20 to-slate-800/20 border border-pink-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-pink-400 rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Predictive Discovery: From Micro-Trips to Grand Expeditions</h3>
            </div>

            <h4 className="text-2xl font-semibold text-pink-300 mb-4">Intelligent Trip Scaling:</h4>

            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h5 className="text-xl font-semibold text-white mb-3">Weekend Micro-Trips:</h5>
                <p className="text-slate-300 mb-3">Input: "Surprise me with a weekend from Mumbai"</p>

                <div className="mb-4">
                  <p className="text-slate-200 mb-2 font-semibold">AI Discovery Process:</p>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>✓ Weather forecast: Clear skies, perfect for outdoor activities</li>
                    <li>✓ Your history: Prefer nature over cities, like photography</li>
                    <li>✓ Budget analysis: ₹15,000 available, prefers mid-range experiences</li>
                    <li>✓ Energy level: Need relaxation after busy work week</li>
                  </ul>
                </div>

                <div>
                  <p className="text-slate-200 mb-2 font-semibold">Personalized Suggestion:</p>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>→ Lonavala Hill Station: 2-hour drive, misty mountains, photography opportunities</li>
                    <li>→ Rajmachi Fort Trek: Moderate difficulty, historical interest, sunrise photography</li>
                    <li>→ Local homestay: Family-run, authentic Maharashtrian meals, mountain views</li>
                    <li>→ Bonus discovery: Local pottery workshop, meditation cave, organic farm visit</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6">
                <h5 className="text-xl font-semibold text-white mb-3">Multi-Country Grand Expeditions:</h5>
                <p className="text-slate-300 mb-3">Input: "6-month journey through Southeast Asia, digital nomad budget"</p>

                <div className="mb-4">
                  <p className="text-slate-200 mb-2 font-semibold">Comprehensive Planning:</p>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>✓ Visa requirements and timing optimization</li>
                    <li>✓ Seasonal weather patterns across 8 countries</li>
                    <li>✓ Co-working spaces and internet reliability mapping</li>
                    <li>✓ Budget analysis: $3,000/month living costs + experiences</li>
                    <li>✓ Cultural progression: Easier to harder language/cultural barriers</li>
                  </ul>
                </div>

                <div>
                  <p className="text-slate-200 mb-2 font-semibold">Intelligent Route Design:</p>
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>→ Thailand (2 months): Easy entry point, strong nomad community, low costs</li>
                    <li>→ Vietnam (1.5 months): Cultural immersion, diverse landscapes, food adventure</li>
                    <li>→ Indonesia (1.5 months): Island hopping, surfing, spiritual experiences</li>
                    <li>→ Philippines (1 month): Remote work paradise, pristine nature, English-friendly</li>
                    <li>→ Flexibility buffer: 2 weeks for spontaneous discoveries or extended stays</li>
                  </ul>
                </div>
              </div>
            </div>

            <h5 className="text-xl font-semibold text-pink-300 mb-4 mt-6">Smart Discovery Features:</h5>

            <div className="space-y-4">
              <div>
                <h6 className="text-lg font-semibold text-white mb-2">Predictive Personalization:</h6>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• <span className="font-semibold text-slate-200">Interest Evolution:</span> AI notices your growing interest in photography → Suggests sunrise/golden hour experiences</li>
                  <li>• <span className="font-semibold text-slate-200">Comfort Zone Expansion:</span> Gradually introduces new experience types based on positive feedback</li>
                  <li>• <span className="font-semibold text-slate-200">Seasonal Optimization:</span> Suggests destinations at their optimal times based on your travel windows</li>
                  <li>• <span className="font-semibold text-slate-200">Budget Intelligence:</span> Finds experiences that maximize value within your spending comfort zone</li>
                </ul>
              </div>

              <div>
                <h6 className="text-lg font-semibold text-white mb-2">Serendipity Engineering:</h6>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• <span className="font-semibold text-slate-200">Hidden Gem Discovery:</span> Local favorites that tourists rarely find</li>
                  <li>• <span className="font-semibold text-slate-200">Timing Magic:</span> "The bamboo forest is most beautiful during your exact travel dates"</li>
                  <li>• <span className="font-semibold text-slate-200">Cultural Intersections:</span> "Local music festival coincides with your photography interests"</li>
                  <li>• <span className="font-semibold text-slate-200">Community Connections:</span> Introduces you to like-minded travelers and locals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advanced Intelligence Features */}
          <div className="mb-8 bg-gradient-to-br from-green-900/20 to-slate-800/20 border border-green-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">🚀 Advanced Intelligence Features</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-green-300 mb-3">Multi-Modal Trip Planning</h4>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• <span className="font-semibold text-slate-200">Voice Planning:</span> Speak your travel dreams, get structured itineraries</li>
                  <li>• <span className="font-semibold text-slate-200">Image Inspiration:</span> Upload a photo → "Find places that look like this"</li>
                  <li>• <span className="font-semibold text-slate-200">Mood-Based Discovery:</span> "Plan something adventurous but not extreme"</li>
                  <li>• <span className="font-semibold text-slate-200">Time-Constrained Optimization:</span> "Best possible 72-hour experience in Tokyo"</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-green-300 mb-3">Real-Time Adaptation Intelligence</h4>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• <span className="font-semibold text-slate-200">Weather Pivoting:</span> Instant indoor alternatives when weather changes</li>
                  <li>• <span className="font-semibold text-slate-200">Crowd Avoidance:</span> Real-time crowd data → Alternative timing suggestions</li>
                  <li>• <span className="font-semibold text-slate-200">Transportation Disruption:</span> Automatic route re-optimization</li>
                  <li>• <span className="font-semibold text-slate-200">Health & Safety Monitoring:</span> Political, health, or safety situation awareness</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-green-300 mb-3">Social Intelligence Integration</h4>
                <ul className="space-y-2 text-slate-300 ml-4">
                  <li>• <span className="font-semibold text-slate-200">Friend Compatibility:</span> "Plan something for introverts and extroverts"</li>
                  <li>• <span className="font-semibold text-slate-200">Group Consensus:</span> AI mediates different preferences and budgets</li>
                  <li>• <span className="font-semibold text-slate-200">Local Connection:</span> Connects you with community members sharing similar interests</li>
                  <li>• <span className="font-semibold text-slate-200">Travel Style Learning:</span> Understands your group dynamics and plans accordingly</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
              <p className="text-xl text-slate-200 leading-relaxed text-center font-semibold">
                This is not just travel planning software. This is travel intelligence that thinks like the best local guide, plans like an experienced travel agent, and adapts like your closest travel companion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
