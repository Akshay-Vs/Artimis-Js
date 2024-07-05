import { VariantProps, cva } from 'class-variance-authority';
import cn from '@/utils/cn';
import { HTMLProps, PropsWithChildren, forwardRef } from 'react';

//#region CVA Properties

const card = cva('bg-slate-200 overflow-hidden relative', {
  variants: {
    height: {
      sm: ['min-h-[58vh]', 'max-h-[58vh]'],
      md: ['min-h-[70vh]', 'max-h-[70vh]'],
      lg: ['min-h-[82vh]', 'max-h-[82vh]'],
      fit: ['h-fit'],
      full: ['h-full'],
    },
    width: {
      sm: ['min-w-[30vw]', 'max-w-[30vw]'],
      md: ['min-w-[50vw]', 'max-w-[50vw]'],
      lg: ['min-w-[70vw]', 'max-w-[70vw]'],
      fit: ['w-fit'],
      full: ['w-full'],
    },
    radius: {
      sm: ['rounded-sm'],
      md: ['rounded-md'],
      xl: ['rounded-xl'],
      xxl: ['rounded-2xl'],
      xxxl: ['rounded-3xl'],
      full: ['rounded-full'],
    },
  },
  defaultVariants: {
    height: 'sm',
    width: 'sm',
    radius: 'md',
  },
});

//#endregion

//#region Types

type CommonProps = PropsWithChildren & HTMLProps<HTMLDivElement>;
type CardType = VariantProps<typeof card> & CommonProps;
type HeaderType = CommonProps;
type BackdropType = CommonProps;
type FooterType = CommonProps;

interface CardComponent
  extends React.ForwardRefExoticComponent<
    CardType & React.RefAttributes<HTMLDivElement>
  > {
  Header: React.ForwardRefExoticComponent<
    HeaderType & React.RefAttributes<HTMLDivElement>
  >;
  Backdrop: React.ForwardRefExoticComponent<
    BackdropType & React.RefAttributes<HTMLDivElement>
  >;
  Footer: React.ForwardRefExoticComponent<
    FooterType & React.RefAttributes<HTMLDivElement>
  >;
}

//#endregion

const Card = forwardRef<HTMLDivElement, CardType>(
  ({ children, radius, height, width, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card({ radius, height, width }), className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
) as CardComponent;

const Header = forwardRef<HTMLDivElement, HeaderType>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(['z-10 absolute top-8', className])}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

const Backdrop = forwardRef<HTMLDivElement, BackdropType>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('absolute top-0 z-[5]', className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

const Footer = forwardRef<HTMLDivElement, FooterType>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('bottom-8 z-10 absolute', className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Card.Header = Header;
Card.Backdrop = Backdrop;
Card.Footer = Footer;

Card.displayName = 'Card';
Card.Header.displayName = 'CardHeader';
Card.Footer.displayName = 'CardFooter';

export { Card };
export type { CardType, HeaderType, BackdropType, FooterType };
