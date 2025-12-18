import {Text} from "@chakra-ui/react"
export default function Edit(){
    return(
        <>
        <Text _active={{transition:'all 0.3s ease',  transform:"scale(0.8)"}} cursor={'pointer'}>
         <svg height="25px" width="25px" fill="#000000" viewBox="0 0 24 24" id="36a96b66-7f0e-4948-88ac-a5df6d326d79" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>prime</title><path id="bcf2f889-e5ee-4d72-8984-43405cbeb52a" data-name="favourite" d="M23.5,7A6,6,0,0,0,12,4.61,6,6,0,0,0,.84,5C0,7.45.82,9.94,2.51,12h0L12,23l9.71-11.22A7.74,7.74,0,0,0,23.5,7Z"></path></g></svg>
        </Text>
        </>
    )
}
