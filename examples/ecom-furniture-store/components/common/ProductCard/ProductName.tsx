import { Text } from '@artimisjs/ui';

const ProductName = ({
  name,
  isHovered,
}: {
  name: string;
  isHovered: boolean;
}) => (
  <Text
    size="xl"
    className={`underline-offset-4 ${isHovered ? 'underline' : ''}`}
  >
    {name.toLocaleUpperCase()}
  </Text>
);

export default ProductName;
