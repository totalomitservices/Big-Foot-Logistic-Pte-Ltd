
import { Federo, Open_Sans } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-open-sans',
});

export const federo = Federo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-federo',
});
