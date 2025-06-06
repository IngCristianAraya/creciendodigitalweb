"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Creciendo Digital transformó por completo nuestra presencia online. Nuestro nuevo sitio web ha incrementado las conversiones en un 150% y el sistema personalizado ha optimizado nuestros procesos internos.",
    author: {
      name: "María Rodríguez",
      title: "CEO, Innovate Solutions",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    content: "El equipo de Creciendo Digital entendió perfectamente nuestras necesidades. Su enfoque estratégico en marketing digital nos ha permitido alcanzar nuevos mercados y aumentar nuestras ventas de manera significativa.",
    author: {
      name: "Carlos Méndez",
      title: "Director de Marketing, TechAdvance",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    content: "La asesoría estratégica de Creciendo Digital fue fundamental para nuestro crecimiento. Su visión y conocimiento del mercado digital nos permitió tomar decisiones acertadas en un momento crítico para nuestro negocio.",
    author: {
      name: "Ana Gómez",
      title: "Fundadora, EcoStyle",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  }
];

const Testimonials = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonios" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
  {/* Fondo cuadrillado y gradiente como en Hero */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90" />
    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-90 dark:opacity-40" style={{maskImage: 'linear-gradient(180deg,white,rgba(255,255,255,0))'}} />
  </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">
            Testimonios
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Lo que nuestros clientes dicen
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto dark:text-gray-400">
            Hemos ayudado a cientos de empresas a alcanzar sus objetivos digitales.
          </p>
        </div>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 md:p-10 border border-gray-100 dark:border-gray-700">
                      <div className="text-blue-700 dark:text-blue-400 mb-6">
                        <Quote className="h-10 w-10" />
                      </div>
                      <p className="text-xl italic text-gray-700 mb-8 dark:text-gray-300">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-4">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.author.image}
                              alt={testimonial.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.author.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{testimonial.author.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full ${
                    index === activeIndex 
                      ? 'bg-blue-700 dark:bg-blue-500' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-current={index === activeIndex ? 'true' : 'false'}
                  aria-label={`Testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;