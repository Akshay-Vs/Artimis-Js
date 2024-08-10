import { useEffect, useState } from 'react';
import { useScroll as y } from 'framer-motion';

const useScroll = () => {
  const { scrollY } = y();
  const [scrollRate, setScrollRate] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollRate(scrollY.get());
    };

    const unsubscribe = scrollY.onChange(handleScroll);

    return () => unsubscribe();
  }, [scrollY]);

  return { scrollRate, scrollY }
};

export default useScroll;
