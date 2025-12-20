import { Box,Flex } from "@chakra-ui/react"

import Music from "../components/header/musicList"
export default function Favourited() {
  return (
    <>
      <Box
        rounded={10}
        roundedTop={0}
        w="99%"
        ml="1px"
        mb={3}
        opacity={0}
        transform="translateY(10px)"
        animation="fadeIn 1s ease forwards"
      >
        <Flex
          w="100%"
          p={1}
          h={{base:"20vh",md:"23vh",lg:"20vh", xl:"10vw","2xl":"10vw"}}
          mt={{base:4,md:5,xl:4}}
          roundedTop="none"
          overflow="scroll"
          flexDir="column"
          flexShrink={0}
        >
          <Box mt={-2}>
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
          </Box>
        </Flex>
      </Box>


      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}
