import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sparklelikezen.com'),
  title: 'Sparkle Like Zen | The Sparkle Experience',
  description: 'Private spiritual support, circles, events, and crystal experiences with Zen.',
  openGraph: {
    title: 'Sparkle Like Zen',
    description: 'A sacred space to reconnect with your own knowing.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sparkle Like Zen',
    description: 'A sacred space to reconnect with your own knowing.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
