// Using ChakraUi

import { Grid, Text,Box, Image, Button, Center } from "@chakra-ui/react";


const NftCards = (props) => {
    return ( 
        <Grid ml={10} templateColumns='repeat(3, 1fr)' gap={4}>
            <Box w="500px" mb={55} rounded='20px' overflow='hidden' boxShadow='md' bg='gray.100' _hover={{ boxShadow: 'lg' }} >
            <Image src= {props.img} alt="nft" />

            <Box p={3}>
                
            <Text  bgGradient="linear(to-l, #4de4eb, #63bbf0)" bgClip="text" fontWeight="extrabold" fontSize='25px' my={1}>{props.heading}</Text>
            <Text fontWeight="extrabold">{props.date}</Text>

            <Text isTruncated color='gray.400'> {props.address}</Text>
            
            <Center>
                <Button mt={7}  bgGradient="linear(to-l, #4de4eb, #63bbf0)"  _hover={{
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }} borderRadius='full' color='white' size='lg'>
                favourite
                </Button>
            </Center>
            </Box>
            </Box>
      </Grid>
     );
}
 
export default NftCards;