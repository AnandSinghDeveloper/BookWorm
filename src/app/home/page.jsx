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
  Settings,
  Bookmark,
  PlayCircle,
  TrendingDown,
  TrendingUp as TrendingUpSolid
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMediaQuery } from './hooks/use-media-query';
import Image from 'next/image';
import Imge1 from '../../../public/1.jpg';
import Imge2 from '../../../public/3.jpg';
import Imge3 from '../../../public/4.jpg';
import Imge4 from '../../../public/5.jpg';
import Imge5 from '../../../public/6.jpg';
import Imge6 from '../../../public/7.jpg';
import clasic from '../../../public/classic 4.jpg';
import award from '../../../public/award 1.jpg';
import number from '../../../public/tpo 1.jpg';
import track from '../../../public/s611371146998849390_p329_i1_w1600.jpeg';
import psychology from '../../../public/psychology 1.jpg';
import finance from '../../../public/finance.jpg';
import productivity from '../../../public/productivity 1.jpg';
import philosophy from '../../../public/philosophy 1.jpg';
import science from '../../../public/science 1.avif';
import art from '../../../public/classic 3.jpg';

// Mock data for books
const mockBooks = [
  { id: 1, title: "The 5AM Club", author: "Robin Sharma", coverImge: Imge1, progress: 68, timeLeft: "45 min left", rating: 4.5, category: "Productivity" },
  { id: 2, title: "Atomic Habits", author: "James Clear", coverImge: Imge2, progress: 68, timeLeft: "45 min left", rating: 4.7, category: "Self-Growth" },
  { id: 3, title: "Deep Work", author: "Cal Newport", coverImge: Imge3, progress: 68, timeLeft: "45 min left", rating: 4.4, category: "Productivity" },
  { id: 4, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", coverImge: Imge4, progress: 68, timeLeft: "45 min left", rating: 4.6, category: "Psychology" },
  { id: 5, title: "The Alchemist", author: "Paulo Coelho", coverImge: Imge5, progress: 68, timeLeft: "45 min left", rating: 4.8, category: "Spirituality" },
  { id: 6, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", coverImge: Imge6, progress: 68, timeLeft: "45 min left", rating: 4.3, category: "Finance" },
];

const collections = [
  { id: 1, title: "Must-read Classics", count: 12, coverImge: clasic, gradient: "from-amber-900/90 to-amber-700/90" },
  { id: 2, title: "New Releases", count: 8, coverImge: track, gradient: "from-blue-900/90 to-indigo-700/90" },
  { id: 3, title: "BookWorm Picks", count: 15, coverImge: number, gradient: "from-emerald-900/90 to-teal-700/90" },
  { id: 4, title: "Award Winners", count: 10, coverImge: award, gradient: "from-purple-900/90 to-violet-700/90" },
];

const visualExplainers = [
  { id: 1, title: "Art History", icon: "🎨", coverImge: art, color: "bg-gradient-to-br from-pink-100 to-rose-200" },
  { id: 2, title: "Productivity", icon: "📈", coverImge: productivity, color: "bg-gradient-to-br from-blue-100 to-cyan-200" },
  { id: 3, title: "Psychology", icon: "🧠", coverImge: psychology, color: "bg-gradient-to-br from-violet-100 to-purple-200" },
  { id: 4, title: "Finance", icon: "💰", coverImge: finance, color: "bg-gradient-to-br from-emerald-100 to-green-200" },
  { id: 5, title: "Science", icon: "🔬", coverImge: science, color: "bg-gradient-to-br from-sky-100 to-blue-200" },
  { id: 6, title: "Philosophy", icon: "🤔", coverImge: philosophy, color: "bg-gradient-to-br from-orange-100 to-amber-200" },
];

const financeBooks = [
  { id: 1, title: "The Psychology of Money", author: "Morgan Housel", coverImge: Imge4, rating: 4.7, trend: "up" },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", coverImge: Imge6, rating: 4.3, trend: "up" },
  { id: 3, title: "The Intelligent Investor", author: "Benjamin Graham", coverImge: finance, rating: 4.6, trend: "steady" },
  { id: 4, title: "Your Money or Your Life", author: "Vicki Robin", coverImge: Imge1, rating: 4.5, trend: "up" },
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
    whileHover={{ y: -8 }}
    className="flex-shrink-0 w-full cursor-pointer group"
  >
    <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image 
          src={book.coverImge} 
          alt={book.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge className="absolute top-2 left-2 bg-white/90 text-gray-800 hover:bg-white">
          {book.category}
        </Badge>
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1">
          <Bookmark className="h-4 w-4 text-gray-700" />
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-gray-800 truncate">{book.title}</h3>
        <p className="text-sm text-gray-500 truncate">{book.author}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium ml-1">{book.rating}</span>
          </div>
          <Badge variant="outline" className="text-xs bg-orange-50 text-orange-600 border-orange-200">
            <Clock className="h-3 w-3 mr-1" /> {book.timeLeft}
          </Badge>
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span>
            <span className="font-semibold">{book.progress}%</span>
          </div>
          <Progress value={book.progress} className="h-1.5" />
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const CollectionCard = ({ collection, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="flex-shrink-0 w-72 mr-4 cursor-pointer"
  >
    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
      <div className="relative h-40 overflow-hidden">
        <Image 
          src={collection.coverImge} 
          alt={collection.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} bg-blend-multiply`} />
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
          <h3 className="font-bold text-lg mb-1">{collection.title}</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm opacity-90">{collection.count} books</p>
            <Button size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
              Explore
            </Button>
          </div>
        </div>
      </div>
    </Card>
  </motion.div>
);

const VisualExplainerCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, rotateY: -20 }}
    animate={{ opacity: 1, rotateY: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.08, rotateY: 5 }}
    className="flex-shrink-0 w-32 mr-4 cursor-pointer"
  >
    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full">
      <div className="relative h-32 overflow-hidden">
        <Image 
          src={item.coverImge} 
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <span className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </span>
          <h3 className="font-bold text-sm text-white text-center drop-shadow-lg">
            {item.title}
          </h3>
        </div>
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayCircle className="h-6 w-6 text-white/80" />
        </div>
      </div>
    </Card>
  </motion.div>
);

const FinanceBookCard = ({ book, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="flex-shrink-0 w-56 mr-4 cursor-pointer"
  >
    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full">
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={book.coverImge} 
          alt={book.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 right-3">
          {book.trend === "up" ? (
            <div className="bg-emerald-500/90 text-white px-2 py-1 rounded-full flex items-center text-xs">
              <TrendingUpSolid className="h-3 w-3 mr-1" />
              Trending
            </div>
          ) : (
            <div className="bg-blue-500/90 text-white px-2 py-1 rounded-full text-xs">
              Popular
            </div>
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-bold text-white text-lg mb-1">{book.title}</h3>
          <p className="text-white/90 text-sm">{book.author}</p>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-amber-300 fill-amber-300" />
              <span className="text-sm font-medium text-white ml-1">{book.rating}</span>
            </div>
            <span className="mx-2 text-white/50">•</span>
            <DollarSign className="h-4 w-4 text-emerald-300" />
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
            Finance
          </Badge>
          <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600">
            Read Now
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const CategoryPill = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="flex-shrink-0"
  >
    <Button
      variant="outline"
      className={`h-auto py-4 px-5 rounded-2xl border-2 ${category.color} hover:shadow-lg transition-all duration-200 w-full`}
    >
      <div className="flex flex-col items-center space-y-2">
        <div className="text-orange-600 p-2 rounded-lg bg-white/50">
          {category.icon}
        </div>
        <span className="text-sm font-semibold text-gray-700">{category.name}</span>
      </div>
    </Button>
  </motion.div>
);

const Sidebar = () => (
  <motion.aside
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 border-r border-gray-100 bg-white/95 backdrop-blur-sm z-40"
  >
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-8">
        <div className="h-10 w-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">BookWorm</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={item.active ? "default" : "ghost"}
            className={`w-full justify-start h-12 rounded-xl ${item.active ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white' : 'hover:bg-orange-50'}`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
            {item.active && (
              <motion.div
                layoutId="activeTab"
                className="ml-auto h-2 w-2 bg-white rounded-full"
              />
            )}
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
        
        <div className="mt-6 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
          <div className="flex items-center space-x-3">
            <Trophy className="h-5 w-5 text-orange-500" />
            <div>
              <p className="text-sm font-medium text-gray-800">Reading Streak</p>
              <p className="text-xs text-gray-600">12 days in a row! 🔥</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-auto p-6 pt-8 border-t border-gray-100">
      <div className="flex items-center space-x-3 mb-6 p-3 rounded-xl bg-gray-50">
        <div className="h-10 w-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">JS</span>
        </div>
        <div className="flex-grow">
          <p className="text-sm font-medium text-gray-800">John Smith</p>
          <p className="text-xs text-gray-500">Premium Member</p>
        </div>
      </div>
      
      <Button variant="ghost" className="w-full justify-start text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-xl">
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
    className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 z-50"
  >
    <div className="flex justify-around items-center h-16 px-2">
      {navItems.map((item) => (
        <motion.button
          key={item.id}
          whileTap={{ scale: 0.95 }}
          className={`flex flex-col items-center justify-center space-y-1 p-2 flex-1 ${
            item.active ? 'text-orange-500' : 'text-gray-400'
          }`}
        >
          <motion.div
            className={`p-2 rounded-lg ${item.active ? 'bg-orange-50' : ''}`}
            whileHover={{ scale: 1.1 }}
          >
            {item.icon}
          </motion.div>
          <span className="text-xs font-medium">{item.label}</span>
          {item.active && (
            <motion.div
              layoutId="mobileActiveTab"
              className="h-1 w-6 bg-orange-500 rounded-full mt-1"
            />
          )}
        </motion.button>
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="lg:hidden fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50"
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
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
              <div className="p-6 h-full flex flex-col">
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
                
                <nav className="space-y-2 flex-grow">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={item.active ? "default" : "ghost"}
                      className={`w-full justify-start h-12 rounded-xl ${item.active ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white' : 'hover:bg-orange-50'}`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </Button>
                  ))}
                </nav>
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50">
                    <div className="h-10 w-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">JS</span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-gray-800">John Smith</p>
                      <p className="text-xs text-gray-500">Premium Member</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`pt-16 lg:pt-0 ${isDesktop ? 'lg:pl-64' : ''} pb-20 lg:pb-0`}>
        <div className="max-w-7xl mx-auto p-4 lg:p-8">
          {/* Desktop Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden lg:flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Welcome Back, John! 👋</h1>
              <p className="text-gray-500">Personalized recommendations just for you</p>
            </div>
            
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search books, authors, or topics..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
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
                <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50">
                  See all <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-gradient-to-r from-orange-50 to-amber-50">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      className="relative flex-shrink-0 w-32 h-40 md:w-40 md:h-52 overflow-hidden rounded-2xl shadow-lg"
                    >
                      <Image 
                        src={Imge1} 
                        alt="The 5AM Club"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </motion.div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">The 5AM Club</h3>
                          <p className="text-gray-600 mt-1">Own your morning, elevate your life</p>
                          <div className="flex items-center mt-2">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                              <span className="text-sm font-medium ml-1">4.5</span>
                            </div>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-sm text-gray-500">Robin Sharma</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="mt-2 md:mt-0 bg-orange-50 text-orange-600 border-orange-200">
                          <Clock className="h-3 w-3 mr-1" /> 45 min left
                        </Badge>
                      </div>
                      
                      <div className="mt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Reading Progress</span>
                          <span className="text-sm font-semibold text-orange-600">68%</span>
                        </div>
                        <Progress value={68} className="h-2" />
                      </div>
                      
                      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                        <p className="text-sm text-gray-500">Start your reading streak today</p>
                        <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg">
                          Continue Reading <ChevronRight className="h-4 w-4 ml-1" />
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
                  <h2 className="text-xl font-bold text-gray-800">Reading Challenges</h2>
                  <p className="text-gray-500">28-day reading challenge</p>
                </div>
                <Trophy className="h-6 w-6 text-orange-500" />
              </div>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    <div className="md:w-2/3">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mr-3">
                          <Trophy className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">Read 10 books this month</h3>
                          <p className="text-sm text-gray-600">Complete the challenge to earn badges</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-3 bg-white/50 rounded-xl">
                            <div className="text-2xl font-bold text-orange-600">4</div>
                            <div className="text-xs text-gray-600">Completed</div>
                          </div>
                          <div className="text-center p-3 bg-white/50 rounded-xl">
                            <div className="text-2xl font-bold text-gray-800">6</div>
                            <div className="text-xs text-gray-600">To Go</div>
                          </div>
                          <div className="text-center p-3 bg-white/50 rounded-xl">
                            <div className="text-2xl font-bold text-emerald-600">12</div>
                            <div className="text-xs text-gray-600">Days Left</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="h-32 w-32 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl font-bold">40%</span>
                      </div>
                      <div className="absolute inset-0 h-32 w-32 rounded-full border-8 border-white/30"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Collections Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Curated Collections</h2>
                <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50">
                  View all <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              
              <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide space-x-4">
                {collections.map((collection, index) => (
                  <CollectionCard key={collection.id} collection={collection} index={index} />
                ))}
              </div>
            </motion.section>

            {/* Visual Explainers Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Visual Explainers</h2>
                    <p className="text-gray-500">Learn with interactive content</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                  Explore all
                </Button>
              </div>
              
              <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide space-x-4">
                {visualExplainers.map((item, index) => (
                  <VisualExplainerCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </motion.section>

            {/* Today for You Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <TrendingUpIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Recommended for You</h2>
                    <p className="text-gray-500">Personalized recommendations</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  See more
                </Button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {mockBooks.map((book, index) => (
                  <BookCard key={book.id} book={book} index={index} />
                ))}
              </div>
            </motion.section>

            {/* Financial Wisdom Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Financial Wisdom</h2>
                    <p className="text-gray-500">Build wealth with knowledge</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                  View all
                </Button>
              </div>
              
              <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide space-x-4">
                {financeBooks.map((book, index) => (
                  <FinanceBookCard key={book.id} book={book} index={index} />
                ))}
              </div>
            </motion.section>

            {/* Categories Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Browse Categories</h2>
                <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50">
                  All categories <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
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
        className="fixed bottom-24 right-4 lg:hidden z-40"
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg hover:shadow-xl"
        >
          <BookOpen className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Add this CSS for better scrolling */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}