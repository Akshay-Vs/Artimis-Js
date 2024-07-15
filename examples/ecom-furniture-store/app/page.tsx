import {
  AboutUs,
  InteriorCollections,
  Hero,
  SmoothScroll,
  RoomCollections,
  Works,
} from '@/components/specific';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="pt-2 px-12 h-[1000vh] flex flex-col gap-12">
        <Hero />
        <InteriorCollections />
        <AboutUs />
        <RoomCollections />
        <Works />
      </main>
    </SmoothScroll>
  );
}
