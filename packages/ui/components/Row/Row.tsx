import cn from '@/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLProps, PropsWithChildren, forwardRef } from 'react';

const row = cva('flex', {
  variants: {
    align: {
      center: ['justify-center', 'items-center'],
      centerHorizontal: ['justify-start', 'items-center'],
      centerVertical: ['justify-center', 'items-start'],
      left: ['justify-start', 'items-center'],
      right: ['justify-end', 'items-center'],
      start: ['justify-start', 'items-start'],
      end: ['justify-end', 'items-end'],
      top: ['justify-center', 'items-start'],
      bottom: ['justify-center', 'items-end'],
      topLeft: ['justify-start', 'items-start'],
      topRight: ['justify-end', 'items-start'],
      bottomLeft: ['justify-start', 'items-end'],
      bottomRight: ['justify-end', 'items-end'],
    },
  },
});

type RowProps = PropsWithChildren<HTMLProps<HTMLDivElement>> &
  VariantProps<typeof row>;

const Row = forwardRef<HTMLDivElement, RowProps>(
  ({ children, className, align, ...rest }: RowProps, ref) => {
    return (
      <div ref={ref} className={cn(row({ align }), className)} {...rest}>
        {children}
      </div>
    );
  }
);

Row.displayName = 'Row';

export { Row };
export type { RowProps };
