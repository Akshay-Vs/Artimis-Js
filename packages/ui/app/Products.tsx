import CustomProductCard from './ProductCard';

const Products = () => {
  return (
    <div className="flex gap-4 overflow-x-scroll whitespace-nowrap">
      <CustomProductCard
        className="min-w-[50vw] max-w-[50vw]"
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
        category="women"
      />
      <CustomProductCard
        src="https://images.unsplash.com/photo-1527010154944-f2241763d806"
        category="Men"
      />

      <CustomProductCard
        src="https://images.unsplash.com/photo-1511852365831-4c1b2b2b1325"
        category="Kids"
      />
      <CustomProductCard
        src="https://images.unsplash.com/photo-1599309329365-0a9ed45a1da3"
        category="women"
      />
      <CustomProductCard
        src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc"
        category="women"
      />
      <CustomProductCard
        src="https://images.unsplash.com/photo-1603986153795-d142dbbe0ae0"
        category="women"
      />
    </div>
  );
};

export default Products;
