import type React from 'react';
import type { Metadata } from 'next/types';
import { Inter, VT323 } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
});

export const metadata: Metadata = {
  title: 'VixDex - Implied Volatility Trading Protocol',
  description:
    'A groundbreaking implied volatility trading protocol designed to make volatility exposure accessible, intuitive, and decentralized.',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${vt323.variable}`}>
      <body className="font-sans bg-black text-gray-300">{children}</body>
    </html>
  );
}
