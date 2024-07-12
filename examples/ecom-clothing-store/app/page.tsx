'use client';

import {
  Promo,
  Hero,
  NewArrivals,
  Offers,
  Categories,
  AboutUs,
} from '@/components/specific';

export default function Home() {
  return (
    <main className="min-h-[500vh] flex flex-col px-4 md:px-12 gap-20 mt-8">
      <Hero />
      <NewArrivals />
      <Promo />
      <Offers />
      <Categories />
      <AboutUs />
    </main>
  );
}
