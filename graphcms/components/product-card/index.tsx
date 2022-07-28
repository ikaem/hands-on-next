import { Box, Divider, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ProductImage } from '../../pages';

interface ProductCardProps {
  id: string;
  images: ProductImage[];
  name: string;
  price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  images,
  name,
  price,
}) => {
  return (
    <Link href={`/product/${id}`} passHref>
      <Box
        as='a'
        border='1px'
        borderColor='gray.200'
        px='10'
        py='5'
        rounded='lg'
        boxShadow='lg'
        bgColor='white'
        transition='ease 0.2s'
        _hover={{
          boxShadow: 'xl',
          transform: 'scale(1.02)',
        }}
      >
        <Image src={images[0]?.url} alt={name} />
        <Divider my='3' />
        <Box>
          <Text fontWeight='bold' textColor='purple' fontSize='lg'>
            {name}
          </Text>
          <Text textColor='gray.700'>€{price / 100}</Text>
        </Box>
      </Box>
    </Link>
  );
};
