"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative pt-20 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 sm:pt-24 sm:pb-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">
              <span className="block">Transformamos</span>{' '}
              <span className="block text-blue-700 dark:text-blue-400">
                ideas en realidad digital
              </span>
            </h1>
            <p className="mt-6 text-base text-gray-600 sm:text-lg md:text-xl lg:text-lg xl:text-xl dark:text-gray-300">
              Ayudamos a empresas y emprendedores a crecer en el mundo digital con soluciones personalizadas de diseño web, sistemas SaaS, marketing digital y asesoría especializada.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Button
                  className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Comenzar ahora
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
                >
                  Ver servicios
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? 1 : 0.9
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Equipo de trabajo digital"
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/30 to-transparent flex items-end">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Potencia tu negocio</h2>
                    <p className="text-white/90 text-sm">Con soluciones digitales profesionales</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;