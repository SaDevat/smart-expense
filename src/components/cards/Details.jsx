import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../hooks/useTransactions";

const Details = ({ title }) => {
  const {total, chartData} = useTransactions(title);

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
          ${total}
        </Text>
        <Doughnut style={{maxHeight: "30vh"}} data={chartData} />
      </Box>
    </div>
  );
};

export default Details;
