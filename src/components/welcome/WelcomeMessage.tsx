import { Box } from "@mui/system";
import React from "react";

interface WelcomeMessageProps {
  // position: string;
  // country?: string;
}

const WelcomeMessage = () => {
  return (
    <Box mb={1}>
      Ola, como esta
      {/* {position} */}
      {/* from {country} */}
    </Box>
  );
};

export default WelcomeMessage;
