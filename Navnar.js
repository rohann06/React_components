// Using Chakra UI

// Imports

import {
    Heading,
    Flex,
    Spacer,
    ButtonGroup,
    Button,
    Grid,
    Center,
    Box,
  } from "@chakra-ui/react";
  import Link from "next/link";
  
  const NavBar = () => {
    return (
      <div>
        <nav>
          <Center
            bg="black"
            color="white"
            m={50}
            mb={5}
            mt={7}
            border="2px"
            p={3}
            borderRadius="50px"
          >
            <Heading
              ml={9}
              fontSize="2rem"
              bgGradient="linear(to-l, #63bbf0, #4de4eb)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Web3 Meetups
            </Heading>
  
            <Spacer />
  
            <Flex>
              <ButtonGroup>
                <Link href="/">
                  <Button
                  justifyContent='center'
                    bgGradient="linear(to-l, #63bbf0, #4de4eb)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                    color="white"
                    boxShadow="lg"
                    borderRadius="50px"
                    size="md"
                    m={2}
                  >
                    Home
                  </Button>
                </Link>
                <Spacer />
  
                <Link href="/add-meetups">
                  <Button
                  justifyContent='center'
                    bgGradient="linear(to-l, #63bbf0, #4de4eb)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                    color="white"
                    boxShadow="lg"
                    borderRadius="50px"
                    size="md"
                    m={2}
                  >
                    Add meetups
                  </Button>
                </Link>
                <Spacer />
  
                <Link href="/fav-meetups">
                  <Button
                  justifyContent='center'
                    bgGradient="linear(to-l, #63bbf0, #4de4eb)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                    color="white"
                    boxShadow="lg"
                    borderRadius="50px"
                    size="md"
                    m={2}
                  >
                    Favourite
                  </Button>
                </Link>
                <Spacer />
              </ButtonGroup>
            </Flex>
            <Box ml="30px"></Box>
          </Center>
        </nav>
      </div>
    );
  };
  
  export default NavBar;
  