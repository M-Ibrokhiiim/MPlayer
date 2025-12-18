import {
    Box,
    Link,
    Text,
    Flex,
    Button
} from "@chakra-ui/react"
import Chevrone from "../Icons/Chevrone";
import Menu from "../Icons/Menu";
import Add from "../Icons/Add";
import { useState } from "react";

import buttonsBG from "../backgrounds/buttonsBG.jpg"

// TYPE CHECKING
interface Props{
      isOpenedList:boolean
      isID:number
      setID: React.Dispatch<React.SetStateAction<number>>
      setList: React.Dispatch<React.SetStateAction<boolean>>
}


function Header({isOpenedList,isID,setID,setList}:Props){
      return(
        <>
        <Box  mt={6}   display={"flex"} flexDir={"column"} gap={2}  >
           <Flex justifyContent = {"space-between"}>
            {!isOpenedList ?
              <Button borderRadius={'full'}  
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
              :""
             }
             
             { isOpenedList ? <Button onClick={()=>{setList(false)}}
              borderRadius={'full'} 
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
              </Button>
              :""
              }
              { !isOpenedList ?
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
              :''
              }
           </Flex>
           {isOpenedList 
           ? <Flex  h={"25vh"} p={1}  w={{base:"83vw",sm:"100%"}} rounded={'20px'} bg={'#241816'} flexDir={'column'}  boxShadow={"0 110px 600px -50px white"}>
              <Box as="nav" h={"3vh"} w={{base:"100%"}}  display={'flex'} justifyContent={"space-between"}>
                 <Button onClick={()=>{setID(1)}} _hover={{opacity:1}} _active={{opacity:1}}  padding={'none'} borderRadius={'none'}  border={isID ===1 ? '10px double black' : ''} borderBottom={'none'}  roundedTopLeft={'20px'} overflow={'hidden'} ml={isID=== 1 ? '-2px' :'none'} roundedTopRight={'20px'} w={'100%'} bgImage={buttonsBG} bgPos={"bottom"}>
                  <Link  w={'90vw'}    textDecoration="none" _active={{textDecoration:'none'}}  h={"100%"}   fontFamily={'fantasy'} fontSize={{base:"15px",md:"20px"}}  display={'flex'} justifyContent={'center'} alignItems={'center'} mt={3}>All</Link>
                 </Button>
                 <Button onClick={()=>{setID(2)}} _hover={{opacity:1}} _active={{opacity:1}}  padding={'none'} borderRadius={'none'}  border={isID === 2 ? '10px double black' : ''} borderBottom={'none'}  roundedTopLeft={ '20px'} overflow={'hidden'} roundedTopRight={'20px'} w={'100%'} mr={isID ===2 ? '-2px' :''} bgImage={buttonsBG} bgPos={"bottom"}>
                  <Link  w={'90vw'} textAlign={'center'} h={"100%"}  fontSize={{base:"15px",md:"20px"}}  fontFamily={'fantasy'} display={'flex'} justifyContent={'center'} alignItems={'center'} mt={1} ><span style={{fontFamily:"mono"}} >F</span> avourited </Link>
                 </Button>
              </Box>
              <Flex  w={'100%'} h={'90vh'} mt={'5px'} p={"5px"}  bgImage={buttonsBG}  borderRadius={'20px'} bgPos={'left'}   roundedTop={'none'}>
                <Box w="100vw" h={'full'} bg='black' borderBottomRadius={'20px'}>

                </Box>
              </Flex>
           </Flex>
           :''
           }
        </Box>
        </>
      )
}

export default Header;