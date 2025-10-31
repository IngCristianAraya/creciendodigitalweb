"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';

const items = [
  {
    title: 'Barbería El Corte',
    description: 'Página con servicios, horario y WhatsApp.',
    href: '#',
  },
  {
    title: 'Menú Diario',
    description: 'Para restaurantes que muestran platos del día.',
    href: '#',
  },
  {
    title: 'Proforma Interactiva',
    description: 'Para freelancers que envían cotizaciones.',
    href: '#',
  },
];

export default function Examples() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="ejemplos" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-90 dark:opacity-40" style={{ maskImage: 'linear-gradient(180deg,white,rgba(255,255,255,0))' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">Ejemplos reales</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sitios que ya he creado</p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Demos con contexto real. ¿Quieres una igual para tu negocio? Te la hago en 3 días.
          </p>
        </div>

        <motion.div ref={ref} variants={container} initial="hidden" animate={controls} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ title, description, href }, i) => (
            <motion.div key={i} variants={item} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
              <div className="mt-6 flex gap-3">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400">Ver demo</Button>
                </a>
                <a href="https://wa.me/51906684284" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white">Quiero una igual</Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}