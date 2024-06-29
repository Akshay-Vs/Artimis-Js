import React from 'react';
import { Text } from '@/components';
import { VariantProps, cva } from 'class-variance-authority';
import cn from '@/utils/cn';

const options_ = cva(
  'w-full min-h-16 absolute top-[100%] translate-y-2 origin-top rounded-3xl flex-center-start flex-col p-2 z-50',
  {
    variants: {
      varient: {
        primary: ['text-[#595959]', 'bg-[#fafafa]', 'border-[#e5e7eb'],
        secondary: ['text-[#000]', 'bg-[#fff]', 'border-[#000]'],
        accent: ['bg-blue-500', 'text-white', 'border-blue-500'],
      },
    },
    defaultVariants: {
      varient: 'primary',
    },
  }
);

type OptionsProps = VariantProps<typeof options_> & {
  options: Array<string>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
};

const Options = ({
  options,
  setSelected,
  setShowOptions,
  varient,
}: OptionsProps) => {
  return (
    <div className={cn(options_({ varient }))}>
      {options.map((option) => (
        <div
          key={option}
          className="w-full hover:backdrop-brightness-90 px-4 p-2 rounded-3xl"
          onClick={() => {
            setSelected(option);
            setShowOptions(false);
          }}
        >
          <Text>{option}</Text>
        </div>
      ))}
    </div>
  );
};

export default Options;
