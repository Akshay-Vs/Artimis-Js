'use client';
import { Button } from '@artimisjs/ui';
export default function Home() {
  return (
    <main className="flex-center flex-col min-h-[100vh] gap-4">
      <Button radius="full" size="xl">
        To be
      </Button>

      <div className="flex-center gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="accent">Accent</Button>
      </div>

      <div className="flex-center gap-4">
        <Button size="sm">Primary</Button>
        <Button variant="secondary" size="md">
          Secondary
        </Button>
        <Button variant="outlined" size="xl">
          Outlined
        </Button>
        <Button variant="accent" size="xxl">
          Accent
        </Button>
      </div>

      <div className="flex-center gap-4">
        <Button size="sm" radius="sm">
          Primary
        </Button>
        <Button variant="secondary" size="md" radius="md">
          Secondary
        </Button>
        <Button variant="outlined" size="xl" radius="xl">
          Outlined
        </Button>
        <Button variant="accent" size="xxl" radius="xxl">
          Accent
        </Button>
        <Button variant="accent" size="xxl" radius="full">
          Full
        </Button>
      </div>
      <Button buttonType="icon">Full</Button>
    </main>
  );
}
