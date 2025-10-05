import React from 'react';
import { Globe, Twitter, Linkedin, Instagram, Mail, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-teal-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold tracking-wide">
                  <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text">N</span>
                  <span className="text-transparent bg-gradient-to-r from-purple-300 to-teal-400 bg-clip-text">A</span>
                  <span className="text-transparent bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text">V</span>
                  <span className="text-transparent bg-gradient-to-r from-teal-300 to-orange-400 bg-clip-text">E</span>
                  <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text">E</span>
                  <span className="text-transparent bg-gradient-to-r from-orange-300 to-pink-400 bg-clip-text">K</span>
                  <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">A</span>
                </div>
              </div>
            </div>
          </div>
          {/* Tagline */}
          <p className="text-lg text-slate-400 mb-8">
            Travel Reimagined for Humanity
          </p>
          {/* Vision Text */}
          <p className="text-sm text-slate-500 mb-4">
            Vision by Vishwanath Archak M R
          </p>
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110"
              href="https://x.com/ArchakR59598"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110"
              href="https://linkedin.com/in/vishwanath-archak-m-r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110"
              href="https://instagram.com/fuelup_with_mr.archak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110"
              href="https://www.youtube.com/@FuelupwithMr.Archak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-5 h-5 text-white" />
            </a>
            <a
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110"
              href="mailto:vishwanath05122006@gmail.com"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
          {/* Bottom Line */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-slate-500 text-sm">
              © 2025 Naveeka. Connecting 8 billion explorers, one journey at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
