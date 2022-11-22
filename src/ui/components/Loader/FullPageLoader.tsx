import { Box } from "@chakra-ui/react";
import React from "react";
import Loader from ".";

const FullPageLoader = () => {
  return (
    <Box position="fixed" w={"100vw"} h={"100vh"} zIndex={10000}>
      <Loader />
    </Box>
  );
};

export default FullPageLoader;
