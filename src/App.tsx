import React from 'react';
import { Hero } from './components/Hero';
import { VisionStatement } from './components/VisionStatement';
import { CorePillars } from './components/CorePillars';
import { RevolutionaryFeatures } from './components/RevolutionaryFeatures';
import { ImpactSection } from './components/ImpactSection';
import { MarketOpportunity } from './components/MarketOpportunity';
import { BusinessModel } from './components/BusinessModel';
import { FutureImpact } from './components/FutureImpact';
import { ClosingSection } from './components/ClosingSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <VisionStatement />
      <CorePillars />
      <RevolutionaryFeatures />
      <ImpactSection />
      <MarketOpportunity />
      <BusinessModel />
      <FutureImpact />
      <ClosingSection />
      <Footer />
    </div>
  );
}

export default App;