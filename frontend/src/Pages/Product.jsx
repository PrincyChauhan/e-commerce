import React, { useContext,useParmas } from "react";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import { ShopContext } from "../Context/ShopContext";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParmas();
  const product = all_product.find((e) => e.id === Number(productId));
  return(
    <div>
      <Breadcrum product={product} />
    </div>
  )
};

export default Product;
