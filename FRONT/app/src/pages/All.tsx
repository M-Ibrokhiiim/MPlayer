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
        animation="fadeIn 0.4s ease forwards"
      >
        <Searchbar />

        <Flex
          w="100%"
          h="15.3vh"
          mt={3}
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

      {/* keyframes */}
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
