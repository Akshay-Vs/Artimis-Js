import cn from '@/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLProps, PropsWithChildren, forwardRef } from 'react';

const column = cva('flex flex-col', {
  variants: {
    align: {
      center: ['justify-center', 'items-center'],
      centerHorizontal: ['justify-center', 'items-start'],
      centerVertical: ['justify-start', 'items-center'],
      left: ['justify-start', 'items-start'],
      right: ['justify-end', 'items-start'],
      start: ['justify-start', 'items-start'],
      end: ['justify-end', 'items-end'],
      top: ['justify-start', 'items-center'],
      bottom: ['justify-end', 'items-center'],
      topLeft: ['justify-start', 'items-start'],
      topRight: ['justify-start', 'items-end'],
      bottomLeft: ['justify-end', 'items-start'],
      bottomRight: ['justify-end', 'items-end'],
    },
  },
});

type ColumnProps = PropsWithChildren<HTMLProps<HTMLDivElement>> &
  VariantProps<typeof column>;

const Column = forwardRef<HTMLDivElement, ColumnProps>(
  ({ children, className, align, ...rest }: ColumnProps, ref) => {
    return (
      <div ref={ref} className={cn(column({ align }), className)} {...rest}>
        {children}
      </div>
    );
  }
);

Column.displayName = 'Column';

export default Column;
