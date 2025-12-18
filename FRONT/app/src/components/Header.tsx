import {
    Box,
    Link,
    Text,
    Flex,
    Button
} from "@chakra-ui/react"
// import Chevrone from "../Icons/Chevrone";
import Menu from "../Icons/Menu";
import Add from "../Icons/Add";
import { useState } from "react";

import buttonsBG from "../backgrounds/buttonsBG.jpg"
  


function Header(){

  const [isOpenedList,setList] = useState(true);
  const [isID,setID] = useState(1)

  

      return(
        <>
        <Box  mt={6}   display={"flex"} flexDir={"column"} gap={2}  >
           <Flex justifyContent = {"space-between"}>
             <Button  borderRadius={'full'}  
              boxShadow={"0 0 170px 9px white"}
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
              boxShadow={"0 0 170px 9px white"}
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
              boxShadow={"0 0 170px 9px white"}
              bgImage={`${buttonsBG}`} 
              bgPos={"center"} 
              _hover={{opacity:1}} 
              transition="transform 0.15s ease"
              _active={{transform: "scale(0.8)",}} 
              border={"2px solid black"}  
              w={{base:"50px","2xl":"57px"}} 
              h={{base:"50px", "2xl":"55px"}}
              onClick={()=>{setList(!isOpenedList)}}
              >
                 <Menu/>
              </Button>
           </Flex>
           {isOpenedList 
           ? <Flex  h={"20vh"} rounded={'20px'} bg={'#241816'} flexDir={'column'} border={"2px solid black"} boxShadow={"0 110px 600px -50px white"}>
              <Box as="nav" h={"3vh"} w={"100%"}  display={'flex'} justifyContent={"space-between"}>
                 <Button onClick={()=>{setID(1)}} _hover={{opacity:1}} _active={{opacity:1}}  padding={'none'} borderRadius={'none'}  border={isID ===1 ? '6px double black' : ''} borderBottom={'none'}  roundedTopLeft={'20px'} overflow={'hidden'} ml={isID=== 1 ? '-2px' :'none'} roundedTopRight={'20px'} w={'100%'} bgImage={buttonsBG} bgPos={"bottom"}>
                  <Link  w={'90vw'}    textDecoration="none" _active={{textDecoration:'none'}}  h={"100%"}   fontSize={"20px"}  display={'flex'} justifyContent={'center'} alignItems={'center'} >All</Link>
                 </Button>
                 <Button onClick={()=>{setID(2)}} _hover={{opacity:1}} _active={{opacity:1}}  padding={'none'} borderRadius={'none'}  border={isID === 2 ? '6px double black' : ''} borderBottom={'none'}  roundedTopLeft={ '20px'} overflow={'hidden'} roundedTopRight={'20px'} w={'100%'} mr={isID ===2 ? '-2px' :''} bgImage={buttonsBG} bgPos={"bottom"}>
                  <Link  w={'90vw'} textAlign={'center'} h={"100%"}  fontSize={"20px"}  display={'flex'} justifyContent={'center'} alignItems={'center'} >Favourited </Link>
                 </Button>
              </Box>
              <Text>a</Text>
           </Flex>
           :''
           }
        </Box>
        </>
      )
}

export default Header;