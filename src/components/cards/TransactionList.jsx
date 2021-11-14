import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";

import { DeleteIcon } from "@chakra-ui/icons";

const TransactionList = () => {
  const transactions = [
    {
      amount: "-$10.00",
      category: "Food",
      date: "2020-01-01",
    },
    {
      amount: "-$10.00",
      category: "Food",
      date: "2020-01-01",
    },
    {
      amount: "-$10.00",
      category: "Food",
      date: "2020-01-01",
    },
    {
      amount: "-$10.00",
      category: "Food",
      date: "2020-01-01",
    },
  ];
  return (
    <div>
      <List spacing={3} maxHeight="120px" overflow="auto">
        {transactions.map((transaction) => (
          <ListItem>
            {/* icon */}
            <Text>{transaction.category}</Text>
            <Flex>
              <Text>
                {transaction.amount} -- {transaction.date}
              </Text>
              <Spacer />
              <ListIcon as={DeleteIcon} />
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TransactionList;
