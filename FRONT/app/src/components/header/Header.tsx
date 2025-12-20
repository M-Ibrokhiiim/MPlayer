import {
    Box,
    Link,
    Text,
    Flex,
    Button
} from "@chakra-ui/react"
import  All from "../../pages/All"
import Chevrone from "../../Icons/Chevrone";
import Menu from "../../Icons/Menu";
import Add from "../../Icons/Add";
import { useRef, useState } from "react";
import {Router,Route,useNavigate,Routes } from "react-router-dom"
import FileUploader from "./FileUploader";

// Icons
import buttonsBG from "../../backgrounds/buttonsBG.jpg"
import Favourited from "../../pages/Fovourited";

// Button sounds
import ListsSound from "../../sounds/ ListsSound.wav"


// TYPE CHECKING
interface Props{
      isOpenedList:boolean
      isID:number
      setID: React.Dispatch<React.SetStateAction<number>>
      setList: React.Dispatch<React.SetStateAction<boolean>>
}




function Header({isOpenedList,isID,setID,setList}:Props){
    const navigate = useNavigate()
    const Sound = useRef<HTMLAudioElement | null>(null);

    // Navigation function for routes
    const navigation=(id:number,route:string)=>{
          Sound.current?.play()
          setID(id)
          navigate(route)
      }


    // Sound player function
const SoundPlay = (sound: string, leave: boolean,defaultPage:boolean) => {
  if (!Sound.current) return;
  if(defaultPage) navigate('/all')

  const audio = Sound.current;
 
  setList(leave);
  
  audio.pause();
   
  audio.src = sound;
  audio.currentTime = 0;
  audio.load();

  audio.play().catch(() => {});
};


      return(
        <>
        <Box  mt={6}   display={"flex"} flexDir={"column"} gap={2}   animation="headerFade 0.3s ease forwards" >
        
          <audio ref={Sound}/>


           <Flex justifyContent = {"space-between"} animation="headerFade 0.3s ease forwards">
            {!isOpenedList ?
              <FileUploader  />
              :""
             }
             
             { isOpenedList ? <Button onClick={()=>{SoundPlay(ListsSound,false,false)}}
              borderRadius={'full'} 
              boxShadow={"0 0 170px 7px white"}
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
              onClick={()=>{SoundPlay(ListsSound,true,true)}}
              >
                 <Menu/>
              </Button>
              :''
              }
           </Flex>
           {isOpenedList 
           ? <Flex
                h="25vh"
                p={1}
                w={{ base: "83vw", sm: "100%" }}
                rounded="20px"
                bg="#241816"
                flexDir="column"
                boxShadow="0 60px 250px -80px white"
                opacity={0}
                transform="translateY(12px)"
                animation="headerFade 0.3s ease forwards"
              >
              <Box as="nav" h={"3vh"} w={{base:"100%"}}  display={'flex'} justifyContent={"space-between"}>
                 <Button onClick={()=>{navigation(1,"/all")}} _hover={{opacity:1}} _active={{opacity:1,transition:{base:"all 0.5s ease" }}}  padding={'none'} borderRadius={'none'} h={'40px'}  bg='red'  border={isID ===1 ? '14px double black' : ''} borderBottom={'none'}  roundedTopLeft={'20px'} overflow={'hidden'} ml={{base:isID=== 1 ? '-4.5px' :'none',xl:isID=== 1 ? '-4.5px' :'none'}} roundedTopRight={'20px'} w={'100%'} bgImage={buttonsBG} bgPos={"bottom"}
                     textDecoration="none" transition="all 0.4s ease"   fontFamily={'fantasy'} fontSize={{base:"18px",md:"20px",xl:"18"}}  display={'flex'} justifyContent={'center'} alignItems={'center'} mt={1}
                  >
                   <span style={{marginTop:"10px"}}>All </span>
                 </Button>
                 <Button onClick={()=>{navigation(2,"/favourited")}} transition="all 0.4s ease"  _hover={{opacity:1}} _active={{opacity:1}}  padding={'none'} borderRadius={'none'}  border={isID === 2 ? '14px double black' : ''} borderBottom={'none'}  roundedTopLeft={ '20px'} overflow={'hidden'} roundedTopRight={'20px'} w={'100%'} mr={isID ===2 ? '-4.5px' :''} bgImage={buttonsBG} bgPos={"bottom"}
                     textAlign={'center'}   h={"40px"}  mt={1} fontSize={{base:"18px",md:"20px",xl:"18"}}  fontFamily={'fantasy'} display={'flex'} justifyContent={'center'} alignItems={'center'}  
                  >
                    <Text mt={1}>
                      <span style={{fontFamily:"mono"}} >F</span>avourited  
                    </Text>
                 </Button>
              </Box>
              <Flex  w={'100%'} h={'92vh'} mt={'5.5px'} p={"5px"}  bgImage={buttonsBG}  borderRadius={'20px'} bgPos={'left'}   roundedTop={'none'}>
                <Box w="100vw" h={'full'} bg='black' borderBottomRadius={'20px'}>
                  <Routes>
                    <Route path={"/all"} element={<All/>} /> 
                    <Route path={"/favourited"} element={<Favourited/>}/>
                  </Routes>
                </Box>
              </Flex>
           </Flex>
           :''
           }
        </Box>

        <style>
            {`
              @keyframes headerFade {
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}
        </style>
        </>
      )
}

export default Header;