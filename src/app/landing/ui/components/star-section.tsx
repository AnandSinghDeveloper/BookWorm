import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { stats } from "../../data/content";

const StarSection = () => {
  return (
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
  );
};

export default StarSection;
