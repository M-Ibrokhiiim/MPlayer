import {
    Box,
    Text,
    Flex,
    Button
} from "@chakra-ui/react"
import Chevrone from "../Icons/Chevrone";
import Menu from "../Icons/Menu";
import Add from "../Icons/Add";

import buttonsBG from "../backgrounds/buttonsBG.jpg"

function Header(){
      return(
        <>
        <Box bg={"white"} mt={6} >
           <Flex justifyContent={"space-between"}>
             <Button  borderRadius={'full'} 
              bgImage={`${buttonsBG}`} 
              bgPos={"center"} 
              _hover={{opacity:1}} 
              transition="transform 0.15s ease"
              _active={{transform: "scale(0.8)",}} 
              border={"2px solid black"}  
              w={{base:"50px","2xl":"57px"}} 
              h={{base:"50px", "2xl":"55px"}}>
                <Add/>
              </Button>
             {/* <Button  borderRadius={'full'} 
              bgImage={`${buttonsBG}`} 
              bgPos={"center"} 
              _hover={{opacity:1}} 
              transition="transform 0.15s ease"
              _active={{transform: "scale(0.8)",}} 
              border={"2px solid black"}  
              w={{base:"50px","2xl":"57px"}} 
              h={{base:"50px", "2xl":"55px"}}
              > 
                 <Chevrone/>
              </Button> */}
             <Button  borderRadius={'full'} 
              bgImage={`${buttonsBG}`} 
              bgPos={"center"} 
              _hover={{opacity:1}} 
              transition="transform 0.15s ease"
              _active={{transform: "scale(0.8)",}} 
              border={"2px solid black"}  
              w={{base:"50px","2xl":"57px"}} 
              h={{base:"50px", "2xl":"55px"}}>
                 <Menu/>
              </Button>
           </Flex>
        </Box>
        </>
      )
}

export default Header;