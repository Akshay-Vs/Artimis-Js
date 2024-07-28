import { Text } from '@artimisjs/ui';

const ProductPrice = ({ price }: { price?: number }) =>
  price ? <Text size="1x">€{price}</Text> : null;

export default ProductPrice;
