import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/about';
import Testimonials from '@/components/testimonials';
import Process from '@/components/process';
import Contact from '@/components/contact';
import CTA from '@/components/cta';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Creciendo Digital | Soluciones Digitales para tu Negocio</title>
        <meta name="description" content="Transformamos ideas en soluciones digitales: diseño web, SaaS, marketing y asesoría para empresas y emprendedores." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}