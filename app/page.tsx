import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/about';
import Testimonials from '@/components/testimonials';
import Process from '@/components/process';
import Contact from '@/components/contact';
import CTA from '@/components/cta';

export default function Home() {
  return (
    <>
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