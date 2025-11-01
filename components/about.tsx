"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="sobre-mi" aria-label="Sobre mí" className="py-28 relative overflow-hidden">
      {/* Fondo con gradiente y patrón cuadriculado con máscara */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-90 dark:opacity-40" style={{ maskImage: 'linear-gradient(180deg,white,rgba(255,255,255,0))' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            className="lg:col-span-1"
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl border border-blue-100 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur p-6 text-center">
              <div className="mx-auto h-28 w-28 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
                <Image src="/logo.png" alt="Cristian" width={112} height={112} className="h-full w-full object-contain" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Cristian</h3>
              <p className="text-gray-600 dark:text-gray-300">Desarrollador y emprendedor</p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-base font-semibold tracking-widest text-blue-700 uppercase dark:text-blue-400">Sobre mí</h2>
            <p className="mt-3 text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">Hola, soy Cristian 👋</p>
            <p className="mt-5 text-lg text-gray-700 dark:text-gray-300">
              Creo en la tecnología accesible para pequeños negocios reales, no solo para grandes empresas. Por eso creé Creciendo Digital: para ayudarte a tener presencia online sin complicaciones, sin precios altos y sin promesas vacías.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Si tu negocio hoy vive en WhatsApp, te ayudo a dar el siguiente paso con una página simple, clara y efectiva.
            </p>
            <div className="mt-8">
              <a href="https://www.instagram.com/creciendo.digital" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 font-medium">
                Síguenos en @creciendo.digital
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;