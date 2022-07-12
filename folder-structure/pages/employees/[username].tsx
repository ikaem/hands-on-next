// folder-structure\pages\employees\[username].tsx

import {
  Center,
  Box,
  Flex,
  useColorModeValue,
  Avatar,
  Button,
  Text,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import users from '../../data/users';
import Image from 'next/image';

const EmployeePage: NextPage = ({
  user,
}: {
  user: {
    cover_image: string;
    avatar: string;
    last_name: string;
    first_name: string;
    job_title: string;
    description: string;
  };
}) => {
  const { cover_image, avatar, last_name, first_name, job_title, description } =
    user;
  return (
    <Center marginTop={['0', '0', '8']} boxShadow='lg' minHeight='fit-content'>
      <Box>
        <Box position='relative'>
          <Image
            src={cover_image}
            width='250'
            height='250'
            objectFit='cover'
            alt=''
          />
          <Flex
            alignItems='flex-end'
            position='absolute'
            top='0'
            left='0'
            backgroundColor={useColorModeValue(
              'blackAlpha.400',
              'blackAlpha.600'
            )}
            width='100%'
            height='100%'
            padding='8'
            color='white'
          >
            <Avatar size='lg' src={avatar} />
            <Box marginLeft='6'>
              <Text as='h1' fontSize='xx-large' fontWeight='bold'>
                {first_name} {last_name}
              </Text>
              <Text as='p' fontSize='large' lineHeight='1.5'>
                {job_title}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          maxW='container.xl'
          margin='auto'
          padding='8'
          backgroundColor={useColorModeValue('white', 'gray.700')}
        >
          <Text as='p'>{description}</Text>
          <Link href='/' passHref>
            <Button marginTop='8' colorScheme='whatsapp' as='a'>
              Back to all users
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { username } = params;

  return {
    props: {
      user: users.find((u) => u.username === username),
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = users.map((u) => ({
    params: {
      username: u.username,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default EmployeePage;
