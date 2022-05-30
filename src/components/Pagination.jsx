import React from "react";
import { Button, ButtonGroup, Select } from "@chakra-ui/react";
const Pagination = ({ todo, limit, setLimit, pcount, setPcount }) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <ButtonGroup>
      <Button
        data-cy="pagination-first-button"
        disabled={pcount <= 1}
        onClick={() => {
          if (pcount > 1) {
            setPcount(pcount - 1);
          }
        }}
      >
        First
      </Button>
      <Button
        data-cy="pagination-previous-button"
        disabled={pcount <= 1}
        onClick={() => {
          if (pcount > 1) {
            setPcount(pcount - 1);
          }
        }}
      >
        Previous
      </Button>
      <Select
        data-cy="pagination-limit-select"
        onChange={(e) => setLimit(Number(e.target.value))}
      >
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">7</option>
      </Select>
      <Button
        data-cy="pagination-next-button"
        onClick={() => {
          if (pcount > 1) {
            setPcount(pcount + 1);
          }
        }}
      >
        Next
      </Button>
      <Button
        data-cy="pagination-last-button"
        onClick={() => {
          if (pcount > 1) {
            setPcount(pcount + 1);
          }
        }}
      >
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
