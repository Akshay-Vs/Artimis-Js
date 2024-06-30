import { Hero, NewArrivals } from '@/components/specific';

export default function Home() {
  return (
    <main className="min-h-[200vh] flex flex-col px-12 gap-16 mt-8">
      <Hero />
      <NewArrivals />
    </main>
  );
}
