import { DropDown } from '@/components/DropDown/DropDown';
import { Button, Input } from '../components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <main className="flex-center flex-col gap-4 mt-6 max-w-[100vw]">
      <div className="flex-center gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outlined</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex-center gap-4">
        <Button variant="default" size="sm">
          Primary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <Button variant="outline" size="sm">
          Outlined
        </Button>
        <Button variant="ghost" size="sm">
          Ghost
        </Button>
        <Button variant="destructive" size="sm">
          Destructive
        </Button>
        <Button variant="link" size="sm">
          Link
        </Button>
      </div>

      <Button buttonType="icon">I</Button>
      <DropDown
        title="select"
        radius="full"
        variant="accent"
        options={['Hello', 'World']}
      />
      <Input icon={faSearch} placeholder="Search..." />
    </main>
  );
}

export default App;
