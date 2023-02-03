import { StatusBar, Box, HStack, Text } from 'native-base';

const Header = () => (
    <>
        <StatusBar backgroundColor="#003f5f" barStyle="light-content" />
        <Box safeAreaTop backgroundColor='#003f5f'>
            <HStack bg='#003f5f' justifyContent='center' alignItems='center' px={1} py={3}>
                <Text color='#f5f5f5' fontSize='20' fontWeight='bold'>Movies appzzzz</Text>
            </HStack>
        </Box>
    </>
)

export default Header;