import React, { useRef } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import buttonsBG from "../../backgrounds/buttonsBG.jpg";
import Add from "../../Icons/Add";
import ListsSound from "../../sounds/ ListsSound.wav";

function FileUploader() {
  const Sound = useRef<HTMLAudioElement | null>(null);

  const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
  };

  const SoundPlay = (sound: string) => {
    Sound.current!.src = sound;
    Sound.current?.play();
  };

  return (
    <>
      <Box
        position="relative"
        bg="red.100"
        transition="transform 0.15s ease"
        cursor="pointer"
        onClick={() => {
          SoundPlay(ListsSound);
        }}
      >
        <audio ref={Sound} />

        <Button
          borderRadius="full"
          boxShadow="0 0 170px 9px white"
          bgImage={`${buttonsBG}`}
          bgPos="center"
          _hover={{ opacity: 1 }}
          transition="transform 0.15s ease"
          _active={{ transform: "scale(0.8)" }}
          border="2px solid black"
          w={{ base: "50px", "2xl": "57px" }}
          h={{ base: "50px", "2xl": "55px" }}
          position="absolute"
        >
          <Add />
        </Button>

        <Input
          type="file"
          position="absolute"
          accept="audio/*"
          w={{ base: "50px", "2xl": "57px" }}
          h={{ base: "50px", "2xl": "55px" }}
          rounded="full"
          cursor="pointer"
          opacity={0}
          onChange={getFile}
        />
      </Box>
    </>
  );
}

export default FileUploader;