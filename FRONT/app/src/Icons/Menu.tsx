import { Box } from "@chakra-ui/react";

function Menu() {
  return (
    <>
      <Box>
        <svg
          width="30px"
          height="27px"
          viewBox="2 0 18.00 24.00"
          style={{ backdropFilter: "blur(2px)" }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </Box>
    </>
  );
}

export default Menu;