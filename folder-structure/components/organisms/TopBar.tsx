import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// import { Box, Button, useColorMode } from '@chakra-ui/react';
import ThemeSwitch from './ThemeSwitch';

const TopBar: React.FC = () => {
  // const { colorMode, toggleColorMode } = useColorMode();

  // const ColorModeIcon = colorMode === 'dark' ? MoonIcon : SunIcon;

  return (
    // tailwindo stuff

    <div className='w-full p-2 bg-green-500'>
      <div className='w-10/12 m-auto'>
        <ThemeSwitch />
      </div>
    </div>

    // TODO chakra stuff
    // <Box width={'100%'} padding='1' backgroundColor={'whatsapp.500'}>
    //   <Box maxWidth={'container.xl'} margin='auto'>
    //     <Button
    //       aria-label='UI Theme'
    //       leftIcon={<ColorModeIcon />}
    //       onClick={toggleColorMode}
    //       size='xs'
    //       marginRight={'2'}
    //       borderRadius='sm'
    //     >
    //       Toggle Theme
    //     </Button>
    //   </Box>
    // </Box>
  );
};

export default TopBar;
