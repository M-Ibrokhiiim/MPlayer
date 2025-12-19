import { Container,Flex,Text } from "@chakra-ui/react";
import Favourite from "../../Icons/Favourite";
import Edit from "../../Icons/Edit";
import Delete from "../../Icons/Delete";

import background from '../../backgrounds/background2.jpg'
function Music(){
    return(
        <>
         <Container   h={{md:"40px"}} backdropFilter={'blur(100px)'}   _active={{transition:"all 0.15s ease", transform:"scale(0.95)",transitionDelay:"0.15s"}} cursor={'pointer'} mt={2} bgImage={background} bgPos={'top'} bgSize={'cover'}  overflow={'hidden'} rounded={'5px'} flexShrink={0} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                <Flex   ml={{md:"-4"}}  pl={'10px'} pr={'15px'} h={{md:"5vh"}} backdropFilter="blur(2px)" borderRadius={'0px'} alignItems={'center'} >
                  <Text mr={1}  ml={-1} fontWeight={'700'}  fontSize={{md:"20px"}}>1.</Text>
                  <Text fontSize={{md:"20px"}}  fontWeight={'700'}  >I got love aa aqdas...</Text>
                </Flex>
                
              <Flex   w={{md:"4.5vw"}} backdropFilter="blur(1px)"  mr={'-10px'} justifyContent={"space-between"}> 
                <Edit/>
                <Favourite/>
                <Delete/>
              </Flex>
             </Container>
        </>
    )
}

export default Music;