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
import { Flex } from '@artimisjs/ui';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="pt-2 flex flex-col gap-12">
        <Hero />
        <Flex align="center" className="flex flex-col px-4 lg:!px-12 gap-12">
          <InteriorCollections />
          <AboutUs />
          <RoomCollections />
          <Works />
          <Categories />
          <BoughtTogether />
          <ProductsGrid />
        </Flex>
      </main>
    </SmoothScroll>
  );
}
