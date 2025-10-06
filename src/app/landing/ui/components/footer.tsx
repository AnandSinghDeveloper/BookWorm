import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gradient-to-br from-orange-900 to-amber-900 text-white mt-16 md:mt-24 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
           <Image src="/logo.svg" alt="Logo" width={24} height={24} />
            <span className="text-lg md:text-xl font-heading font-bold">Bookworm</span>
          </div>
          <p className="text-sm md:text-base text-orange-200">
            © 2025 ReadVerse. Made with ❤️ for book lovers.
          </p>
        </div>
      </footer>
  )
}

export default Footer
