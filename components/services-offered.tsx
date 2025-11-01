"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, ShoppingCart, FileText, Edit3, LineChart, Layers, MapPin, Paintbrush, Type } from 'lucide-react';
import { useState } from 'react';

const offerings = [
  // Núcleo del proyecto primero
  {
    icon: Globe,
    title: 'Landing page — desde S/ 149',
    desc: 'Página informativa, rápida y clara para captar clientes. Ideal para WhatsApp.',
    badge: 'Express',
    waText: 'Hola, me interesa una Landing page desde S/ 149. ¿Podemos coordinar?',
  },
  {
    icon: Layers,
    title: 'Web completa',
    desc: 'Más secciones, más contenido y presencia sólida. Diseñada a medida para tu negocio.',
    badge: 'Popular',
    waText: 'Hola, quiero una Web completa para mi negocio. ¿Cuál es el siguiente paso?',
  },
  {
    icon: FileText,
    title: 'Landing con edición (CMS)',
    desc: 'Si quieres autogestión, agrego un panel simple para editar texto e imágenes.',
    waText: 'Hola, quiero Landing con edición (CMS). ¿Cómo sería el flujo?',
  },
  {
    icon: ShoppingCart,
    title: 'Tienda virtual',
    desc: 'Catálogo, carrito y contacto. Flujo simple para empezar a vender.',
    waText: 'Hola, me interesa una Tienda virtual sencilla para empezar a vender.',
  },
  {
    icon: LineChart,
    title: 'Optimización de velocidad y SEO',
    desc: 'Mejoro tiempos de carga y estructura para que te encuentren y no se vayan.',
    waText: 'Hola, quiero optimizar velocidad y SEO de mi sitio actual.',
  },
  {
    icon: Edit3,
    title: 'Mantenimiento y cambios',
    desc: 'Actualizaciones puntuales de contenido y mejoras visuales sin complicaciones.',
    waText: 'Hola, necesito mantenimiento y cambios puntuales en mi web.',
  },
  // Servicios complementarios
  {
    icon: MapPin,
    title: 'Ingreso ficha tecnica',
    desc: 'Optimizo y ordeno tu ficha para aparecer mejor y recibir más consultas.',
    waText: 'Hola, quiero ingresar y optimizar mi ficha técnica en TuBarrio.',
    externalLink: 'https://www.tubarrio.pe/',
    externalLabel: 'Ver en TuBarrio.pe',
  },
  {
    icon: Paintbrush,
    title: 'Branding básico',
    desc: 'Ajustes de colores, tipografías y estilo visual para que tu marca se sienta profesional.',
    waText: 'Hola, quiero Branding básico para ordenar la identidad visual.',
  },
  {
    icon: Type,
    title: 'Corrección de textos',
    desc: 'Mejoro claridad, ortografía y tono comercial para que tu mensaje pegue.',
    waText: 'Hola, quiero corrección de textos con enfoque comercial.',
  },
];

export default function ServicesOffered() {
  const [selectedTitle, setSelectedTitle] = useState<string>('Web completa');
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
    <section id="servicios-ofrecidos" aria-label="Servicios que brindo" className="relative py-20">
      <div className="absolute inset-0 opacity-[0.035]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0,transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Servicios que brindo</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Elige el punto de partida. Sin tecnicismos, con resultados.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Los precios varían según el alcance. Cotizo rápido por WhatsApp.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {offerings.map((o, i) => {
            const isSelected = o.title === selectedTitle;
            const CardInner = (
              <Card 
                role="button"
                tabIndex={0}
                onClick={() => setSelectedTitle(o.title)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedTitle(o.title); }}
                className={`cursor-pointer group border border-blue-100/60 dark:border-blue-900/40 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 ${isSelected ? 'shadow-md' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <o.icon className="w-8 h-8 text-blue-700 dark:text-blue-400" />
                      <CardTitle className="text-xl">{o.title}</CardTitle>
                    </div>
                    {o.badge && (
                      <Badge className="bg-blue-600 hover:bg-blue-700 text-white">{o.badge}</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{o.desc}</p>
                  {o.externalLink && (
                    <div className="mt-4">
                      <a href={o.externalLink} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">{o.externalLabel || 'Ver más'}</Button>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            );

            return isSelected ? (
              <div key={i} className="rounded-xl p-[2px] bg-gradient-to-r from-blue-500/50 via-cyan-400/50 to-indigo-500/50">
                {CardInner}
              </div>
            ) : (
              <div key={i}>{CardInner}</div>
            );
          })}
        </motion.div>

        <div className="mt-10 flex flex-col items-center gap-3">
          {(() => {
            const selected = offerings.find((o) => o.title === selectedTitle);
            const waText = selected?.waText || `Hola, me interesa el servicio: ${selectedTitle}`;
            const waUrl = `https://wa.me/51901426737?text=${encodeURIComponent(waText)}&utm_source=website&utm_medium=services_offered_cta&utm_campaign=landing_149&utm_content=${encodeURIComponent(selectedTitle)}`;
            return (
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6">
                  Consultar por WhatsApp — {selectedTitle}
                </Button>
              </a>
            );
          })()}
          {selectedTitle === 'Ingreso ficha tecnica' && (
            <a href="https://www.tubarrio.pe/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-6 py-5">
                Ver directorio TuBarrio.pe
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}