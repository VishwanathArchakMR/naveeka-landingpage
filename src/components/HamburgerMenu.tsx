import React, { useState } from 'react';
import { Menu, X, Mail, Github } from 'lucide-react';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Why Now', id: 'why-now' },
    { label: 'Core Ecosystem Pillars', id: 'core-pillars' },
    { label: 'Revolutionary Features', id: 'revolutionary-features' },
    { label: 'A Billion User Revolution', id: 'billion-user-revolution' },
    { label: 'Business Model and Market', id: 'business-model-market' },
    { label: 'Business Model and Go To Market', id: 'business-model-gtm' },
    { label: 'Responsible Travel and Why We Win', id: 'responsible-travel' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-slate-800 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Profile & Email Icons */}
          <div className="flex items-center gap-4 mb-8 pt-16">
            <a
              href="https://github.com/VishwanathArchakMR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6 text-white" />
            </a>
            <a
              href="mailto:vishwanath@naveeka.com"
              className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-white" />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-lg text-gray-200 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
