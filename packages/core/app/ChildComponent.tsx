import { useContext } from 'react';
import { StyleContext } from '../src/Contexts/StyleContext';

const ChildComponent = () => {
  const { style } = useContext(StyleContext);
  return <div>{style.theme?.dark.accent}</div>;
};

export default ChildComponent;
