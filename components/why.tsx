"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Palette, Search, Handshake } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Velocidad que convierte',
    desc: 'Cargas rápidas en móviles para que no se pierdan clientes. Menos de 2 segundos en páginas base.'
  },
  {
    icon: Palette,
    title: 'Diseño a medida',
    desc: 'Nada de plantillas genéricas. Tu web se siente propia y profesional, enfocada en WhatsApp y acción.'
  },
  {
    icon: Search,
    title: 'SEO amigable',
    desc: 'Buenas prácticas desde el inicio para que te encuentren. Titulares claros, estructura simple y contenido útil.'
  },
  {
    icon: Handshake,
    title: 'Soporte cercano',
    desc: 'Te acompaño en el proceso con mensajes claros, entregas rápidas y mejoras puntuales cuando las necesites.'
  },
];

export default function Why() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="por-que" aria-label="Por qué elegirnos" className="relative py-20">
      <div className="absolute inset-0 opacity-[0.035]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Por qué elegirnos</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Beneficios claros para vender más sin tecnicismos innecesarios.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((r, i) => (
            <Card key={i} className="group border border-blue-100/60 dark:border-blue-900/40 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <r.icon className="w-9 h-9 text-blue-700 dark:text-blue-400" />
                  <CardTitle className="text-xl">{r.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{r.desc}</p>
                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent dark:via-blue-900/40" />
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Resultados visibles desde el primer día.</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}