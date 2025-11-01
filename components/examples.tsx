"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { useState, useEffect as useReactEffect } from 'react';

const items = [
  {
    title: 'Barbería El Corte',
    description: 'Página con servicios, horario y WhatsApp.',
    href: 'https://barberia-orpin.vercel.app/',
    image: '/barberia_portada.png',
  },
  {
    title: 'Menú Diario',
    description: 'Para restaurantes que muestran platos del día.',
    href: 'https://delifoods-gamma.vercel.app/',
    image: '/delifoods_portada.png',
  },
  {
    title: 'Proforma Interactiva',
    description: 'Para freelancers que envían cotizaciones.',
    href: 'https://proforma.tubarrio.pe/',
    image: '/proforma.png',
  },
  {
    title: 'Barbería El Corte',
    description: 'Página con servicios, horario y WhatsApp.',
    href: 'https://barberia-orpin.vercel.app/',
    image: '/barberia_portada.png',
  },
  {
    title: 'Barbería El Corte',
    description: 'Página con servicios, horario y WhatsApp.',
    href: 'https://barberia-orpin.vercel.app/',
    image: '/barberia_portada.png',
  },
  {
    title: 'Barbería El Corte',
    description: 'Página con servicios, horario y WhatsApp.',
    href: 'https://barberia-orpin.vercel.app/',
    image: '/barberia_portada.png',
  },
];

const galleryImages = [
  '/WhatsApp Image 2025-09-28 at 12.50.31 AM.jpeg',
  '/WhatsApp Image 2025-09-28 at 12.57.30 AM.jpeg',
  '/WhatsApp Image 2025-09-29 at 8.10.13 AM.jpeg',
  '/WhatsApp Image 2025-09-29 at 9.31.49 AM.jpeg',
  '/WhatsApp Image 2025-09-29 at 9.36.01 AM.jpeg',
  '/WhatsApp Image 2025-09-29 at 9.44.19 AM.jpeg',
  '/WhatsApp Image 2025-09-29 at 9.48.00 AM.jpeg',
];

export default function Examples() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [examplesApi, setExamplesApi] = useState<CarouselApi | null>(null);
  const [galleryApi, setGalleryApi] = useState<CarouselApi | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  // Autoplay para carrusel principal y galería, con pausa al hover
  useReactEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      if (examplesApi) {
        if (examplesApi.canScrollNext()) {
          examplesApi.scrollNext();
        } else {
          examplesApi.scrollTo(0);
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [examplesApi, paused]);

  useReactEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      if (galleryApi) {
        if (galleryApi.canScrollNext()) {
          galleryApi.scrollNext();
        } else {
          galleryApi.scrollTo(0);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryApi, paused]);

  return (
    <section id="ejemplos" className="py-24 relative overflow-hidden">
      {/* Fondo con gradiente y patrón cuadriculado con máscara */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-90 dark:opacity-40" style={{ maskImage: 'linear-gradient(180deg,white,rgba(255,255,255,0))' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">Ejemplos reales</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sitios que ya he creado</p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            ¿Quieres una igual para tu negocio? Te la preparo en 3 días.
          </p>
        </div>

        <motion.div ref={ref} variants={container} initial="hidden" animate={controls}>
          <Carousel
            opts={{ align: 'start', loop: false }}
            className="w-full"
            setApi={setExamplesApi}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {items.map(({ title, description, href, image }, i) => (
                <CarouselItem key={i} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <motion.div variants={item} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden shadow-sm">
                    <div className="relative h-44 w-full">
                      <Image
                        src={image}
                        alt={`Captura real: ${title}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
                      <div className="mt-6 flex gap-3">
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400">Ver demo</Button>
                        </a>
                        <a href="https://wa.me/51906684284?text=Quiero%20una%20web%20igual%20a%20la%20del%20ejemplo&utm_source=website&utm_medium=examples_cta&utm_campaign=landing_149" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-blue-700 hover:bg-blue-800 text-white">Quiero una igual</Button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </motion.div>

        {/* Galería de capturas reales */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Galería de proyectos</h3>
          <Carousel 
            opts={{ align: 'start', loop: false }} 
            className="w-full"
            setApi={setGalleryApi}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((src, idx) => (
                <CarouselItem key={idx} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src={src}
                      alt={`Proyecto real ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}