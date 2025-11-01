"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { ChevronRight, Clock, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const previews = [
    { src: '/delifoods_portada.png', label: 'Restaurante' },
    { src: '/barberia_portada.png', label: 'Barbería' },
    { src: '/proforma.png', label: 'Proforma' },
  ];
  const [activePreview, setActivePreview] = useState(previews[0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative pt-20 overflow-hidden">
      {/* Fondo con gradiente y patrón cuadriculado con máscara */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-24 z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            className="md:max-w-3xl md:mx-auto lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 dark:bg-gray-800/70 px-3 py-1 text-sm text-blue-700 dark:text-blue-400">
              <ShieldCheck className="h-4 w-4" /> Presencia Digital Express
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              ¿Tu negocio necesita más clientes?
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-blue-700 dark:text-blue-400 font-semibold">
              Tu página web lista en 3 días — desde S/ 149
            </p>
            <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-400">
              Sin complicaciones. Sin esperas. Solo resultados.
            </p>

            {/* CTAs directos */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/51901426737?text=Quiero%20mi%20web%20desde%20149%20soles&utm_source=website&utm_medium=hero_primary&utm_campaign=landing_149" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6 w-full sm:w-auto">
                  Quiero mi web ahora
                </Button>
              </a>
              
              {/* Modal: Qué incluye */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto">
                    Ver qué incluye
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Qué incluye el servicio</DialogTitle>
                    <DialogDescription>
                      Todo lo esencial para tener presencia profesional y convertir visitas en clientes.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Landing page o página informativa con header y sección hero.</li>
                      <li>Sección de imágenes o galería para mostrar tu trabajo/productos.</li>
                      <li>Formulario de contacto simple y claro.</li>
                      <li>Botón flotante de WhatsApp para contacto directo.</li>
                      <li>Enlaces a redes sociales (Instagram, Facebook, etc.).</li>
                      <li>Información de contacto, horarios y ubicación.</li>
                      <li>Dominio gratuito: tunegocio.tubarrio.pe</li>
                      <li>Optimización básica para móviles.</li>
                      <li>Entrega en máximo 3 días hábiles.</li>
                    </ul>
                  </div>
                  <DialogFooter>
                    <a href="https://wa.me/51901426737?text=Quiero%20mi%20web%20desde%20149%20soles&utm_source=website&utm_medium=hero_modal&utm_campaign=landing_149" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="bg-blue-700 hover:bg-blue-800 text-white w-full">
                        Solicitar por WhatsApp
                      </Button>
                    </a>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          {/* Vista previa interactiva */}
          <motion.div 
            className="mt-12 relative lg:mt-0 lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src={activePreview.src}
                    alt={`Ejemplo de ${activePreview.label}`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
              
              {/* Selector de previews */}
              <div className="mt-6 flex justify-center space-x-4">
                {previews.map((preview, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePreview(preview)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activePreview.src === preview.src
                        ? 'bg-blue-700 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {preview.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;