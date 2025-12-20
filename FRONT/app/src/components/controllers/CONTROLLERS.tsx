import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb,Flex, Button,Image,Text} from "@chakra-ui/react";
import buttonsBG from "../../backgrounds/buttonsBG.jpg";
import Next from '../../Icons/forward-button.png';
import Back from '../../Icons/rewind-button.png'
import Pause from '../../Icons/pause.png'
// import Play from '../../Icons/pause.png'


export default function AudioVolumeController({isOpenedList}:{isOpenedList:boolean}) {
  return (
    <Box p={4}  display={'flex'}   mt={{base:isOpenedList ? "8%" :"5%", lg:isOpenedList ? "3%" : "5%",xl:isOpenedList ? '-20px': "-8%","2xl":isOpenedList ? 1:'-4%'}} gap={'25px'} flexDir={'column'} alignItems={'center'} >
        <Box  w={'100%'} >
            <audio src="your-audio-file.mp3" />

            <Slider mt={4} defaultValue={1} w={'full'} min={0} max={100}>
                <SliderTrack bg="black" border={'1px solid #80fc4e'} height="15px" borderRadius={'10px'}>
                <SliderFilledTrack  bg={'black'}  />
                </SliderTrack>
                
                 
                <SliderThumb
                boxSize="40px"
                bg={'black'}
                overflow={'hidden'}
                p={4}
                _active={{bg:'black',opacity:1}}
                _focus={{bg:'black'}}
                 border={"1px solid #80fc4e"}
                >
                <Box bg='black'  p={5}>
                    <Text color={'white'}   w={{base:'6.5vw',sm:"5vw",md:"3vw",lg:"2.5vw",xl:"1.8vw","2xl":"1.6vw"}}   h={{base:'6.5vw',sm:"5vw",md:"3vw",lg:"2.5vw",xl:"1.8vw","2xl":"1.6vw"}}  rounded={'full'}    backgroundImage={buttonsBG}   bgPos={'center'}></Text> 
                </Box>
                </SliderThumb>
            </Slider>
        </Box>
        <Flex   w={{base:"65vw",sm:"49vw",md:"35vw",lg:"27vw",xl:"20vw","2xl":"17vw"}}  mt={4}  justifyContent={'space-between'} alignItems={'center'}>
            
                <Button
                    boxShadow={'0 0 150px 13px white'}
                    rounded="full"
                    h={{base:"52px",sm:"53px",xl:"52px"}}
                    w={{base:"52px",sm:"53px",xl:"52px"}}
                    bgImage={buttonsBG}
                    bgPos="center"
                    transition="transform 0.15s ease"
                    _hover={{ opacity: 1 }}
                    _active={{ transform: " translateX(-15px)", opacity: 1 }}
                    >
                    <Image w={{ "2xl": "40px" }} h={{ "2xl": "30px" }} src={Back} ml={-1} />
                </Button>
                <Button
                    boxShadow={'0 0 150px 1px white'}
                    rounded="full"
                    h={{base:"68px",sm:"67px",xl:"65px"}}
                    w={{base:"68px",sm:"67px",xl:"65px"}}
                    bgImage={buttonsBG}
                    bgPos="center"
                    transition="transform 0.1s ease"
                    _hover={{ opacity: 1 }}
                    _active={{ transform: "scale(0.9)", opacity: 1 }}
                >
                <Image w={{ "2xl": "40px" }} h={{ "2xl": "30px" }} src={Pause} />
                </Button>
                <Button
                    boxShadow={'0 0 150px 13px white'}
                    rounded="full"
                    h={{base:"52px",sm:"53px",xl:"52px"}}
                    w={{base:"52px",sm:"53px",xl:"52px"}}
                    bgImage={buttonsBG}
                    bgPos="center"
                    transition="transform 0.15s ease"
                    _hover={{ opacity: 1 }}
                    _active={{ transform: " translateX(15px)", opacity: 1 }}
                    
                >
                <Image w={{ "2xl": "40px" }} h={{ "2xl": "30px" }} src={Next} ml={1} />
                </Button>
        </Flex>
    </Box>
  );
}
