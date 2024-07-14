import {
  AboutUs,
  Collections,
  Hero,
  SmoothScroll,
} from '@/components/specific';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="pt-2 px-12 h-[800vh] flex flex-col gap-12">
        <Hero />
        <Collections />
        <AboutUs />
        <Collections />
      </main>
    </SmoothScroll>
  );
}
