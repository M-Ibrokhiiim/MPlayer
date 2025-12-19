import { Box,Button,Input } from "@chakra-ui/react";
import buttonsBG from "../../backgrounds/buttonsBG.jpg"
import Add from "../../Icons/Add";

function FileUploader(){

     const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        console.log(file)
       }
   return(
    <>
      <Box position={'relative'} bg={'red.100'} transition="transform 0.15s ease" cursor={'pointer'}>
            <Button borderRadius={'full'}  
                boxShadow={"0 0 170px 9px white"}
                bgImage={`${buttonsBG}`} 
                bgPos={"center"} 
                _hover={{opacity:1}} 
                transition="transform 0.15s ease"
                _active={{transform: "scale(0.8)",}} 
                border={"2px solid black"}  
                w={{base:"50px","2xl":"57px"}} 
                h={{base:"50px", "2xl":"55px"}}
                position={'absolute'}
                >
                 <Add/>
            </Button>
            <Input type="file" position={'absolute'} 
                accept="audio/*"
                w={{base:"50px","2xl":"57px"}} 
                h={{base:"50px", "2xl":"55px"}} 
                rounded={'full'}
                cursor={'pointer'}
                opacity={0}
                onChange={getFile}
             /> 
      </Box>
    </>
   )
}

export default FileUploader;