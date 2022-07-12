import {
  VStack,
  useColorModeValue,
  Center,
  Avatar,
  Box,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

const UserCard = ({
  username,
  avatar,
  first_name,
  last_name,
  job_title,
}: {
  username: string;
  avatar: string;
  first_name: string;
  last_name: string;
  job_title: string;
}) => {
  return (
    <Link href={`/employees/${username}`} passHref>
      <a>
        <VStack
          spacing={4}
          borderRadius='md'
          boxShadow={'xl'}
          padding='5'
          backgroundColor={useColorModeValue('gray.50', 'gray.700')}
        >
          <Center>
            <Avatar size='lg' src={avatar} />
          </Center>
          <Center>
            <Box textAlign={'center'}>
              <Text fontWeight={'bold'} fontSize='xl'>
                {first_name}
                {last_name}
              </Text>
              <Text fontSize={'xs'}>{job_title}</Text>
            </Box>
          </Center>
        </VStack>
      </a>
    </Link>
  );
};

export default UserCard;
