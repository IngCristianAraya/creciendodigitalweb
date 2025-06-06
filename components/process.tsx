"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  PenTool, 
  Code as CodeIcon, 
  Rocket 
} from 'lucide-react';

const Process = () => {
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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const steps = [
    {
      id: '01',
      name: 'Descubrimiento',
      description: 'Analizamos tus necesidades y objetivos para entender a fondo tu negocio y tu audiencia.',
      icon: Search,
    },
    {
      id: '02',
      name: 'Diseño',
      description: 'Creamos conceptos visuales y estratégicos alineados con tu marca y objetivos de negocio.',
      icon: PenTool,
    },
    {
      id: '03',
      name: 'Desarrollo',
      description: 'Construimos soluciones robustas y escalables utilizando las tecnologías más adecuadas.',
      icon: CodeIcon,
    },
    {
      id: '04',
      name: 'Lanzamiento',
      description: 'Implementamos la solución, realizamos pruebas exhaustivas y monitoreamos el rendimiento.',
      icon: Rocket,
    },
  ];

  return (
    <section id="proceso" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">
            Nuestro Proceso
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Metodología orientada a resultados
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto dark:text-gray-400">
            Un enfoque estructurado para transformar tus ideas en soluciones digitales exitosas.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-700 via-blue-500 to-blue-300 dark:from-blue-600 dark:via-blue-500 dark:to-blue-400"></div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id} 
                variants={itemVariants}
                className={`relative lg:flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}
              >
                <div className="lg:w-1/2 p-6 lg:p-8">
                  <div className={`flex ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className={`lg:max-w-md ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 hidden lg:flex">
                          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-700 text-white dark:bg-blue-600">
                            <step.icon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className={`${index % 2 === 0 ? 'lg:mr-4' : 'lg:ml-4'} flex lg:hidden items-center space-x-3`}>
                          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-700 text-white dark:bg-blue-600">
                            <step.icon className="h-6 w-6" />
                          </div>
                          <div className="text-2xl font-extrabold text-blue-700 dark:text-blue-400">{step.id}</div>
                        </div>
                        <div className="hidden lg:block text-2xl font-extrabold text-blue-700 dark:text-blue-400">{step.id}</div>
                      </div>
                      <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">{step.name}</h3>
                      <p className="mt-2 text-base text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline circle for desktop */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="h-4 w-4 rounded-full bg-blue-700 dark:bg-blue-400 ring-4 ring-white dark:ring-gray-900"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;