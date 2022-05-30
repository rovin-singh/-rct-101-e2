import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
  useDisclosure
} from "@chakra-ui/react";
const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>
        Add New Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <form>
            <label>Title</label>
            <Input data-cy="add-product-title" placeholder="title" />
            <label>category</label>
            <Select data-cy="add-product-category">
              <option data-cy="add-product-category-shirt">Shirt</option>
              <option data-cy="add-product-category-pant">Pant</option>
              <option data-cy="add-product-category-jeans">Jeans</option>
            </Select>
            <label>Gender</label>
            <RadioGroup data-cy="add-product-gender">
              <Radio data-cy="add-product-gender-male">Male</Radio>
              <Radio data-cy="add-product-gender-female">Female</Radio>
              <Radio data-cy="add-product-gender-unisex">Others</Radio>
            </RadioGroup>
            <label>Price</label>
            <Input data-cy="add-product-price" placeholder="Rs. Rupees" />
            <Button data-cy="add-product-submit-button">Create</Button>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
