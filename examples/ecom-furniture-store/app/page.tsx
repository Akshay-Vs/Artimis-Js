import {
  AboutUs,
  InteriorCollections,
  Hero,
  SmoothScroll,
  RoomCollections,
  Works,
  BoughtTogether,
  Categories,
  ProductsGrid,
} from '@/components/specific';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="pt-2 px-12 flex flex-col gap-12">
        <Hero />
        <InteriorCollections />
        <AboutUs />
        <RoomCollections />
        <Works />
        <Categories />
        <BoughtTogether />
        <ProductsGrid />
      </main>
    </SmoothScroll>
  );
}
