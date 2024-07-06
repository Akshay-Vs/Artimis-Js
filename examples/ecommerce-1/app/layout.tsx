import type { Metadata } from 'next';
import { Noto_Sans, Inria_Serif } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '@artimisjs/ui/style';
import './globals.scss';
import Artimis from './artimis';

const notoSans = Noto_Sans({ subsets: ['latin'] });
const inria_Serif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Vita.Chic',
  description: 'Live Elegently, Dress Chicly',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Artimis>{children}</Artimis>
      </body>
    </html>
  );
}
