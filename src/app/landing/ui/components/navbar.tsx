
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";


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


  import React from 'react'
  
  const Navbar = () => {
    return (
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
    )
  }
  
  export default Navbar
  