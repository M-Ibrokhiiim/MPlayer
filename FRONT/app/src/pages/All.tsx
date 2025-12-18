import {
    Text,
    Box,
    Flex,
    Container

} from "@chakra-ui/react"

import Music from "../components/header/musicList"

export default function All(){
    return(
        <>
         <Box p={1}>
            <Flex w="100%"
             h="13.8vh"
             mt={12}
             roundedTop={'none'}
             roundedBottomLeft={'20px'}
             roundedBottomRight={'20px'}
             overflow={'scroll'}
             flexDir={'column'}
             p={'1px'}
             flexShrink={0}
            >
             <Music/>
            </Flex>
         </Box>
        </>
    )
}