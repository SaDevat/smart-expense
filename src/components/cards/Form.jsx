import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Grid, GridItem } from "@chakra-ui/layout";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { Select } from "@chakra-ui/select";
import React, { useContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import dateFormat from "../../helpers/dateFormat";
import {
  incomeCategories,
  expenseCategories,
} from "../../helpers/categoryDetailsConst";
import expenseContext from "../../context/expense/ExpenseContext";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: dateFormat(new Date()),
};

const Form = () => {
  const { addTransaction } = useContext(expenseContext);
  const [formData, setFormData] = useState(initialState);
  const [open, setOpen] = useState(false);

  const createTransaction = () => {
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes("-"))
      return;

    if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
      setFormData({ ...formData, type: "Income" });
    } else if (
      expenseCategories.map((iC) => iC.type).includes(formData.category)
    ) {
      setFormData({ ...formData, type: "Expense" });
    }

    setOpen(true);
    addTransaction({
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    });
    setFormData(initialState);
  };

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <div>
      <Grid height="100%" templateColumns="repeat(2, 1fr)" gap={4}>
        {/* not mentioning templateRows or templateColumns results in a
        flexible 1 gridItem -- 1 row layout */}
        <GridItem colSpan={2} align="center">
          text populated from speechly
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <Select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              {selectedCategories.map((category) => (
                <option key={category.type} value={category.type} defaultValue={category.type[0]}>
                  {category.type}
                </option>
              ))}
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Amount</FormLabel>
            <NumberInput>
              <NumberInputField
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              placeholder="Date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button w="100%" bgColor="whatsapp.100" onClick={createTransaction}>
            CREATE
          </Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Form;
