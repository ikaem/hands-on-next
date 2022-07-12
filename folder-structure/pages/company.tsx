import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import UserCard from '../components/organisms/UserCard';
import users from '../data/users';

const Company: NextPage = () => {
  return (
    <Box>
      <Text
        fontSize={'xxx-large'}
        fontWeight='extrabold'
        textAlign={'center'}
        marginTop='9'
      >
        Employee Stuff
      </Text>

      <Grid
        gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gridGap='10'
      >
        {users.map((user) => {
          return (
            <GridItem key={user.id}>
              <UserCard {...user} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Company;
