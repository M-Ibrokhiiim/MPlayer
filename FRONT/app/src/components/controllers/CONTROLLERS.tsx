import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb,Flex, Button,Image } from "@chakra-ui/react";
import buttonsBG from "../../backgrounds/buttonsBG.jpg";
import Next from '../../Icons/forward-button.png';
import Back from '../../Icons/rewind-button.png'
import Pause from '../../Icons/pause.png'

export default function AudioVolumeController({isOpenedList}:{isOpenedList:boolean}) {
  return (
    <Box p={4}  display={'flex'} flexDir={'column'} alignItems={'center'} >
        {/* <Box>
            <audio src="your-audio-file.mp3" />

            <Slider defaultValue={1} min={0} max={100}>
                <SliderTrack bg="black" border={'2px solid yellow'} height="14px" borderRadius={'10px'}>
                <SliderFilledTrack border={'2px solid yellow'} bg={'black'} />
                </SliderTrack>

                <SliderThumb
                boxSize="40px"
                border="5px solid black"
                sx={{
                    backgroundImage: `url("${buttonsBG}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                />
            </Slider>
        </Box> */}
        <Flex   w={'80%'} mt={isOpenedList ? "60%" : "40%"} justifyContent={'space-between'} alignItems={'center'}>
                <Button
                    boxShadow={'0 0 150px 2px white'}
                    rounded="full"
                    h="60px"
                    w="60px"
                    bgImage={buttonsBG}
                    bgPos="center"
                    transition="transform 0.15s ease"
                    _hover={{ opacity: 1 }}
                    _active={{ transform: " translateX(-15px)", opacity: 1 }}
                    >
                    <Image w={{ "2xl": "40px" }} h={{ "2xl": "30px" }} src={Back} />
                </Button>
                <Button
                    boxShadow={'0 0 150px 2px white'}
                    rounded="full"
                    h="80px"
                    w="80px"
                    bgImage={buttonsBG}
                    bgPos="center"
                    transition="transform 0.15s ease"
                    _hover={{ opacity: 1 }}
                    _active={{ transform: "scale(0.8)", opacity: 1 }}
                >
                <Image w={{ "2xl": "40px" }} h={{ "2xl": "30px" }} src={Pause} />
                </Button>
                <Button
                    boxShadow={'0 0 150px 2px white'}
                    rounded="full"
                    h="60px"
                    w="60px"
                    bgImage={buttonsBG}
                    bgPos="center"
                    transition="transform 0.15s ease"
                    _hover={{ opacity: 1 }}
                    _active={{ transform: " translateX(15px)", opacity: 1 }}
                    
                >
                <Image w={{ "2xl": "40px" }} h={{ "2xl": "30px" }} src={Next} />
                </Button>
        </Flex>
    </Box>
  );
}
