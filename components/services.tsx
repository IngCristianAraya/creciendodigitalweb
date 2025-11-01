"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Sparkles, MessageSquare, ClipboardList, Rocket } from 'lucide-react';
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
    <section id="servicios" className="relative py-24 bg-white dark:bg-gray-900">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0,transparent_45%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-semibold tracking-wide uppercase">¿Qué incluye tu web?</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Kit Presencia Digital Express — 149 soles
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Todo lo esencial para tener presencia profesional en menos de 72 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Feature list */}
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-4"
          >
            {includes.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border border-blue-100/60 dark:border-blue-900/40 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-700 dark:text-blue-400 flex-shrink-0" />
                    <p className="text-gray-800 dark:text-gray-200">{item}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <div className="pt-2">
              <a href="https://wa.me/51901426737?text=Quiero%20mi%20web%20desde%20149%20soles&utm_source=website&utm_medium=services_section&utm_campaign=landing_149" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6">
                  Pídelo por WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Visual preview */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-blue-100/60 dark:ring-blue-900/40">
              <Image src="/barberia_portada.png" alt="Ejemplo real" width={1280} height={720} className="w-full h-auto" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-lg overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800">
                <Image src="/delifoods_portada.png" alt="Ejemplo restaurante" width={400} height={225} className="w-full h-auto" />
              </div>
              <div className="rounded-lg overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800">
                <Image src="/proforma.png" alt="Ejemplo proforma" width={400} height={225} className="w-full h-auto" />
              </div>
              <div className="rounded-lg overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800">
                <Image src="/logo.png" alt="Marca" width={400} height={225} className="w-full h-auto object-contain bg-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Proceso en 3 pasos */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wide uppercase">Proceso en 3 pasos</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-blue-100/60 dark:border-blue-900/40 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-700 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">1. Me escribes por WhatsApp</p>
                <p className="text-gray-700 dark:text-gray-300">Te pregunto lo básico y te confirmo el alcance.</p>
              </div>
            </div>
            <div className="rounded-xl border border-blue-100/60 dark:border-blue-900/40 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-blue-700 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">2. Envío requerimientos y pago</p>
                <p className="text-gray-700 dark:text-gray-300">Me pasas textos, fotos y realizas el pago inicial.</p>
              </div>
            </div>
            <div className="rounded-xl border border-blue-100/60 dark:border-blue-900/40 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-blue-700 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">3. Entrega en 72 horas</p>
                <p className="text-gray-700 dark:text-gray-300">Te muestro la web y ajustamos detalles finales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;