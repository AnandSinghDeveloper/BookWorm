import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import coverImg  from "../../../../../public/heroImg.png";

const HeroSection = () => {
  return (
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
          <span className="text-gray-800 font-heading">Anytime, Anywhere</span>
        </h1>

        <p className="text-base font-heading sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          Discover, read, and immerse yourself in millions of books. Your
          personal library, reimagined for the modern reader.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
          onClick={ () => window.location.href = "/signIn"}
            size="lg"
            className="group bg-gradient-to-r font-heading from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-base md:text-base"
          >
            Start Reading Free
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
     <div className="order-2 lg:order-2 ">
      <Image src={coverImg} alt="Hero" width={700} height={700} className="w-full h-auto" />
     </div>
      
    </div>
    
  );
};

export default HeroSection;
