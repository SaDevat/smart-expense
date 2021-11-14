import { Box, Divider, Text } from "@chakra-ui/layout";
import React, { useContext } from "react";
import Form from "./Form";
import TransactionList from "./TransactionList";
import expenseContext from "../../context/expense/ExpenseContext";

const Main = () => {
  const { balance } = useContext(expenseContext);

  return (
    <div>
      <Box height="80vh" overflow="auto" padding={2} backgroundColor="white">
        <Box>
          <Text fontSize="1rem" textAlign="left">
            Expense Tracker
          </Text>
          <Text fontSize="0.7rem" textAlign="left" color="gray">
            Powered by speechly
          </Text>
        </Box>
        <Box paddingY="5">
          <Text fontSize="0.7rem" textAlign="center">
            Total balance: ${balance}
          </Text>
        </Box>
        <Box>
          <Text fontSize="0.7rem" textAlign="left">
            Try saying: "Add income for 100 dollars in category salary for
            monday"
          </Text>
        </Box>
        <Box borderWidth="3px" borderColor="#FFFFFF80" borderRadius="100"></Box>
        <Box>
          <Form />
        </Box>
        <Box paddingY={3}>
          <TransactionList />
        </Box>
      </Box>
    </div>
  );
};

export default Main;
