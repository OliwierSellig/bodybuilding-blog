import type { Metadata } from 'next';
import '@/global/global.scss';
import { cityStreetwearTtf, cityStreetwearWoff, cityStreetwearWoff2, lato, plusJakartaSans } from '../src/global/fonts';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Bodybuilding Blog',
    template: '%s | Bodybuilding Blog',
  },
  description:
    'Twoje źródło ekspertowych porad, zaawansowanych technik i wskazówek żywieniowych dla średniozaawansowanych i zaawansowanych kulturystów. Podnieś swoje treningi na wyższy poziom i osiągnij maksymalną wydajność.',
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${plusJakartaSans.className} ${lato.variable} ${cityStreetwearTtf.variable} ${cityStreetwearWoff.variable} ${cityStreetwearWoff2.variable}`}
      >
        <Header />
        <main id='main'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
