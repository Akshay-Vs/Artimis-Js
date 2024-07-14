import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import './globals.scss';
import { Navbar } from '@/components/specific';
import '@artimisjs/ui/style';

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
      </body>
    </html>
  );
}
