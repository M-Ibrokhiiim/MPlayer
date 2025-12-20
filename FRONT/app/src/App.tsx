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
        w={{base:"96vw", sm:"70vw",md:"50vw",lg:"40vw", xl:"28vw","2xl":"24vw"}} 
        h={{base:isOpenedList ? '85vh' :"80vh", sm:isOpenedList ? "90vw" :"80vh",md:isOpenedList ? "95vw" :"75vh",lg:isOpenedList ? "90vh" :"68vw", xl: isOpenedList ? "90vh" :"85vh","2xl": isOpenedList ? "78vh" : "75vh"}} 
        mt={{base:"20vw",sm:"10vh",xl:isOpenedList ? "3.5vw" : "5vw","2xl":"6vw"}} 
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
         <Box bg={'white'} w={'100%'}  mt={{base:isOpenedList ? "14%" : "2%",lg:isOpenedList ? "15%" : "2%"}} mb={0} display={'flex'} justifyContent={'center'}>
            <Flex bg="red.100" flexDirection={'column'} w={'50%'} color={'white'} justifyContent={'center'} alignItems={'center'}>
             <Text fontFamily={'cursive'} fontSize={'25px'} >Life is going on </Text>
             <Text fontFamily={'emoji'} fontSize={'20px'}>2Pac</Text>
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
