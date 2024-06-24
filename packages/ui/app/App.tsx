import { DropDown } from '@/components/DropDown/DropDown';
import { Button } from '../components';
import Input from '@/components/Input/Input';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <main className="flex-center flex-col gap-4 mt-6">
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
      <DropDown
        title="select"
        radius="full"
        varient="accent"
        options={['Hello', 'World']}
      />
      <Input icon={faSearch} placeholder="Search..." />
    </main>
  );
}

export default App;
