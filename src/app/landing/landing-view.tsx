"use client"

import { useEffect, useState } from "react";

import Footer from "./ui/components/footer";
import CTASection from "./ui/components/CTA-section";
import BenefitsSection from "./ui/components/benefits-section";
import HeroSection from "./ui/components/hero-section";
import StarSection from "./ui/components/star-section";
import Navbar from "./ui/components/navbar";
import FeaturesSection from "./ui/components/features-section";
import AiFeaturesSection from "./ui/components/ai-features-section";

const LandingView = () => {
  const [_scrollY, setScrollY] = useState(0);
  

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 md:w-80 md:h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 px-2 sm:px-6 lg:px-4 py-4 md:py-3">
        <Navbar />
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-32">
        <HeroSection />
        {/* Star Section */}
        <section>
          <StarSection />
        </section>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <FeaturesSection />
      </section>

      {/* Benefits Section */}
      <section className="relative  z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <BenefitsSection />
      </section>

      {/* AI Features Section with Collapsibles */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl my-16">
       <AiFeaturesSection />
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <CTASection />
      </section>

      <Footer />
    </div>
  );
};

export default LandingView;
