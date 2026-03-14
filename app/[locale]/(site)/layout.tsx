import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../globals.css';
import { Analytics } from '@vercel/analytics/react';
import { generateMetadata as generateSEOMetadata } from './seo';
import { isValidLocale } from '../lib/i18n/i18n';
import { resolveLocale, type Locale } from '../lib/utils/resolveLocale';
import { getLocaleDictionary } from '../lib/i18n/i18n';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const locale = resolveLocale(params.locale);
  return generateSEOMetadata(locale);
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const locale = resolveLocale(params.locale);
  const dictionary = await getLocaleDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header locale={locale} dictionary={dictionary} />
          <main className="flex-1 pt-14 sm:pt-16">
            {children}
          </main>
          <Footer locale={locale} dictionary={dictionary} />
        </div>
        <Analytics />
      </body>
    </html>
  );
} 