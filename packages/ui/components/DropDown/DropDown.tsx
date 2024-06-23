import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement, ReactNode, forwardRef, useState } from 'react';
import Options from './Options';
import { VariantProps, cva } from 'class-variance-authority';
import cn from '@/utils/cn';

const dropDown = cva(
  'border-[2px] p-3 px-[5px] h-12 flex-center flex-col  transition-all duration-300 gap-4 font-[500] relative',
  {
    variants: {
      varient: {
        primary: ['text-[#595959]', 'bg-[#fafafa]', 'border-[#e5e7eb'],
        secondary: ['text-[#000]', 'bg-[#fff]', 'border-[#000]'],
        accent: [],
      },
      size: {
        sm: ['text-sm', 'h-8'],
        md: ['text-base', 'h-10'],
        xl: ['text-base', 'h-12'],
        xxl: ['text-base', 'h-14'],
      },
      radius: {
        sm: ['rounded-sm'],
        md: ['rounded-md'],
        xl: ['rounded-xl'],
        xxl: ['rounded-2xl'],
        full: ['rounded-full'],
      },
    },
    defaultVariants: {
      varient: 'primary',
      size: 'xxl',
      radius: 'full',
    },
  }
);

interface DropDownProps extends VariantProps<typeof dropDown> {
  className?: string;
  title: string;
  options?: Array<string>;
  children?: ReactNode | ReactElement | undefined;
}

const DropDown = forwardRef<HTMLDivElement, DropDownProps>(
  ({
    className,
    title,
    options,
    children,
    radius,
    varient,
    size,
  }: DropDownProps) => {
    const [selected, setSelected] = useState(title);
    const [showOptions, setShowOptions] = useState(false);

    return (
      <div className={cn(dropDown({ className, size, radius, varient }))}>
        <div className="flex-center-between pl-5 gap-4 w-full">
          {selected}
          <button
            className="h-9 w-9 rounded-full bg-[#ededed] flex-center hover:invert 
            transition-all duration-300"
            onClick={() => setShowOptions((prev) => !prev)}
          >
            <FontAwesomeIcon icon={showOptions ? faChevronUp : faChevronDown} />
          </button>
        </div>

        {showOptions ? (
          children ? (
            children
          ) : (
            <Options
              options={options || []}
              setSelected={setSelected}
              setShowOptions={setShowOptions}
              varient={varient}
            />
          )
        ) : null}
      </div>
    );
  }
);

export default DropDown;
