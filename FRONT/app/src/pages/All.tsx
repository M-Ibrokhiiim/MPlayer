import {Box,Flex} from '@chakra-ui/react'

import Searchbar from '../components/header/Searchbar';
import Music from '../components/header/musicList';


export default function All() {
  return (
    <>
      <Box
        p={1}
        opacity={0}
        transform="translateY(10px)"
        animation="fadeIn 1s ease forwards"
      >
        <Searchbar />

        <Flex
          w="100%"
          h={{base:"16.3vh",md:"17vw",lg:"14vw",xl:"10.4vw","2xl":"8vw"}}
          mt={{base:2,lg:2.5}}
          roundedTop="none"
          roundedBottomLeft="20px"
          roundedBottomRight="20px"
          overflow="scroll"
          flexDir="column"
          p="1px"
          flexShrink={0}
        >
          <Music />
          <Music />
          <Music />
          <Music />
          <Music />
          <Music />
          <Music />
          <Music />
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
