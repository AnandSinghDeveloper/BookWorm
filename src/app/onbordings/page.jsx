"use client";
import React, { useState } from 'react';
import { Check, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BookWormOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState({
    goals: [],
    genres: [],
    frequency: '',
    readingTime: [],
    format: '',
    gender: '',
    ageRange: '',
    settings: {
      recommendations: true,
      streakTracking: true,
      reminders: true,
      insights: true
    }
  });

  const totalSteps = 9;

  const goals = [
    { id: 'knowledge', label: 'Improve knowledge', icon: '📚' },
    { id: 'stress', label: 'Reduce stress', icon: '😌' },
    { id: 'habit', label: 'Build reading habit', icon: '🎯' },
    { id: 'career', label: 'Career growth', icon: '💼' },
    { id: 'entertainment', label: 'Entertainment', icon: '🎭' },
    { id: 'personal', label: 'Personal growth', icon: '🌱' }
  ];

  const genres = [
    'Fiction', 'Non-fiction', 'Self-help', 'Technology',
    'Biography', 'Fantasy', 'Psychology', 'Romance', 'History', "Adventure", "philosophy",
  ];

  const frequencies = [
    { id: 'daily', label: 'Daily', icon: '📅' },
    { id: '3-4week', label: '3-4 times a week', icon: '📆' },
    { id: 'weekly', label: 'Weekly', icon: '📋' },
    { id: 'occasionally', label: 'Occasionally', icon: '⏰' }
  ];

  const readingTimes = [
    { id: 'morning', label: 'Morning', icon: '🌅' },
    { id: 'commute', label: 'During commute', icon: '🚇' },
    { id: 'lunch', label: 'Lunch break', icon: '🍽️' },
    { id: 'night', label: 'Night before sleep', icon: '🌙' },
    { id: 'anytime', label: 'Anytime', icon: '⭐' }
  ];

  const formats = [
    { id: 'summaries', label: 'Short summaries', desc: 'Quick insights in minutes' },
    { id: 'full', label: 'Full books', desc: 'Complete reading experience' },
    { id: 'chapters', label: 'Chapter-wise reading', desc: 'Read at your own pace' },
    { id: 'highlights', label: 'Highlight & notes focused', desc: 'Deep learning approach' }
  ];

  const genders = [
    { id: 'male', label: 'Male', icon: '👨' },
    { id: 'female', label: 'Female', icon: '👩' },
    { id: 'Other', label: 'Other', icon: '🧑' },
   
  ];

  const ageRanges = [
    { id: 'under-18', label: 'Under 18', icon: '👶' },
    { id: '18-24', label: '18-24', icon: '🎓' },
    { id: '25-34', label: '25-34', icon: '💼' },
    { id: '35-44', label: '35-44', icon: '👔' },
    { id: '45-54', label: '45-54', icon: '📚' },
    { id: '55+', label: '55+', icon: '👴' }
  ];

  const toggleSelection = (category, value) => {
    setSelections(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const setSingleSelection = (category, value) => {
    setSelections(prev => ({ ...prev, [category]: value }));
  };

  const toggleSetting = (setting) => {
    setSelections(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        [setting]: !prev.settings[setting]
      }
    }));
  };

  const handleContinue = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderProgressBar = () => (
    <div className="flex justify-center gap-1 mb-6">
      {[...Array(totalSteps)].map((_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all ${
            i + 1 <= currentStep ? 'bg-orange-500 w-8' : 'bg-gray-200 w-6'
          }`}
        />
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">What are your reading goals?</h2>
      <div className="space-y-3">
        {goals.map(goal => (
          <div
            key={goal.id}
            onClick={() => toggleSelection('goals', goal.id)}
            className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${
              selections.goals.includes(goal.id)
                ? 'bg-orange-50 border-2 border-orange-500'
                : 'bg-white border-2 border-gray-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{goal.icon}</span>
              <span className="font-medium text-gray-700">{goal.label}</span>
            </div>
            {selections.goals.includes(goal.id) && (
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Which genres do you enjoy?</h2>
      <div className="flex flex-wrap gap-3">
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => toggleSelection('genres', genre)}
            className={`px-5 py-3 rounded-full font-medium transition-all ${
              selections.genres.includes(genre)
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">How often do you read?</h2>
      <div className="space-y-3">
        {frequencies.map(freq => (
          <div
            key={freq.id}
            onClick={() => setSingleSelection('frequency', freq.id)}
            className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
              selections.frequency === freq.id
                ? 'bg-orange-50 border-2 border-orange-500'
                : 'bg-white border-2 border-gray-200'
            }`}
          >
            <span className="text-2xl">{freq.icon}</span>
            <span className="font-medium text-gray-700">{freq.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">When do you usually read?</h2>
      <div className="space-y-3">
        {readingTimes.map(time => (
          <div
            key={time.id}
            onClick={() => toggleSelection('readingTime', time.id)}
            className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${
              selections.readingTime.includes(time.id)
                ? 'bg-orange-50 border-2 border-orange-500'
                : 'bg-white border-2 border-gray-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{time.icon}</span>
              <span className="font-medium text-gray-700">{time.label}</span>
            </div>
            {selections.readingTime.includes(time.id) && (
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">How do you prefer to read?</h2>
      <div className="space-y-3">
        {formats.map(format => (
          <div
            key={format.id}
            onClick={() => setSingleSelection('format', format.id)}
            className={`p-4 rounded-xl cursor-pointer transition-all ${
              selections.format === format.id
                ? 'bg-orange-50 border-2 border-orange-500'
                : 'bg-white border-2 border-gray-200'
            }`}
          >
            <div className="font-semibold text-gray-800 mb-1">{format.label}</div>
            <div className="text-sm text-gray-500">{format.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Help us personalize your experience</h2>
      <div className="space-y-4">
        {[
          { id: 'recommendations', label: 'Smart recommendations', desc: 'Get personalized book suggestions' },
          { id: 'streakTracking', label: 'Reading streak tracking', desc: 'Track your reading consistency' },
          { id: 'reminders', label: 'Daily reading reminders', desc: 'Never miss your reading time' },
          { id: 'insights', label: 'Performance insights', desc: 'Monitor pages, time, and progress' }
        ].map(setting => (
          <div key={setting.id} className="flex items-center justify-between p-4 bg-white rounded-xl border-2 border-gray-200">
            <div className="flex-1">
              <div className="font-semibold text-gray-800">{setting.label}</div>
              <div className="text-sm text-gray-500 mt-1">{setting.desc}</div>
            </div>
            <button
              onClick={() => toggleSetting(setting.id)}
              className={`ml-4 w-12 h-7 rounded-full transition-all ${
                selections.settings[setting.id] ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  selections.settings[setting.id] ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep7 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">What's your gender?</h2>
      <p className="text-gray-600 text-sm mb-4">This helps us personalize book recommendations</p>
      <div className="space-y-3">
        {genders.map(gender => (
          <div
            key={gender.id}
            onClick={() => setSingleSelection('gender', gender.id)}
            className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
              selections.gender === gender.id
                ? 'bg-orange-50 border-2 border-orange-500'
                : 'bg-white border-2 border-gray-200'
            }`}
          >
            <span className="text-2xl">{gender.icon}</span>
            <span className="font-medium text-gray-700">{gender.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep8 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">What's your age range?</h2>
      <p className="text-gray-600 text-sm mb-4">Age-appropriate recommendations just for you</p>
      <div className="space-y-3">
        {ageRanges.map(age => (
          <div
            key={age.id}
            onClick={() => setSingleSelection('ageRange', age.id)}
            className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
              selections.ageRange === age.id
                ? 'bg-orange-50 border-2 border-orange-500'
                : 'bg-white border-2 border-gray-200'
            }`}
          >
            <span className="text-2xl">{age.icon}</span>
            <span className="font-medium text-gray-700">{age.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep9 = () => (
    <div className="text-center space-y-6">
      <div className="text-6xl mb-4">📚✨</div>
      <h2 className="text-2xl font-bold text-gray-800">Are you ready to start your reading journey?</h2>
      <p className="text-gray-600">Your personalized BookWorm experience awaits!</p>
      <div className="flex gap-3 justify-center pt-4">
        <Button
          onClick={() => setCurrentStep(1)}
          className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all bg-white"
        >
          <X className="w-5 h-5" />
          Not now
        </Button>
        <Button
          onClick={() => alert('Welcome to BookWorm! 🎉')}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-all"
        >
          <Check className="w-5 h-5" />
          Yes, let's start!
        </Button>
      </div>
    </div>
  );

  const steps = [
    renderStep1,
    renderStep2,
    renderStep3,
    renderStep4,
    renderStep5,
    renderStep6,
    renderStep7,
    renderStep8,
    renderStep9
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          {renderProgressBar()}
          {steps[currentStep - 1]()}
          {currentStep < 9 && (
            <button
              onClick={handleContinue}
              className="w-full mt-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="text-center mt-4 text-sm text-gray-500">
          Step {currentStep} of {totalSteps}
        </div>
      </div>
    </div>
  );
};

export default BookWormOnboarding;