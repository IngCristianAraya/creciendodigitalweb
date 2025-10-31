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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            className="md:max-w-3xl md:mx-auto lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              ¿Tu negocio solo está en WhatsApp?
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Dale presencia profesional con una página web simple, rápida y económica.
            </p>
            <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Listo en 72 horas — desde 149 soles.
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400">
              Ideal para: restaurantes, peluquerías, delivery, tutores, tiendas, etc.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/51906684284" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6">
                  Escríbeme por WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="relative mt-12 lg:mt-0 lg:col-span-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <div className="rounded-2xl border border-blue-100 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur p-6">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Creciendo Digital" width={40} height={40} className="h-10 w-10 object-contain" />
                <p className="text-sm text-gray-700 dark:text-gray-300">Creciendo Digital — Presencia Digital Express</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>1 página móvil con tu nombre, descripción y foto</li>
                <li>Botón flotante de WhatsApp</li>
                <li>Enlaces a Instagram, Facebook o menú digital</li>
                <li>Horario y ubicación (si aplica)</li>
                <li>Dominio gratuito: tunegocio.tubarrio.pe</li>
                <li>Entrega en 3 días hábiles</li>
                <li>Sin formularios: solo hablamos por WhatsApp</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;