import { Text } from '@artimisjs/ui';

const ProductPrice = ({ price }: { price?: number }) =>
  price ? <Text size="xl">€{price}</Text> : null;

export default ProductPrice;
