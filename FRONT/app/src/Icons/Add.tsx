import { Box } from "@chakra-ui/react";

function Add() {
  return (
    <>
      <Box>
        <svg
          width="24px"
          height="44px"
          viewBox="2 0 20 24"
          style={{
            background: "rgba(221, 190, 190, 0.2)",
            backdropFilter: "blur(1px)"
          }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Edit / Add_Plus">
              <path
                id="Vector"
                d="M6 12H12M12 12H18M12 12V18M12 12V6"
                stroke="#000000"
                strokeWidth="2.016"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </Box>
    </>
  );
}

export default Add;