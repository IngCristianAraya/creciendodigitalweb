"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section aria-label="Llamado a la acción" className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-800 dark:to-blue-600"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600 opacity-20"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-blue-500 opacity-10 transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-blue-400 opacity-10 transform translate-y-1/2"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="py-12 md:py-16 px-6 md:px-12 bg-white/10 backdrop-blur-sm rounded-xl shadow-xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              ¿Listo para que más clientes te encuentren?
            </h2>
            <p className="mt-6 text-xl text-blue-100">
              Escríbeme por WhatsApp y en 24 horas ya tienes tu boceto.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="https://wa.me/51906684284" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6"
                  size="lg"
                >
                  Escríbeme ahora
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;