import {
  Text,
  Box,
  Flex
} from "@chakra-ui/react"
import Header from "./components/Header";
import { useState } from "react";

function App() {

  const [isOpenedList,setList] = useState(false)

  return ( 
    <Flex w={'100%'} bg={'black'} h={'100vh'} textOverflow={'hidden'} justifyContent={'center'}>
       <Box border={'2px solid yellow'} 
         
        w={{base:"96vw", sm:"70vw",md:"50vw",lg:"40vw", xl:"25vw","2xl":"24vw"}} 
        h={{base:"80vh", sm:"80vh",md:"75vh",xl:"60vh","2xl":"72vh"}} 
        mt={{base:"20vw",sm:"10vh",xl:"10vw","2xl":"6vw"}} 
        borderRadius={{base:"30px"}}
        p={"25px"}
        >
         <Header/>
       </Box>
    </Flex>
  );
}

export default App;
