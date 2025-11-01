import Hero from '@/components/hero';
import Services from '@/components/services';
import Examples from '@/components/examples';
import ServicesOffered from '@/components/services-offered';
import CTA from '@/components/cta';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Presencia Digital Express — Creciendo Digital</title>
        <meta name="description" content="¿Tu negocio necesita más clientes? Tu página web lista en 3 días — desde S/ 149. Sin complicaciones. Sin esperas. Solo resultados." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  <Hero />
  <Services />
  <Examples />
  <ServicesOffered />
  <CTA />
    </>
  );
}