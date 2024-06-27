import { DropDown } from '@/components/DropDown/DropDown';
import { Button, ProductCard } from '../components';
import Input from '@/components/Input/Input';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <main className="flex-center flex-col gap-4 mt-6">
      {/* <div className="flex-center gap-4">
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
      <DropDown
        title="select"
        radius="full"
        variant="accent"
        options={['Hello', 'World']}
      />
      <Input icon={faSearch} placeholder="Search..." /> */}

      <ProductCard radius="xxxl">
        <ProductCard.Header>Header</ProductCard.Header>
        <ProductCard.Backdrop></ProductCard.Backdrop>
        <ProductCard.Footer>Footer</ProductCard.Footer>
      </ProductCard>

      <ProductCard radius="xxxl" height="lg" width="full">
        <ProductCard.Header>Header</ProductCard.Header>
        <ProductCard.Backdrop></ProductCard.Backdrop>
        <ProductCard.Footer>Footer</ProductCard.Footer>
      </ProductCard>
    </main>
  );
}

export default App;
