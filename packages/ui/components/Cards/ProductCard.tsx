import { VariantProps, cva } from 'class-variance-authority';
import cn from '@/utils/cn';
import { HTMLProps, PropsWithChildren } from 'react';

//#region CVA Properties
const productCard = cva('bg-slate-200 overflow-hidden relative', {
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
      lg: ['min-w-[70vw]', 'max-w-[30vw]'],
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
type ProductCardType = VariantProps<typeof productCard> &
  PropsWithChildren &
  HTMLProps<HTMLDivElement> & {};

type HeaderType = PropsWithChildren & HTMLProps<HTMLDivElement> & {};

type BackdropType = PropsWithChildren & HTMLProps<HTMLDivElement> & {};

type FooterType = PropsWithChildren & HTMLProps<HTMLDivElement> & {};
//#endregion

const ProductCard = ({ children, radius, height, width }: ProductCardType) => {
  return (
    <div className={cn(productCard({ radius, height, width }))}>{children}</div>
  );
};

const Header = ({ children, className }: HeaderType) => {
  return (
    <div className={cn(['flex-center z-10 absolute top-8', className])}>
      {children}
    </div>
  );
};

const Backdrop = ({ children, className }: BackdropType) => {
  return <div className={cn('absolute top-0', className)}>{children}</div>;
};

const Footer = ({ children, className }: FooterType) => {
  return (
    <div className={cn('bottom-8 z-10 absolute', className)}>{children}</div>
  );
};

ProductCard.Header = Header;
ProductCard.Backdrop = Backdrop;
ProductCard.Footer = Footer;

export { ProductCard };
