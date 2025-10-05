"use client";
import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Sparkles,
  Zap,
  Heart,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  Menu,
  X,
  Library,
  Clock,
  Award,
  Bookmark,
  MessageSquare,
  MousePointerClick,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";


const LandingView = () => {
  const [scrollY, setScrollY] = useState(0);
  const [openAiFeature, setOpenAiFeature] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "Smart Recommendations",
      desc: "AI-powered suggestions based on your reading habits and preferences",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Instant page loads and seamless reading experience across all devices",
    },
    {
      icon: Heart,
      title: "Curated Collections",
      desc: "Handpicked books for every mood, genre, and interest",
    },
  ];

  const stats = [
    { icon: BookOpen, value: "50K+", label: "Books Available" },
    { icon: Users, value: "1M+", label: "Active Readers" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: TrendingUp, value: "98%", label: "User Satisfaction" },
  ];

  const benefits = [
    {
      icon: Library,
      title: "Unlimited Access",
      desc: "Access to millions of books across all genres",
    },
    {
      icon: Clock,
      title: "Read Anywhere",
      desc: "Sync your progress across all your devices",
    },
    {
      icon: Award,
      title: "Expert Curation",
      desc: "Books handpicked by literary experts",
    },
    {
      icon: Bookmark,
      title: "Smart Bookmarks",
      desc: "Never lose your place with auto-sync",
    },
  ];

  const aiFeatures = [
    {
      title: "AI Book Chat",
      description: "Have intelligent conversations about any book",
      details: [
        "Ask questions about plot, characters, and themes",
        "Get instant answers with book references",
        "Discuss interpretations and analysis",
        "Explore deeper meanings and symbolism",
      ],
    },
    {
      title: "Smart Word Lookup",
      description: "Double-click any word for instant definitions",
      details: [
        "Context-aware definitions",
        "Synonyms and usage examples",
        "Etymology and word origins",
        "Pronunciation guides",
      ],
    },
  ];

  const NavLinks = () => (
    <>
      <a
        href="#features"
        className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300"
      >
        Prvicy Policy
      </a>

      <a
        href="#pricing"
        className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300"
      >
        Pricing
      </a>
      <a
        href="#about"
        className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300"
      >
        About
      </a>
    </>
  );

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
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center  group cursor-pointer">
            <div className=" px-2  rounded-xl  transform  duration-300">
              <Image
                src="/logo.svg"
                alt="BookWram Logo"
                width={32}
                height={32}
              />
            </div>
            <span className="text-xl font-heading md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Bookworm
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
            <Button className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                <NavLinks />
                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1 ">
            <Badge className="inline-flex items-center space-x-2 bg-orange-100 hover:bg-orange-200 text-orange-700 border-orange-200 px-4 py-2 text-xs md:text-sm animate-bounce mt-15">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              <span>Now with AI-powered reading assistant</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span
                className={`bg-gradient-to-r font-heading from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent`}
              >
                Dive Into Your Favorite Stories,
              </span>
              <br />
              <span className="text-gray-800 font-heading">
                Anytime, Anywhere
              </span>
            </h1>

            <p className="text-base font-heading sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover, read, and immerse yourself in millions of books. Your
              personal library, reimagined for the modern reader.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r font-heading from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-base md:text-base"
              >
                Start Reading Free
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
          </div>

          {/* Hero Image */}
        </div>

        <section>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pt-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={idx}
                  className="text-center hover:shadow-lg transition-shadow cursor-pointer border-orange-100"
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-2">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-gray-800">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-gray-800 mb-4">
            Why Readers Love Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl  text-gray-600">
            Experience reading like never before
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className={`relative hover:bg-orange-50 hover:scale-105 transition-all duration-300 delay-100 cursor-pointer hover:shadow-lg 
                  `}
              >
                <CardHeader>
                  <div
                    className={`inline-flex p-3 md:p-4 rounded-2xl mb-4 md:mb-6 w-fit bg-[#FFF0CE]   
                  }`}
                  >
                    <Icon className={`w-6 h-6 md:w-8 md:h-8 text-[#F54A00]`}/>
                  </div>
                  <CardTitle className="text-xl font-heading md:text-2xl ">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription
                    className={`text-sm md:text-base 
                    }`}
                  >
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative  z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-gray-800 mb-4">
            Everything You Need
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            All the features to enhance your reading experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={idx}
                className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-orange-100"
              >
                <CardHeader>
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-3 md:p-4 rounded-2xl w-fit mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg font-heading md:text-xl">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base">
                    {benefit.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* AI Features Section with Collapsibles */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl my-16">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-xs md:text-sm">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            AI-Powered Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading md:text-5xl font-bold text-gray-800 mb-4">
            Intelligent Reading Assistant
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Your personal AI companion for a smarter reading experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {aiFeatures.map((feature, idx) => (
            <Collapsible
              key={idx}
              open={openAiFeature === idx}
              onOpenChange={() => setOpenAiFeature(openAiFeature === idx ? null : idx)}
            >
              <Card
                className={`border-2 transition-all duration-300 ${
                  openAiFeature === idx
                    ? "border-orange-500 shadow-xl"
                    : "border-orange-200 hover:border-orange-300"
                }`}
              >
                <CollapsibleTrigger className="w-full text-left">
                  <CardHeader className="cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 md:p-4 rounded-2xl transition-all duration-300 ${
                            openAiFeature === idx
                              ? "bg-gradient-to-br from-orange-500 to-amber-600"
                              : "bg-gradient-to-br from-orange-100 to-amber-100"
                          }`}
                        >
                          {idx === 0 ? (
                            <MessageSquare
                              className={`w-5 h-5 md:w-6 md:h-6 ${
                                openAiFeature === idx
                                  ? "text-white"
                                  : "text-orange-600"
                              }`}
                            />
                          ) : (
                            <MousePointerClick
                              className={`w-5 h-5 md:w-6 md:h-6 ${
                                openAiFeature === idx
                                  ? "text-white"
                                  : "text-orange-600"
                              }`}
                            />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-lg md:text-xl mb-2">
                            {feature.title}
                          </CardTitle>
                          <CardDescription className="text-sm md:text-base">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-orange-600 transition-transform duration-300 flex-shrink-0 ml-2 ${
                          openAiFeature === idx ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 md:p-6 space-y-3">
                      <p className="text-sm font-semibold text-orange-900 mb-3">
                        What you can do:
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIdx) => (
                          <li
                            key={detailIdx}
                            className="flex items-start space-x-3 text-sm md:text-base text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Demo Preview */}
                      <div className="mt-6 p-4 bg-white rounded-lg border-2 border-orange-200">
                        <div className="text-xs font-semibold text-orange-600 mb-2">
                          DEMO PREVIEW
                        </div>
                        {idx === 0 ? (
                          <div className="space-y-3">
                            <div className="bg-orange-100 p-3 rounded-lg text-sm">
                              <p className="font-medium text-gray-800">
                                💬 "What motivated the protagonist?"
                              </p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-lg text-sm">
                              <p className="text-gray-700">
                                📖 Based on Chapter 7, the protagonist was
                                motivated by...
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <p className="text-sm text-gray-600">
                              Try double-clicking this word:
                            </p>
                            <div className="bg-orange-50 p-3 rounded-lg inline-block">
                              <span className="text-base font-medium text-gray-800 cursor-pointer hover:bg-orange-100 px-2 py-1 rounded transition-colors">
                                serendipity
                              </span>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-lg text-xs">
                              <p className="font-semibold text-gray-800">
                                serendipity (noun)
                              </p>
                              <p className="text-gray-600 mt-1">
                                The occurrence of events by chance in a happy
                                way
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Card className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 border-0 shadow-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <CardContent className="relative z-10 p-8 sm:p-10 md:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Start Your Reading Journey Today
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-orange-50">
              Join millions of readers and discover your next favorite book
            </p>
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 shadow-xl hover:shadow-2xl transition-all duration-300 text-base md:text-lg px-8 md:px-10"
            >
              Get Started - It's Free
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-orange-900 to-amber-900 text-white mt-16 md:mt-24 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
           <Image src="/logo.svg" alt="Logo" width={24} height={24} />
            <span className="text-lg md:text-xl font-heading font-bold">Bookworm</span>
          </div>
          <p className="text-sm md:text-base text-orange-200">
            © 2025 ReadVerse. Made with ❤️ for book lovers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingView;
