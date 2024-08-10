import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement, ReactNode, forwardRef, useState } from 'react';
import Options from './Options';
import { VariantProps, cva } from 'class-variance-authority';
import cn from '@/utils/cn';
import { Button } from '../Button/Button';

const dropDown = cva(
  'border-[2px] p-3 px-[5px] h-12 flex-center flex-col transition-all duration-300 gap-4 font-[500] relative',
  {
    variants: {
      variant: {
        primary: ['text-[#595959]', 'bg-[#fafafa]', 'border-[#e5e7eb'],
        secondary: ['text-[#000]', 'bg-[#fff]', 'border-[#000]'],
        accent: ['bg-blue-500', 'text-white', 'border-blue-500'],
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
      variant: 'primary',
      size: 'xxl',
      radius: 'full',
    },
  }
);

type DropDownProps = VariantProps<typeof dropDown> & {
  className?: string;
  title: string;
  options?: Array<string>;
  children?: ReactNode | ReactElement | undefined;
};

const DropDown = forwardRef<HTMLDivElement, DropDownProps>(
  (
    {
      className,
      title,
      options,
      children,
      radius,
      variant,
      size,
    }: DropDownProps,
    ref
  ) => {
    const [selected, setSelected] = useState(title);
    const [showOptions, setShowOptions] = useState(false);

    return (
      <div
        ref={ref}
        className={cn(dropDown({ className, size, radius, variant }))}
      >
        <div className="flex-center-between pl-5 gap-4 w-full">
          {selected}
          <Button
            variant="default"
            size={size}
            buttonType="icon"
            onClick={() => setShowOptions((prev) => !prev)}
          >
            <FontAwesomeIcon icon={showOptions ? faChevronUp : faChevronDown} />
          </Button>
        </div>

        {showOptions ? (
          children ? (
            children
          ) : (
            <Options
              options={options || []}
              setSelected={setSelected}
              setShowOptions={setShowOptions}
              varient={variant}
            />
          )
        ) : null}
      </div>
    );
  }
);

DropDown.displayName = 'DropDown';

export { DropDown };
export type { DropDownProps };
