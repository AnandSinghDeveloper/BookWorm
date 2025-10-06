import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { features } from "../../data/content";

const FeaturesSection = () => {
  return (
    <>
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
                  <Icon className={`w-6 h-6 md:w-8 md:h-8 text-[#F54A00]`} />
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
    </>
  );
};

export default FeaturesSection;
