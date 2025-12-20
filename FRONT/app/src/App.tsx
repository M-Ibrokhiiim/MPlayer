import { useState } from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import Header from "./components/header/Header";
import MAIN from "./components/main/MAIN";
import CONTROLLERS from "./components/controllers/CONTROLLERS";

function App() {
  const [isOpenedList, setList] = useState(false);
  const [isPlayed, setPlay] = useState(false);
  const [isID, setID] = useState(1);

  return (
    <Flex
      w="100%"
      bg="black"
      h="100vh"
      textOverflow="hidden"
      justifyContent="center"
    >
      <Box
        border="1px solid yellow"
        overflow="hidden"
        w={{
          base: "96vw",
          sm: isOpenedList ? "75%" : "70%",
          md: isOpenedList ? "50%" : "48%",
          lg: "40vw",
          xl: "27vw",
          "2xl": "24vw"
        }}
        h={{
          base: isOpenedList ? "95%" : "95%",
          sm: isOpenedList ? "80vh" : "80vh",
          md: isOpenedList ? "97%" : "97%",
          lg: isOpenedList ? "82vh" : "82vh",
          xl: isOpenedList ? "90%" : "90%",
          "2xl": isOpenedList ? "85%" : "88%"
        }}
        mt={{
          base: "2vw",
          sm: "10vh",
          md: "1%",
          lg: isOpenedList ? "5%" : "7%",
          xl: isOpenedList ? "3.5vw" : "2%",
          "2xl": "3%"
        }}
        borderRadius={{ base: "30px" }}
        p="25px"
      >
        <Header
          isOpenedList={isOpenedList}
          setList={setList}
          isID={isID}
          setID={setID}
        />

        {isOpenedList ? "" : <MAIN isPlayed={isPlayed} />}

        <Box
          w="100%"
          mt={{
            base: isOpenedList ? "14%" : "2%",
            lg: isOpenedList ? "12%" : "5%",
            xl: isOpenedList ? "19%" : "5%"
          }}
          mb={{ base: "-1", xl: "5" }}
          display="flex"
          justifyContent="center"
        >
          <Flex
            flexDirection="column"
            w="50%"
            color="white"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              fontFamily="cursive"
              fontSize={{ base: "28px", md: "30px", xl: "25px" }}
              textAlign="center"
              w={{ base: "150%", md: "40vw" }}
            >
              Life is going on
            </Text>
            <Text
              fontFamily="emoji"
              fontSize={{ base: "25px", md: "30px", xl: "25px" }}
            >
              2Pac
            </Text>
          </Flex>
        </Box>

        <CONTROLLERS
          isOpenedList={isOpenedList}
          isPlayed={isPlayed}
          setPlay={setPlay}
        />
      </Box>

      <Box></Box>
    </Flex>
  );
}

export default App;