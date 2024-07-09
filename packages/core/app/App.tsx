import { ArtimisCore } from '../src';
import { StyleType } from '../src/types';
import ChildComponent from './ChildComponent';

const App = () => {
  const dataProvider = { data: () => 'Hello World' };
  const styleProvider: StyleType = {
    theme: {
      dark: {
        primaryColor: '#fff',
        secondaryColor: '#000',
        accentColor: '#9ad3f',
      },
      light: {
        primaryColor: '#000',
        secondaryColor: '#fff',
        accentColor: '#9ad3f',
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
