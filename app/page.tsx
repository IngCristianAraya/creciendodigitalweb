import Hero from '@/components/hero';
import Services from '@/components/services';
import Examples from '@/components/examples';
import About from '@/components/about';
import Contact from '@/components/contact';
import CTA from '@/components/cta';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Presencia Digital Express — Creciendo Digital</title>
        <meta name="description" content="¿Tu negocio solo está en WhatsApp? Dale presencia profesional con una página simple, rápida y económica. Listo en 72 horas — desde 149 soles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <Services />
      <Examples />
      <About />
      <CTA />
      <Contact />
    </>
  );
}