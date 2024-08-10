import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import cn from '@/utils/cn';
import { Button } from '../Button/Button';

const input = cva(
  'border-[1px] p-3 px-[5px] pl-5 h-12 rounded-full flex-center-between transition-all duration-300 gap-4 font-[500]',
  {
    variants: {
      variant: {
        primary: ['text-[#595959]', 'bg-[#fafafa]', 'border-[#e5e7eb]'],
        secondary: ['text-[#000]', 'bg-[#fff]', 'border-[#000]'],
        accent: ['text-white', 'bg-blue-500', 'border-blue-500'],
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

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input> & {
    icon?: IconProp;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, variant, size, radius, ...rest }: InputProps) => {
    return (
      <div className={cn(input({ variant, size, radius }))}>
        <input
          {...rest}
          className="border-none outline-none bg-transparent w-[80%]"
        />
        {icon && (
          <Button variant="default" size={size} buttonType="icon">
            <FontAwesomeIcon icon={icon} />
          </Button>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export type { InputProps };
