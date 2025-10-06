import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <Card className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 border-0 shadow-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <CardContent className="relative z-10 p-8 sm:p-10 md:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Start Your Reading Journey Today
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-orange-50">
              Join millions of readers and discover your next favorite book
            </p>
            <Button
              size="lg"
              className="bg-white text-orange-600 font-heading hover:bg-orange-50 shadow-xl hover:shadow-2xl transition-all duration-300 text-base md:text-lg px-8 md:px-10"
            >
              Get Started - It's Free
            </Button>
          </CardContent>
        </Card>
  )
}

export default CTASection
