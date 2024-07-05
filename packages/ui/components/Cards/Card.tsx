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
type CardProps = VariantProps<typeof card> & CommonProps;
type HeaderProps = CommonProps;
type BackdropProps = CommonProps;
type FooterProps = CommonProps;

interface CardComponent
  extends React.ForwardRefExoticComponent<
    CardProps & React.RefAttributes<HTMLDivElement>
  > {
  Header: React.ForwardRefExoticComponent<
    HeaderProps & React.RefAttributes<HTMLDivElement>
  >;
  Backdrop: React.ForwardRefExoticComponent<
    BackdropProps & React.RefAttributes<HTMLDivElement>
  >;
  Footer: React.ForwardRefExoticComponent<
    FooterProps & React.RefAttributes<HTMLDivElement>
  >;
}

//#endregion

const Card = forwardRef<HTMLDivElement, CardProps>(
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

const Header = forwardRef<HTMLDivElement, HeaderProps>(
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

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
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

const Footer = forwardRef<HTMLDivElement, FooterProps>(
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
export type { CardProps, HeaderProps, BackdropProps, FooterProps };
