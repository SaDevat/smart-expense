import { Box, Divider, Text } from "@chakra-ui/layout";
import React from "react";
import Form from "./Form";

const Main = () => {
  return (
    <div>
      <Box padding={2} backgroundColor="white">
        <Box>
          <Text fontSize="2rem" textAlign="left">
            Expense Tracker
          </Text>
          <Text fontSize="1.2rem" textAlign="left" color="gray">
            Powered by speechly
          </Text>
        </Box>
        <Box paddingY="5">
          <Text fontSize="1.2rem" textAlign="center">
            Total balance: $800
          </Text>
        </Box>
        <Box>
          <Text fontSize="1.2rem" textAlign="left">
            Try saying: "Add income for 100 dollars in category salary for
            monday"
          </Text>
        </Box>
        <Box borderWidth="3px" borderColor="#FFFFFF80" borderRadius="100"></Box>
        <Box >
            <Form />
        </Box>
        <Box>{/* List */}</Box>
      </Box>
    </div>
  );
};

export default Main;
