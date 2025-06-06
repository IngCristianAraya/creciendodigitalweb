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

const services = [
  {
    title: "Diseño Web",
    description: "Sitios web modernos, responsivos y optimizados para SEO que convierten visitantes en clientes.",
    icon: Globe,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://creciendodigital.disenowebCD.com"
  },
  {
    title: "Sistemas SaaS",
    description: "Soluciones de software como servicio personalizadas para optimizar operaciones y escalar tu negocio.",
    icon: Code,
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://creciendodigital.saasCD.com"
  },
  {
    title: "Marketing Digital",
    description: "Estrategias de marketing digital que aumentan la visibilidad de tu marca y generan leads cualificados.",
    icon: LineChart,
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://creciendodigital.marketingCD.com"
  },
  {
    title: "Asesorías",
    description: "Consultoría especializada para transformar digitalmente tu negocio y maximizar tu presencia online.",
    icon: Briefcase,
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://creciendodigital.asesoriasCD.com"
  }
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
    <section id="servicios" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">
            Nuestros Servicios
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Soluciones digitales para hacer crecer tu negocio
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto dark:text-gray-400">
            Ofrecemos servicios integrales para impulsar tu presencia digital y transformar tu negocio.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-md dark:bg-gray-800">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-blue-700 p-2 rounded-full text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardHeader className="pt-6">
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 min-h-[80px]">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href={service.link} target="_blank" className="w-full">
                    <Button variant="outline" className="w-full flex items-center justify-between border-blue-700 text-blue-700 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-gray-800">
                      <span>Ver más</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;