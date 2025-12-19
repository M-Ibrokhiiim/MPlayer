import { Container,Flex,Text } from "@chakra-ui/react";
import Favourite from "../../Icons/Favourite";
import Edit from "../../Icons/Edit";
import Delete from "../../Icons/Delete";

import background from '../../backgrounds/background2.jpg'
function Music(){
    return(
        <>
         <Container   h={{base:"30px",md:"35px",lg:"38px"}} backdropFilter={'blur(100px)'}   _active={{transition:"all 0.15s ease", transform:"scale(0.95)",transitionDelay:"0.15s"}} cursor={'pointer'} mt={2} bgImage={background} bgPos={'top'} bgSize={'cover'}  overflow={'hidden'} rounded={'5px'} flexShrink={0} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                <Flex   ml={{md:"-4"}}  pl={'10px'} pr={'15px'} h={{md:"5vh"}} backdropFilter="blur(2px)" borderRadius={'0px'} alignItems={'center'} >
                  <Text mr={1}  ml={{base:-5,md:-1}} fontWeight={'700'}  fontSize={{base:"18px", md:"20px"}} fontFamily={'fantasy'}>1.</Text>
                  <Text fontSize={{base:"17px",md:"20px"}}  fontWeight={'700'}  fontFamily={'fantasy'}>I got love aa ...</Text>
                </Flex>
                
              <Flex   w={{base:"22vw", md:"11vw",xl:"5.8vw"}}  backdropFilter="blur(1px)"  mr={'-10px'} justifyContent={"space-between"}> 
                <Edit/>
                <Favourite/>
                <Delete/>
              </Flex>
             </Container>
        </>
    )
}

export default Music;