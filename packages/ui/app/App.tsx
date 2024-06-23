import { Button } from '../components';
function App() {
  return (
    <main className="flex-center flex-col min-h-[100vh] gap-4">
      <Button radius="full" size="xl">
        To be
      </Button>

      <div className="flex-center gap-4">
        <Button>Primary</Button>
        <Button varient="secondary">Secondary</Button>
        <Button varient="outlined">Outlined</Button>
        <Button varient="accent">Accent</Button>
      </div>

      <div className="flex-center gap-4">
        <Button size="sm">Primary</Button>
        <Button varient="secondary" size="md">
          Secondary
        </Button>
        <Button varient="outlined" size="xl">
          Outlined
        </Button>
        <Button varient="accent" size="xxl">
          Accent
        </Button>
      </div>

      <div className="flex-center gap-4">
        <Button size="sm" radius="sm">
          Primary
        </Button>
        <Button varient="secondary" size="md" radius="md">
          Secondary
        </Button>
        <Button varient="outlined" size="xl" radius="xl">
          Outlined
        </Button>
        <Button varient="accent" size="xxl" radius="xxl">
          Accent
        </Button>
        <Button varient="accent" size="xxl" radius="full">
          Full
        </Button>
      </div>
      <Button buttonType="icon">Full</Button>
    </main>
  );
}

export default App;
