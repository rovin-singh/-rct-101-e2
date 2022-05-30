import React, { useEffect } from "react";
import AddProduct from "./AddProduct";
import axios from "axios";
import Product from "./Product";
import Pagination from "./Pagination";
import { Flex, Grid } from "@chakra-ui/react";
const Products = () => {
  const [todo, setTodo] = React.useState([]);
  const [pcount, setPcount] = React.useState(1);
  const [limit, setLimit] = React.useState(3);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(
        `http://localhost:8080/products?_page=${pcount}&_limit=${limit}`
      );
      setTodo(res.data);
    };
    getData();
  }, [pcount, limit]);

  return (
    <Flex>
      <div>
        <AddProduct />
      </div>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Product todo={todo} />
      </Grid>
      <div>
        <Pagination
          todo={todo}
          limit={limit}
          setLimit={setLimit}
          pcount={pcount}
          setPcount={setPcount}
        />
      </div>
    </Flex>
  );
};

export default Products;
