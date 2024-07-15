import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import './globals.scss';
import { Footer, Navbar } from '@/components/specific';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@artimisjs/ui/style';

config.autoAddCss = false;

const ebGaramond = EB_Garamond({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Artimis JS Example',
  description: 'Artimis JS Example',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ebGaramond.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
