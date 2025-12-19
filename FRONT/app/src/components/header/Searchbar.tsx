import { Box, Button, Input, Text } from "@chakra-ui/react";

import backgrounde2 from "../../backgrounds/buttonsBG.jpg"
import Search from "../../Icons/Search";

function Searchbar(){
      return(
        <>
            <Box w={'100%'} h={"4vh"} mt={2} position={'relative'}  backdropFilter={'blur(100px)'}  display={'flex'} alignItems={'center'}>
                <Box p={1} position={'absolute'} rounded={"130px"} w={"84%"}  zIndex={9} left={0} bgImage={backgrounde2}  display={'flex'} alignItems={'center'} justifyContent={'center'} bgPos={'top'}>
                    <Input  
                        type="text"
                        fontSize="21px"
                        fontFamily="serif"
                        fontWeight="700"
                        color="#e0f0f0ff"
                        bg="#0a1111ff"
                        border="2px solid black"
                        h="3vh"
                        w="100%"
                        rounded="100px"
                        placeholder="Search..."
                        _placeholder={{ fontSize: "20px", color: "#82d5d5ff" }}

                        _focus={{
                        outline: "none",
                        boxShadow: "none",
                        borderColor: "black",
                        }}
                        _focusVisible={{
                        outline: "none",
                        boxShadow: "none",
                        borderColor: "black",
                        }}
                        _active={{
                        outline: "none",
                        boxShadow: "none",
                        }}
                        _hover={{
                        boxShadow: "none",
                        }}
                    />
                </Box>
                <Text bg={"red"} position={'absolute'} left={"16vw"} w={'40px'} h={'7px'}  bgImg={backgrounde2} bgPos={'right'} />
                <Box bg={'red'}  bgImage={backgrounde2} ml={"-2px"} display={'flex'} justifyContent={'center'} _placeholder={{fontsize:"10px"}}  bgPos={'center'} transition="transform 0.15s ease"
              _active={{transform: "scale(0.8)",}}   alignItems={'center'} pos={'absolute'} overflow={'hidden'}  border={"7px double black"} w={'50px'} h={'50px'} rounded={'100px'} left={'17.5vw'} zIndex={2}>
                    <Button w={'130px'} h={'110px'} bgImage={backgrounde2} _hover={{opacity:1}}    transition="transform 0.15s ease"
              _active={{transform: "scale(0.8)",}}    bgPos={'center'}   rounded={"full"} > <Search/></Button>
                </Box>
            </Box>
        </>
      )
}

export default Searchbar;