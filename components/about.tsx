"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  Layout, 
  Handshake, 
  Rocket
} from 'lucide-react';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

const About = () => {
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
    <section id="nosotros" className="py-28 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Fondo cuadrillado y gradiente como en Hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-90 dark:opacity-40" style={{maskImage: 'linear-gradient(180deg,white,rgba(255,255,255,0))'}} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Imagen y logros */}
          <motion.div
            className="w-full lg:w-1/2 flex-shrink-0"
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-100 dark:border-gray-700">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Equipo de Creciendo Digital"
                width={600}
                height={500}
                className="object-cover h-[340px] w-full lg:h-[420px]"
                priority
              />
              {/* Card de logros sobre la imagen */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-md px-6 py-4 flex flex-col items-center border border-blue-100 dark:border-gray-700">
                  <span className="text-3xl font-bold text-blue-700 dark:text-blue-400">500+</span>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300 mt-1">Proyectos exitosos</span>
                </div>
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-md px-6 py-4 flex flex-col items-center border border-blue-100 dark:border-gray-700">
                  <span className="text-3xl font-bold text-blue-700 dark:text-blue-400">98%</span>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300 mt-1">Clientes satisfechos</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto principal */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <h2 className="inline-flex items-center gap-2 text-base font-semibold tracking-widest text-blue-700 uppercase dark:text-blue-400">
              🧩 Sobre Nosotros
            </h2>
            <p className="mt-3 text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Impulsamos el <span className="text-blue-700 dark:text-blue-400">crecimiento digital</span> de emprendedores y negocios reales
            </p>
            <p className="mt-5 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              En Creciendo Digital, ayudamos a emprendedores y pequeñas empresas a dar el salto al mundo digital con soluciones prácticas, accesibles y personalizadas.
              Sabemos lo desafiante que puede ser emprender, por eso creamos herramientas pensadas para ti: claras, efectivas y enfocadas en resultados reales.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Briefcase className="h-7 w-7 text-blue-700 dark:text-blue-400" />
                <span className="text-base font-medium text-gray-800 dark:text-gray-200">Experiencia real en negocios</span>
              </div>
              <div className="flex items-center gap-3">
                <Handshake className="h-7 w-7 text-blue-700 dark:text-blue-400" />
                <span className="text-base font-medium text-gray-800 dark:text-gray-200">Acompañamiento humano y cercano</span>
              </div>
              <div className="flex items-center gap-3">
                <Rocket className="h-7 w-7 text-blue-700 dark:text-blue-400" />
                <span className="text-base font-medium text-gray-800 dark:text-gray-200">Tecnología lista para escalar</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sección Por qué elegirnos */}
      <div className="mt-32 relative z-10">
        <h3 className="text-3xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-16 tracking-tight">
          <span className="inline-block align-middle mr-2">⭐</span>Por qué elegirnos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Experiencia práctica */}
          <Card className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-none shadow-xl rounded-3xl flex flex-col items-center p-8 hover:scale-105 transition-transform duration-400 group">
            <div className="flex flex-col items-center">
              <div className="bg-blue-700 dark:bg-blue-400 rounded-full p-5 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="h-12 w-12 text-white dark:text-blue-900" />
              </div>
              <CardTitle className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">Experiencia práctica</CardTitle>
              <div className="w-8 h-1 rounded-full bg-blue-700 dark:bg-blue-400 mb-4" />
              <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
                Más que promesas, ofrecemos soluciones construidas desde la experiencia real desarrollando sistemas para negocios como minimarkets, peluquerías, consultorios y más.
              </CardDescription>
            </div>
          </Card>
          {/* Desarrollo a medida */}
          <Card className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-none shadow-xl rounded-3xl flex flex-col items-center p-8 hover:scale-105 transition-transform duration-400 group">
            <div className="flex flex-col items-center">
              <div className="bg-blue-700 dark:bg-blue-400 rounded-full p-5 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layout className="h-12 w-12 text-white dark:text-blue-900" />
              </div>
              <CardTitle className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">Desarrollo a medida</CardTitle>
              <div className="w-8 h-1 rounded-full bg-blue-700 dark:bg-blue-400 mb-4" />
              <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
                No usamos soluciones genéricas. Creamos plataformas adaptadas al rubro y necesidad de cada cliente, con diseño limpio y funcional.
              </CardDescription>
            </div>
          </Card>
          {/* Enfoque humano y cercano */}
          <Card className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-none shadow-xl rounded-3xl flex flex-col items-center p-8 hover:scale-105 transition-transform duration-400 group">
            <div className="flex flex-col items-center">
              <div className="bg-blue-700 dark:bg-blue-400 rounded-full p-5 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Handshake className="h-12 w-12 text-white dark:text-blue-900" />
              </div>
              <CardTitle className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">Enfoque humano y cercano</CardTitle>
              <div className="w-8 h-1 rounded-full bg-blue-700 dark:bg-blue-400 mb-4" />
              <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
                Nos involucramos contigo. No eres un número, sino un aliado que queremos ver crecer.
              </CardDescription>
            </div>
          </Card>
          {/* Tecnología lista para escalar */}
          <Card className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-none shadow-xl rounded-3xl flex flex-col items-center p-8 hover:scale-105 transition-transform duration-400 group">
            <div className="flex flex-col items-center">
              <div className="bg-blue-700 dark:bg-blue-400 rounded-full p-5 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-12 w-12 text-white dark:text-blue-900" />
              </div>
              <CardTitle className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">Tecnología lista para escalar</CardTitle>
              <div className="w-8 h-1 rounded-full bg-blue-700 dark:bg-blue-400 mb-4" />
              <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
                Usamos herramientas modernas como React, Next.js y Node.js para que tu negocio esté preparado para lo que viene.
              </CardDescription>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;