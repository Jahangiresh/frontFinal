import React from "react";
import "./shop.scss";

import { GiNoseFront } from "react-icons/gi";
import { FiEye } from "react-icons/fi";
import { GiLipstick } from "react-icons/gi";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import Features from "../components/Features";

const Shop = () => {
  const [products, setProducts] = useState();
  const apiEndPoint = "http://localhost:3000/products";

  useEffect(() => {
    const getProduct = async () => {
      const resp = await axios.get(apiEndPoint);
      setProducts(resp.data);
    };
    getProduct();
  }, []);
  
  return (
    <div className="shop">
      <div className="shop__cover"></div>
      <div className="shop__container container">
        <div className="shop__container__title row">
          <h2 data-aos="fade-right" className="discover">
            Discover
          </h2>
          <h2 data-aos="fade-right" className="shibumi">
            Shibumi
          </h2>
        </div>
        <div className="shop__container__categories row">
          <ul className="shop__container__categories__ul">
            <li>
              <GiNoseFront />
              Mask
            </li>
            <li>
              <GiLipstick />
              Lips
            </li>
            <li>
              <FiEye />
              Eye cream
            </li>
          </ul>
        </div>
        <div className="shop__container__products row">
          <Product productslist={products} />
        </div>
        <div className="shop__container__features row">

          <Features />
        </div>
      </div>
    </div>
  );
};

export default Shop;
