// app/page.jsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Trophy, 
  TrendingUp, 
  Zap, 
  Sparkles,
  ChevronRight,
  Clock,
  TrendingUp as TrendingUpIcon,
  DollarSign,
  Leaf,
  Brain,
  Briefcase,
  Heart,
  Star,
  Menu,
  X,
  Home,
  Library,
  Eye,
  User,
  Settings
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { useMediaQuery } from '@/hooks/use-media-query';

// Mock data for books
const mockBooks = [
  { id: 1, title: "The 5AM Club", author: "Robin Sharma", coverColor: "bg-gradient-to-br from-orange-100 to-orange-300", progress: 68, timeLeft: "45 min left" },
  { id: 2, title: "Atomic Habits", author: "James Clear", coverColor: "bg-gradient-to-br from-blue-100 to-blue-300" },
  { id: 3, title: "Deep Work", author: "Cal Newport", coverColor: "bg-gradient-to-br from-purple-100 to-purple-300" },
  { id: 4, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", coverColor: "bg-gradient-to-br from-green-100 to-green-300" },
  { id: 5, title: "The Alchemist", author: "Paulo Coelho", coverColor: "bg-gradient-to-br from-yellow-100 to-yellow-300" },
  { id: 6, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", coverColor: "bg-gradient-to-br from-red-100 to-red-300" },
];

const collections = [
  { id: 1, title: "Must-read Classics", count: 12, color: "bg-gradient-to-br from-amber-100 to-amber-300" },
  { id: 2, title: "New Releases", count: 8, color: "bg-gradient-to-br from-emerald-100 to-emerald-300" },
  { id: 3, title: "BookWorm Picks", count: 15, color: "bg-gradient-to-br from-violet-100 to-violet-300" },
  { id: 4, title: "Award Winners", count: 10, color: "bg-gradient-to-br from-rose-100 to-rose-300" },
];

const visualExplainers = [
  { id: 1, title: "Art History", icon: "🎨", color: "bg-gradient-to-br from-pink-100 to-pink-300" },
  { id: 2, title: "Productivity", icon: "📈", color: "bg-gradient-to-br from-orange-100 to-orange-300" },
  { id: 3, title: "Psychology", icon: "🧠", color: "bg-gradient-to-br from-blue-100 to-blue-300" },
  { id: 4, title: "Finance", icon: "💰", color: "bg-gradient-to-br from-green-100 to-green-300" },
  { id: 5, title: "Science", icon: "🔬", color: "bg-gradient-to-br from-cyan-100 to-cyan-300" },
];

const financeBooks = [
  { id: 1, title: "The Psychology of Money", author: "Morgan Housel", color: "bg-gradient-to-br from-emerald-100 to-emerald-300" },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", color: "bg-gradient-to-br from-red-100 to-red-300" },
  { id: 3, title: "The Intelligent Investor", author: "Benjamin Graham", color: "bg-gradient-to-br from-blue-100 to-blue-300" },
  { id: 4, title: "Your Money or Your Life", author: "Vicki Robin", color: "bg-gradient-to-br from-purple-100 to-purple-300" },
];

const categories = [
  { id: 1, name: "Self-Growth", icon: <Leaf className="h-5 w-5" />, color: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200" },
  { id: 2, name: "Spirituality", icon: <Heart className="h-5 w-5" />, color: "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200" },
  { id: 3, name: "Productivity", icon: <Zap className="h-5 w-5" />, color: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200" },
  { id: 4, name: "Business & Career", icon: <Briefcase className="h-5 w-5" />, color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200" },
  { id: 5, name: "Psychology", icon: <Brain className="h-5 w-5" />, color: "bg-gradient-to-br from-violet-50 to-violet-100 border-violet-200" },
  { id: 6, name: "Finance", icon: <DollarSign className="h-5 w-5" />, color: "bg-gradient-to-br from-green-50 to-green-100 border-green-200" },
];

const navItems = [
  { id: 1, label: "Discover", icon: <Home className="h-5 w-5" />, active: true },
  { id: 2, label: "Library", icon: <Library className="h-5 w-5" />, active: false },
  { id: 3, label: "Read", icon: <Eye className="h-5 w-5" />, active: false },
  { id: 4, label: "Profile", icon: <User className="h-5 w-5" />, active: false },
];

const BookCard = ({ book, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="flex-shrink-0 w-32 mr-4 cursor-pointer"
  >
    <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className={`h-40 ${book.coverColor} rounded-t-lg flex items-center justify-center`}>
        <BookOpen className="h-12 w-12 text-white/80" />
      </div>
      <CardContent className="p-3">
        <h3 className="font-semibold text-sm truncate">{book.title}</h3>
        <p className="text-xs text-gray-500 truncate">{book.author}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const CollectionCard = ({ collection, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="flex-shrink-0 w-40 mr-4 cursor-pointer"
  >
    <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className={`h-32 ${collection.color} rounded-t-lg flex items-center justify-center`}>
        <div className="text-3xl">📚</div>
      </div>
      <CardContent className="p-3">
        <h3 className="font-semibold text-sm">{collection.title}</h3>
        <p className="text-xs text-gray-500">{collection.count} books</p>
      </CardContent>
    </Card>
  </motion.div>
);

const VisualExplainerCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, rotateY: -20 }}
    animate={{ opacity: 1, rotateY: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className="flex-shrink-0 w-28 mr-4 cursor-pointer"
  >
    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className={`h-28 ${item.color} flex flex-col items-center justify-center p-4`}>
        <span className="text-2xl mb-2">{item.icon}</span>
        <h3 className="font-semibold text-xs text-center">{item.title}</h3>
      </div>
    </Card>
  </motion.div>
);

const CategoryPill = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex-shrink-0"
  >
    <Button
      variant="outline"
      className={`h-auto py-3 px-4 rounded-2xl border-2 ${category.color} hover:shadow-md transition-all duration-200`}
    >
      <div className="flex flex-col items-center space-y-2">
        <div className="text-orange-500">
          {category.icon}
        </div>
        <span className="text-xs font-medium">{category.name}</span>
      </div>
    </Button>
  </motion.div>
);

const Sidebar = () => (
  <motion.aside
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 border-r border-gray-100 bg-white z-40"
  >
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-8">
        <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
          <BookOpen className="h-5 w-5 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">BookWorm</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={item.active ? "default" : "ghost"}
            className={`w-full justify-start ${item.active ? 'bg-orange-500 hover:bg-orange-600' : ''}`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Button>
        ))}
      </nav>
      
      <div className="mt-8 pt-8 border-t border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-500">READING GOAL</h3>
          <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">
            40%
          </Badge>
        </div>
        <Progress value={40} className="h-2" />
        <p className="text-xs text-gray-500 mt-2">4 of 10 books completed</p>
      </div>
    </div>
    
    <div className="mt-auto p-6">
      <Button variant="ghost" className="w-full justify-start text-gray-500">
        <Settings className="h-4 w-4 mr-3" />
        Settings
      </Button>
    </div>
  </motion.aside>
);

const MobileBottomNav = () => (
  <motion.nav
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50"
  >
    <div className="flex justify-around items-center h-16">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`flex flex-col items-center justify-center space-y-1 p-2 ${
            item.active ? 'text-orange-500' : 'text-gray-400'
          }`}
        >
          <div className={`p-2 rounded-lg ${item.active ? 'bg-orange-50' : ''}`}>
            {item.icon}
          </div>
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </div>
  </motion.nav>
);

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (isDesktop) {
      setSidebarOpen(false);
    }
  }, [isDesktop]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50"
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">BookWorm</h1>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchActive(!isSearchActive)}
            className="relative"
          >
            <Search className="h-5 w-5" />
            {isSearchActive && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 h-2 w-2 bg-orange-500 rounded-full"
              />
            )}
          </Button>
        </div>
        
        <AnimatePresence>
          {isSearchActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-4 pb-4"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search books, authors, or topics..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed left-0 top-0 h-full w-64 bg-white z-50 lg:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-gray-800">BookWorm</h1>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={item.active ? "default" : "ghost"}
                      className={`w-full justify-start ${item.active ? 'bg-orange-500 hover:bg-orange-600' : ''}`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`pt-16 lg:pt-0 ${isDesktop ? 'lg:pl-64' : ''} pb-16 lg:pb-0`}>
        <div className="max-w-7xl mx-auto p-4 lg:p-8">
          {/* Desktop Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden lg:flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Discover</h1>
              <p className="text-gray-500">Personalized recommendations just for you</p>
            </div>
            
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search books, authors, or topics..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Continue Reading Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Continue Reading</h2>
                <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600">
                  See all <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex-shrink-0 w-24 h-32 bg-gradient-to-br from-orange-100 to-orange-300 rounded-xl flex items-center justify-center shadow-md"
                    >
                      <BookOpen className="h-10 w-10 text-white" />
                    </motion.div>
                    
                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">The 5AM Club</h3>
                          <p className="text-gray-500">Own your morning, elevate your life</p>
                        </div>
                        <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">
                          <Clock className="h-3 w-3 mr-1" /> 45 min left
                        </Badge>
                      </div>
                      
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Progress</span>
                          <span className="text-sm font-semibold text-orange-600">68%</span>
                        </div>
                        <Progress value={68} className="h-2" />
                      </div>
                      
                      <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm text-gray-500">Start your reading streak today</p>
                        <Button className="bg-orange-500 hover:bg-orange-600">
                          Continue <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Challenges Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Challenges</h2>
                  <p className="text-gray-500">28-day reading challenge</p>
                </div>
                <Trophy className="h-6 w-6 text-orange-500" />
              </div>
              
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800">Read 10 books this month</h3>
                      <p className="text-sm text-gray-600 mt-1">Complete the challenge to earn badges</p>
                      
                      <div className="mt-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-600">4</div>
                            <div className="text-xs text-gray-500">Completed</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800">6</div>
                            <div className="text-xs text-gray-500">To Go</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">12</div>
                            <div className="text-xs text-gray-500">Days Left</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="h-24 w-24 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">40%</span>
                      </div>
                      <div className="absolute inset-0 h-24 w-24 rounded-full border-8 border-gray-100"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Collections Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Collections</h2>
                <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600">
                  View all <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              
              <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                {collections.map((collection, index) => (
                  <CollectionCard key={collection.id} collection={collection} index={index} />
                ))}
              </div>
            </motion.section>

            {/* Visual Explainers Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Visual Explainers</h2>
                <Sparkles className="h-5 w-5 text-orange-500" />
              </div>
              
              <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                {visualExplainers.map((item, index) => (
                  <VisualExplainerCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </motion.section>

            {/* Today for You Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Today for You</h2>
                  <p className="text-gray-500">Personalized recommendations</p>
                </div>
                <TrendingUpIcon className="h-5 w-5 text-orange-500" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {mockBooks.slice(0, 4).map((book, index) => (
                  <BookCard key={book.id} book={book} index={index} />
                ))}
              </div>
            </motion.section>

            {/* To Have More Money Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">To Have More Money</h2>
                  <p className="text-gray-500">Curated based on your goal</p>
                </div>
                <DollarSign className="h-5 w-5 text-green-500" />
              </div>
              
              <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                {financeBooks.map((book, index) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="flex-shrink-0 w-56 mr-4"
                  >
                    <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                      <div className="flex">
                        <div className={`w-20 h-28 ${book.color} flex items-center justify-center`}>
                          <DollarSign className="h-8 w-8 text-white/80" />
                        </div>
                        <div className="p-4 flex-grow">
                          <h3 className="font-bold text-gray-800">{book.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{book.author}</p>
                          <div className="mt-3">
                            <Star className="h-4 w-4 text-amber-500 inline" />
                            <Star className="h-4 w-4 text-amber-500 inline mx-0.5" />
                            <Star className="h-4 w-4 text-amber-500 inline mx-0.5" />
                            <Star className="h-4 w-4 text-amber-500 inline mx-0.5" />
                            <Star className="h-4 w-4 text-gray-300 inline mx-0.5" />
                            <span className="text-xs text-gray-500 ml-2">4.2</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Categories Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Categories</h2>
                <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600">
                  All categories
                </Button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {categories.map((category, index) => (
                  <CategoryPill key={category.id} category={category} index={index} />
                ))}
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Floating Action Button for Mobile */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-20 right-4 lg:hidden z-40"
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg hover:shadow-xl"
        >
          <BookOpen className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  );
}