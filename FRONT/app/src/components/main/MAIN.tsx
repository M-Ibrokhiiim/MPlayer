import { Box,Image,Text } from "@chakra-ui/react"
import { keyframes } from "@emotion/react";

import MusicPIC from "../../backgrounds/ThemePic4.jpg"
import Tonearm from "../../backgrounds/toneARM.png"

// Type checking 
interface Props{
  isPlayed:boolean
}
function MAIN({isPlayed}:Props){
 
//Animation keyframes
const rotate = keyframes`
   0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(1800deg);
  }
`;

const rotate2 = keyframes`
   0% {
    transform: rotate(15deg);
  }

  100% {
    transform: rotate(20deg);

`

const NotearmPause = keyframes`
  0% {
    transform: rotate(10deg);
  }
 
 

  100% {
    transform: rotate(-31deg);
  }
`;


const NotearmPlay = keyframes`
     0%{    
           transform: rotate(-31deg);
     }

     100%{
           transform: rotate(10deg);
     }
`

 return(
    <>
    <Box   display={'flex'}  justifyContent={'center'} mt={{base:"40px",xl:"10px"}} pos={'relative'} transform="translateY(10px)" animation="fadeIn 1s ease forwards" >
        <Box border={'2px solid #6bea38ff'} ml={-3} position={'relative'} rounded={'full'} p={'2px'}   animation={isPlayed ? `${rotate} 50s linear 0.5s  infinite` : 'fadeIn2 1s ease forwards' }    >
          <Image
           src={MusicPIC}
           w={{base:"230px",xl:"240px"}}
           h={{base:"230px",xl:"240px"}}
           border={"2px solid #6edd42ff"}
           rounded={'full'}
         />
         <Text position={'absolute'} top={{base:"85px",xl:'92px'}} left={{base:"90px", xl:'96px'}} bg={"black"} w={'60px'} h={"60px"} border={'4px double #6bea38ff'} rounded={"full"}/>
         
        </Box>
        <Image 
         w={{base:"140px", xl:'120px',"2xl":"150px"}}
         h={{base:"190px", xl:'160px',"2xl":"210px"}}
         top={{base:"10px",xl:'30px',"2xl":"15px"}}
         left={{base: isPlayed ? "61%" : "61%" ,md:isPlayed ?  "61%" :"61%",lg:isPlayed ? "61%" :"61%", xl:isPlayed ? '68%' : '68%',"2xl":"63%"}}
         transform={{base:"rotate(10deg)",xl:"rotate(5deg)"}}
         position={'absolute'}
         src={Tonearm}
         animation={isPlayed ? `${NotearmPlay} 0.3s linear forwards` :`${NotearmPause} 0.5s linear forwards`}
         transformOrigin="60% 25%" 
         /> 
         <style>
        {`
          @keyframes fadeIn {
          0%{
            opacity:1;
            transform: translateY(20px);
          }

          100%{
            opacity:1;
            transform: translateY(0);
          } 

           @keyframes fadeIn2 {
          0%{
              opacity:1;
              transform: translateyy(21px);
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