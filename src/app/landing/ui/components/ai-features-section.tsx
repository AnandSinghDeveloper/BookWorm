import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sparkles,
  ChevronDown,
  MousePointerClick,
  MessageSquare,
} from "lucide-react";
import { aiFeatures } from "../../data/content";

const AiFeaturesSection = () => {
  const [openAiFeature, setOpenAiFeature] = React.useState<number | null>(null);
  return (
    <>
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
            onOpenChange={() =>
              setOpenAiFeature(openAiFeature === idx ? null : idx)
            }
          >

            console.log("dwjvefhvb");
            
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
                              The occurrence of events by chance in a happy way
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
    </>
  );
};

export default AiFeaturesSection;
