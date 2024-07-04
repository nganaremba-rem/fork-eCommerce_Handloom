import React, { useContext } from "react";
// import React, { useState, useEffect } from "react";
import { ShopContext } from "../components/Context/ShopContext";
import Item from "../components/Item/Item";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mantine/core";
// import instance from "../../api";
const ShopCategory = ({ products, isSearch, isLoading }) => {
  const { all_product } = useContext(ShopContext);
  // console.log(products);
  // const params = useParams();
  // const [products, setproducts] = useState([]);
  // const fetchProducts = async (id) => {
  //   try {
  //     // const { data } = await axios.get(
  //     //   `https://7bjx1c7g-3000.inc1.devtunnels.ms/product/getProductCategoryById/${id}`
  //     // );
  //     // setproducts(data.product);
  //     const res = await instance({
  //       url: `/product/getProductCategoryById/${id}`,
  //       method: "GET",
  //     });
  //     setproducts(res.data.product);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (params.category === "Rani-Phee")
  //     fetchProducts("664d9c6ad3fbe4146f8e3baa");
  //   if (params.category === "Wangkhei-Phee")
  //     fetchProducts("664d9c63d3fbe4146f8e3ba7");
  //   if (params.category === "Phanek") fetchProducts("664d9c81d3fbe4146f8e3bb0");
  //   // fetchProducts();
  // }, []);
  return (
    <div className="m-2 grid grid-cols-4 gap-5">
      {products && products.length === 0 && isSearch !== "" ? (
        <p className="flex justify-center items-center flex-col text-xl">
          Not Match Product found
        </p>
      ) : (
        products?.map((item, i) => {
          // if (props.category === item.category) {
          return (
            <Item
              key={item._id}
              id={item._id}
              name={item.name}
              img={item?.image_id[0]}
              price={item.price}
            />
          );
          // } else {
          //   return null;
          // }
        })
      )}
      {isLoading && (
        // <div className="flex justify-center items-center flex-col text-xl">
        <>
          <Skeleton height={50} circle mb="xl" />
          <Skeleton height={8} radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </>
        // </div>
      )}
      {/* <Skeleton visible={loading} height={500} width={500} /> */}
    </div>
  );
};

export default ShopCategory;
