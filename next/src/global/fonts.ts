import { Plus_Jakarta_Sans, Lato } from 'next/font/google';
import localFont from 'next/font/local';

export const cityStreetwearTtf = localFont({
  src: '../../public/fonts/city-streetwaer.ttf',
  weight: '400',
  variable: '--font-city-streetwearTtf',
});

export const cityStreetwearWoff = localFont({
  src: '../../public/fonts/city-streetwaer.woff',
  weight: '400',
  variable: '--font-city-streetwearWoff',
});

export const cityStreetwearWoff2 = localFont({
  src: '../../public/fonts/city-streetwaer.woff2',
  weight: '400',
  variable: '--font-city-streetwearWoff2',
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
});

export const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});
