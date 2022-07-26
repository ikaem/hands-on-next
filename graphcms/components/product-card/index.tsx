import Link from 'next/link';

interface ProductCardProps {
  slug: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ slug }) => {
  return <Link href={`/product/${slug}`}></Link>;
};
