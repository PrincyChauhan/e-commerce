import React, { useContext,useParams } from "react";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  console.log(productId)
  const product = all_product.find((e) => e.id === Number(productId));
  return(
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
    </div>
  )
};

export default Product;
