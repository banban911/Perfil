import { Box } from "@mui/system";
import React from "react";

interface WelcomeMessageProps {
  position: string;
  country?: string;
}

const WelcomeMessage = ({
  position,
  country = "Vietname",
}: WelcomeMessageProps) => {
  return (
    <Box mb={1}>
      Ola {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
