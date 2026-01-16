import { Geist, Geist_Mono } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import StoryblokProvider from '@/components/StoryblokProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Owlenspiegel',
  description: 'Owlenspiegel Records - Tolle Aufnahmen mit Till',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang='en'>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
