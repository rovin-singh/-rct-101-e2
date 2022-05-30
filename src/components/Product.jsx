import React from "react";
import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel
} from "@chakra-ui/react";
const Product = ({ todo }) => {
  return (
    <>
      {todo.map((use) => (
        <Stack data-cy="product">
          <Image data-cy="product-image" src={use.imageSrc} />
          <Text data-cy="product-category">{use.category}</Text>
          <Tag>
            <TagLabel data-cy="product-gender">{use.gender}</TagLabel>
          </Tag>
          <Heading data-cy="product-title">{use.title}</Heading>
          <Box data-cy="product-price">{use.price}</Box>
        </Stack>
      ))}
    </>
  );
};

export default Product;
