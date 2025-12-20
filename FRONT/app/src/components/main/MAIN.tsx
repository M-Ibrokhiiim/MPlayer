import { Box,Image,Text } from "@chakra-ui/react"
import { keyframes } from "@emotion/react";

import MusicPIC from "../../backgrounds/ThemePic4.jpg"
import Tonearm from "../../backgrounds/toneARM.png"
function MAIN(){
 
//Animation 
const rotate = keyframes`
   0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(1800deg);
  }
`;

 return(
    <>
    <Box   display={'flex'}  justifyContent={'center'} mt={{base:"40px",xl:"10px"}} pos={'relative'} transform="translateY(10px)" animation="fadeIn 1s ease forwards" >
        <Box border={'2px solid #6bea38ff'} ml={-3} position={'relative'} rounded={'full'} p={'2px'}  animation={`${'rotate'} 50s linear infinite`}>
          <Image
           src={MusicPIC}
           w={{base:"230px",xl:"240px"}}
           h={{base:"230px",xl:"240px"}}
           border={"2px solid #6edd42ff"}
           rounded={'full'}
         />
         <Text position={'absolute'} top={{base:"80px",xl:'90px'}} left={{base:"80px", xl:'90px'}} bg={"black"} w={'60px'} h={"60px"} border={'4px double #6bea38ff'} rounded={"full"}/>
         
        </Box>
        <Image 
         w={{base:"130px", xl:'120px',"2xl":"150px"}}
         h={{base:"190px", xl:'160px',"2xl":"210px"}}
         top={{base:"10px",xl:'30px',"2xl":"15px"}}
         left={{base:"58%",md:"58%",lg:"58%", xl:'66%',"2xl":"63%"}}
         transform={{base:"rotate(10deg)",xl:"rotate(5deg)"}}
         position={'absolute'}
            src={Tonearm}
         /> 
         <style>
        {`
          @keyframes fadeIn {
          0%{
            opacity:1;
            transform: translateY(70px);
          }

          100%{
            opacity:1;
            transform: translateY(0);
          } 
        `}
      </style>
    </Box>
    </>
 )
}

export default MAIN