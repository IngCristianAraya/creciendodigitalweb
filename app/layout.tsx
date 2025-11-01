import './globals.css';
import './cursor.css';
import CustomCursor from '@/components/CustomCursor';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './skip-link.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Presencia Digital Express — Creciendo Digital',
  description: '¿Tu negocio solo está en WhatsApp? Dale presencia profesional con una página simple, rápida y económica. Listo en 72 horas — desde 149 soles.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* SEO básico y Social Media global (puedes sobrescribir en cada página) */}
        <link rel="canonical" href="https://creciendodigital.pe/" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_PE" />
        <meta property="og:title" content="Presencia Digital Express — Creciendo Digital" />
        <meta property="og:description" content="¿Tu negocio solo está en WhatsApp? Página simple, rápida y económica. Listo en 72 horas — desde 149 soles." />
        <meta property="og:url" content="https://creciendodigital.pe/" />
        <meta property="og:site_name" content="Creciendo Digital" />
        <meta property="og:image" content="https://creciendodigital.pe/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Presencia Digital Express — Creciendo Digital" />
        <meta name="twitter:description" content="¿Tu negocio solo está en WhatsApp? Página simple, rápida y económica. Listo en 72 horas — desde 149 soles." />
        <meta name="twitter:image" content="https://creciendodigital.pe/og-image.jpg" />
        <meta name="twitter:site" content="@creciendodigital" />
        {/* Puedes personalizar estas etiquetas dinámicamente en cada página usando el componente Head de Next.js */}
      </head>
      <body className={inter.className}>
        {/* Google Analytics (GA4): reemplaza NEXT_PUBLIC_GA_ID en .env.local con tu ID real */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Skip link accesible para navegación por teclado */}
        <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        {/* Botón flotante removido para dejar solo CTA en header y final */}
      </body>
    </html>
  );
}