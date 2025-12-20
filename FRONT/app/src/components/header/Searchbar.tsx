import { Box, Button, Input, Text } from "@chakra-ui/react";

import backgrounde2 from "../../backgrounds/buttonsBG.jpg"
import Search from "../../Icons/Search";

function Searchbar(){
      return(
        <>
            <Box w={'100%'}   h={"4vh"} mt={{base:"19px",md:5,lg:4}} mb={-1} position={'relative'}  backdropFilter={'blur(100px)'}  display={'flex'} alignItems={'center'}>
                <Box p={'3px'} position={'absolute'} rounded={"130px"} w={{base:"86%",lg:"85%"}}  zIndex={9} left={0} bgImage={backgrounde2}  display={'flex'} alignItems={'center'} justifyContent={'center'} bgPos={'top'}>
                    <Input  
                        type="text"
                        fontSize={{base:"18","xl":"18.5px"}}
                        fontFamily="serif"
                        fontWeight="700"
                        color="#e0f0f0ff"
                        bg="BLACK"
                        border="2px solid black"
                        h={{base:"3vh",xl:"3.4vh","2xl":"4vh"}}
                        w="100%"
                        rounded="100px"
                        placeholder="Search..."
                        _placeholder={{ fontSize: "17px", color: "#82d5d5ff" }}

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
                {/* <Text bg={"red"}   position={'absolute'}    left={{base:"60vw",sm:"40vw",md:"33vw",lg:"26vw",xl:"16vw","2xl":"16vw"}}   w={{base:"40px","2xl":'70px'}} h={'5px'}  bgImg={backgrounde2} bgPos={'right'} /> */}
                <Box bg={'red'}     bgImage={backgrounde2}  display={'flex'} justifyContent={'center'} _placeholder={{fontsize:"10px"}}  bgPos={'center'} transition="transform 0.15s ease"
              _active={{transform: "scale(0.8)",}}   alignItems={'center'} pos={'absolute'} overflow={'hidden'}  border={"7px double black"} w={{base:"40px",sm:"38px",md:"40px",lg:'47px',xl:"45px","2xl":"55px"}} h={{base:"40px",sm:"38px",md:"40px",lg:'47px',xl:"45px","2xl":"55px"}} rounded={'100px'} left={{base:"86%",sm:"89%",md:"88%",lg:'28vw',xl:"85.5%", "2xl":"87%"}} zIndex={2}>
                    <Button w={'130px'} h={'110px'} bgImage={backgrounde2} _hover={{opacity:1}}    transition="transform 0.15s ease"
              _active={{transform: "scale(0.8)",}}    bgPos={'center'}   rounded={"full"} > <Search/></Button>
                </Box>
            </Box>
        </>
      )
}

export default Searchbar;