"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import './navbar-underline.css';
import '../app/logo-hover.css';
import { Menu, X, Globe, ChevronDown, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md" 
          : "bg-transparent"
      )}
    >
      <nav aria-label="Navegación principal" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="group flex items-center space-x-2 text-blue-700 dark:text-blue-400"
            >
              <Image src="/logo.png" alt="Logo" width={140} height={56} style={{objectFit: 'contain', maxHeight: 56}} className="h-14 logo-hover-anim" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-10 min-w-[600px] justify-between">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group relative px-3 py-2 text-sm font-medium rounded-md transition-colors overflow-hidden",
                    isScrolled
                      ? "text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-white"
                      : "text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="navbar-underline"></span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <a href="#contacto">
  <Button 
    className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 flex items-center gap-2"
  >
    <Mail className="w-5 h-5" />
    Solicitar Consulta
  </Button>
</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md",
                isScrolled 
                  ? "text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-white" 
                  : "text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white"
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg" aria-label="Menú móvil de navegación">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
  <Link
    key={item.name}
    href={item.href}
    className="group relative block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 overflow-hidden"
    onClick={() => setIsMenuOpen(false)}
  >
    <span className="relative z-10">{item.name}</span>
    <span className="navbar-underline"></span>
  </Link>
))}
            <div className="pt-4 pb-3">
              <a href="#contacto">
  <Button 
    className="w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 flex items-center gap-2"
  >
    <Mail className="w-5 h-5" />
    Solicitar Consulta
  </Button>
</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;