import React, { useContext } from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";

import { DeleteIcon } from "@chakra-ui/icons";
import expenseContext from "../../context/expense/ExpenseContext";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(expenseContext);

  return (
    <div>
      <List spacing={3} maxHeight="120px" overflow="auto">
        {transactions.map((transaction) => (
          <ListItem key={transaction.id}>
            {/* icon */}
            <Text>{transaction.category}</Text>
            <Flex>
              <Text>
                {transaction.amount} -- {transaction.date}
              </Text>
              <Spacer />
              <ListIcon
                as={DeleteIcon}
                onClick={() => deleteTransaction(transaction.id)}
                cursor="pointer"
              />
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TransactionList;
