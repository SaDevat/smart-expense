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
import React from "react";

const Form = () => {
  return (
    <div>
      <Grid height="100%" templateColumns="repeat(2, 1fr)" gap={4}>
        {/* not mentioning templateRows or templateColumns results in a
        flexible 1 gridItem -- 1 row layout */}
        <GridItem colSpan={2} align="center">text populated from speechly</GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <Select>
              <option>option1</option>
              <option>option2</option>
              <option>option3</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select>
              <option>option1</option>
              <option>option2</option>
              <option>option3</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Amount</FormLabel>
            <NumberInput>
              <NumberInputField />
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
            <Input type="date" placeholder="Date" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button w="100%" bgColor="whatsapp.100">
            CREATE
          </Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Form;
