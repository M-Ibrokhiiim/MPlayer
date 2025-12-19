import {
  Text,
  Box,
  Flex
} from "@chakra-ui/react"
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [isOpenedList,setList] = useState(false);
  const [isID,setID] = useState(1)


  return ( 
    <Flex w={'100%'} bg={'black'} h={'100vh'} textOverflow={'hidden'} justifyContent={'center'} >
       <Box border={'1px solid yellow'}  
        overflow={'hidden'}
        w={{base:"96vw", sm:"70vw",md:"50vw",lg:"40vw", xl:"25vw","2xl":"24vw"}} 
        h={{base:isOpenedList ? '85vh' :"80vh", sm:isOpenedList ? "90vw" :"80vh",md:isOpenedList ? "95vw" :"75vh",lg:isOpenedList ? "85vh" :"68vw", xl: isOpenedList ? "75vh" :"70vh","2xl": isOpenedList ? "78vh" : "70vh"}} 
        mt={{base:"20vw",sm:"10vh",xl:"6vw","2xl":"6vw"}} 
        borderRadius={{base:"30px"}}
        p={"25px"}
        >
         <Header
          isOpenedList={isOpenedList}
          setList={setList}
          isID={isID}
          setID={setID}
         />
       </Box>

    </Flex>
  );
}

export default App;
