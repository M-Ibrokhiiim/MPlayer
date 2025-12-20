import {
  Text,
  Box,
  Flex
} from "@chakra-ui/react"

// SECTIONS
import Header from "./components/header/Header";  
import MAIN from "./components/main/MAIN";
import { useState } from "react";
import CONTROLLERS from "./components/controllers/CONTROLLERS";

function App() {
  const [isOpenedList,setList] = useState(false);
  const [isID,setID] = useState(1)


  return ( 
    <Flex w={'100%'} bg={'black'} h={'100vh'} textOverflow={'hidden'} justifyContent={'center'} >
       <Box border={'1px solid yellow'}  
        overflow={'hidden'}
        w={{base:"96vw", sm:isOpenedList ? "75%" :"70%",md:"47%",lg:"40vw", xl:"28vw","2xl":"24vw"}} 
        h={{base:isOpenedList ? '80%' :"80%", sm:isOpenedList ? "80vh" :"80vh",md:isOpenedList ? "90vh" :"75vh",lg:isOpenedList ? "90vh" :"68vw", xl: isOpenedList ? "90%" :"93%","2xl": isOpenedList ? "85%" : "85%"}} 
        mt={{base:"20vw",sm:"10vh",md:"15%", xl:isOpenedList ? "3.5vw" : "3%","2xl":"3%"}} 
        borderRadius={{base:"30px"}}
        p={"25px"}
        >
         <Header
          isOpenedList={isOpenedList}
          setList={setList}
          isID={isID}
          setID={setID}
         />
         {isOpenedList ? '' : <MAIN/>}
         <Box  w={'100%'} bg={'red.200'}  mt={{base:isOpenedList ? "14%" : "2%",lg:isOpenedList ? "21%" : "4%"}} mb={0} display={'flex'} justifyContent={'center'}>
            <Flex  flexDirection={'column'}  w={'50%'} color={'white'} justifyContent={'center'} alignItems={'center'}>
             <Text fontFamily={'cursive'} fontSize={{base:"28px",md:'30px'}} bg={'red.300'} textAlign={'center'} w={{base:"150%",md:'40vw'}} >Life is going on </Text>
             <Text fontFamily={'emoji'} fontSize={{base:"25px",md:'30px'}}>2Pac</Text>
            </Flex> 
         </Box>
         <CONTROLLERS
          isOpenedList={isOpenedList}
         />
       </Box>
      <Box>

      </Box>
    </Flex>
  );
}

export default App;
