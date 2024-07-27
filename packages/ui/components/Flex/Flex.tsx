import cn from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';

const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      col: 'flex-col',
    },
    align: {
      center: ['justify-center', 'items-center'],
      centerHorizontal: ['justify-center', 'items-start'],
      centerVertical: ['justify-start', 'items-center'],
      betweenHorizontal: ['justify-between', 'items-center'],
      aroundHorizontal: ['justify-around', 'items-center'],
      betweenVertical: ['justify-center', 'items-between'],
      aroundVertical: ['justify-center', 'items-around'],
      around: ['justify-around', 'items-around'],
      evenlyHorizontal: ['justify-evenly', 'items-center'],
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
      centerHorizontalAlt: ['justify-center', 'items-start'],
      centerVerticalAlt: ['justify-start', 'items-center'],
      leftAlt: ['justify-start', 'items-start'],
      rightAlt: ['justify-end', 'items-start'],
      topAlt: ['justify-start', 'items-center'],
      bottomAlt: ['justify-end', 'items-center'],
      topLeftAlt: ['justify-start', 'items-start'],
      topRightAlt: ['justify-start', 'items-end'],
      bottomLeftAlt: ['justify-end', 'items-start'],
      bottomRightAlt: ['justify-end', 'items-end'],
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'center',
  },
});

type FlexProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof flexVariants>;

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ align, direction, children, ...rest }: FlexProps, ref) => {
    return (
      <div
        ref={ref}
        className={cn(flexVariants({ align, direction }))}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export { Flex };
export type { FlexProps };
