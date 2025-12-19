import {
    Text,
    Box,
    Flex,
    Container

} from "@chakra-ui/react"

import Music from "../components/header/musicList";
import Searchbar from "../components/header/Searchbar";

export default function All(){
    return(
        <>
         <Box p={1}>
            <Searchbar/>
            <Flex w="100%"
             h="15.3vh"
             mt={3}
             roundedTop={'none'}
             roundedBottomLeft={'20px'}
             roundedBottomRight={'20px'}
             overflow={'scroll'}
             flexDir={'column'}
             p={'1px'}
             flexShrink={0}
            >
             <Music/>
             <Music/>
             <Music/>
             <Music/>
             <Music/>
             <Music/>
             <Music/>
             <Music/>
            </Flex>
         </Box>
        </>
    )
}