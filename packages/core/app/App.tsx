import { ArtimisCore } from '../src';
import { StyleType } from '../src/types';
import ChildComponent from './ChildComponent';

const App = () => {
  const dataProvider = { data: () => 'Hello World' };
  const styleProvider: StyleType = {
    theme: {
      dark: {
        primary: '#fff',
        secondary: '#000',
        accent: '#fafafa',
      },
      light: {
        primary: '#000',
        secondary: '#fff',
        accent: '#9ad3f',
      },
    },
  };

  return (
    <ArtimisCore dataProvider={dataProvider} styleProvider={styleProvider}>
      <ChildComponent />
    </ArtimisCore>
  );
};

export default App;
