"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
  {
    q: '¿Desde cuánto cuesta? ¿Qué incluye el “Desde S/ 149”?',
    a: 'El gancho “Desde S/ 149” aplica a una landing page informativa simple con secciones esenciales (hero, servicios, contacto/WhatsApp) y publicación en Vercel. Si necesitas más secciones, animaciones o integraciones, cotizamos como “Profesional” o “Premium”.'
  },
  {
    q: '¿En cuánto tiempo la entregas?',
    a: 'En 72 horas hábiles para versiones base. Si incluye más contenido o ajustes de diseño, coordinamos un cronograma corto para no perder el ritmo.'
  },
  {
    q: '¿Qué diferencia tu web frente a páginas baratas?',
    a: 'Velocidad, diseño a medida y mejor experiencia en móviles. No uso plantillas; optimizo para que cargue en menos de 2 segundos, con foco en WhatsApp y SEO básico.'
  },
  {
    q: '¿Necesito pagar hosting o mantenimiento mensual?',
    a: 'No para la landing informativa: se publica en Vercel y no requiere hosting mensual. El mantenimiento es opcional si luego quieres cambios frecuentes.'
  },
  {
    q: '¿Puedo editar texto e imágenes por mi cuenta?',
    a: 'Sí. Si quieres autogestión, integro un panel (CMS) para editar contenido sin depender de mí. Se cotiza como “Con CMS”.'
  },
  {
    q: '¿Incluye dominio?',
    a: 'Incluye dominio .tubarrio.pe para la opción base. También puedo gestionar .com o .pe como adicional.'
  }
];

export default function FAQs() {
  return (
    <section id="faqs" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-base font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">Preguntas frecuentes</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">Resolvemos tus dudas más comunes</p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}