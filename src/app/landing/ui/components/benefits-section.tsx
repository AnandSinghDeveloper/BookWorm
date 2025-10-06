import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { benefits } from "../../data/content";

const BenefitsSection = () => {
  return (
    <>
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
    </>
  );
};

export default BenefitsSection;
