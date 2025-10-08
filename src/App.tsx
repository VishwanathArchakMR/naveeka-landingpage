import React from 'react';
import { HamburgerMenu } from './components/HamburgerMenu';
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
      <HamburgerMenu />
      <section id="home">
        <Hero />
      </section>
      <section id="why-now">
        <VisionStatement />
      </section>
      <section id="core-pillars">
        <CorePillars />
      </section>
      <section id="revolutionary-features">
        <RevolutionaryFeatures />
      </section>
      <section id="billion-user-revolution">
        <ImpactSection />
      </section>
      <section id="business-model-market">
        <MarketOpportunity />
      </section>
      <section id="business-model-gtm">
        <BusinessModel />
      </section>
      <section id="responsible-travel">
        <FutureImpact />
      </section>
      <section id="contact">
        <ClosingSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;
