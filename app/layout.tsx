import './globals.css';
import './cursor.css';
import CustomCursor from '@/components/CustomCursor';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Creciendo Digital | Servicios Digitales Profesionales',
  description: 'Ofrecemos servicios de diseño web, sistemas SaaS, marketing digital y asesorías para ayudar a tu negocio a crecer en el mundo digital.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        <FloatingWhatsappButton />
      </body>
    </html>
  );
}