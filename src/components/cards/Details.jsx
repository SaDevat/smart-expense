import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const Details = ({ title }) => {
  return (
    <div>
      <Box
      backgroundColor="white"
      width="100%"
        borderBottomWidth="10px"
        borderBottomColor={
          title === "Income" ? "rgba(0,255,0,0.5)" : "rgba(255,0,0,0.5)"
        }
        paddingLeft="1rem"
      >
        <Text fontSize="2rem" textAlign="left">
          {title}
        </Text>
        <Text fontSize="1.5rem" textAlign="left">
          Details
        </Text>
        {/* <Doughnut data="DATA" /> */}
      </Box>
    </div>
  );
};

export default Details;
