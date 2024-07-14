import { Card } from '@artimisjs/ui';
import Image from 'next/image';

const ProductImage = ({
  src,
  name,
  height,
  width,
  isHovered,
}: {
  src: string;
  height: number;
  width: number;
  isHovered: boolean;
  name: string;
}) => (
  <Card.Backdrop className="h-full w-full">
    <Image
      src={src}
      alt={name}
      height={height}
      width={width}
      className={`h-full w-full object-cover object-center transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}
    />
  </Card.Backdrop>
);

export default ProductImage;
