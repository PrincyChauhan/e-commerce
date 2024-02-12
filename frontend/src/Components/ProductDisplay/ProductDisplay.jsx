import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  console.log(product)

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="produtdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>122</p>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              ${product.new_price}
            </div>
            <div className="productdisplay-right-description">
              A light weight, usually cotton, fabric with a small, all-over,
              printed design. The print is commonly a floral pattern, but can be
              of any design or motif.
            </div>
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
              <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XLL</div>
              </div>
            </div>
            <button>Add to Cart</button>
            <p className="productdisplay-right-category">
              <span>Category:</span> Women,T-shirt,Crop Top{" "}
            </p>
            <p className="productdisplay-right-category">
              <span>Tags:</span> Morden, Latest{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
