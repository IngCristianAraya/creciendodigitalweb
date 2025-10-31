"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Code, 
  LineChart, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const includes = [
  '1 página móvil con tu nombre, descripción y foto',
  'Botón flotante de WhatsApp (el cliente te escribe al instante!)',
  'Enlaces a Instagram, Facebook o menú digital',
  'Horario de atención y ubicación (si aplica)',
  'Dominio gratuito: tunegocio.tubarrio.pe',
  'Entrega en 3 días hábiles',
  'Sin formularios: solo hablamos por WhatsApp',
];

const Services = () => {
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="incluye" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">
            ¿Qué incluye tu web?
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Kit Presencia Digital Express — 149 soles
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {includes.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border border-gray-200 dark:border-gray-800 shadow-sm">
                <CardContent className="p-6">
                  <p className="text-gray-800 dark:text-gray-200">{item}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a href="https://wa.me/51906684284" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6">
              Pídelo por WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;