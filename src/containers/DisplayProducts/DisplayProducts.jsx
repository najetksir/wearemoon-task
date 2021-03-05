import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Cards/Card";
import classes from "./displayProducts.module.scss";

export default function DisplayProducts() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const url = "https://api.mocki.io/v1/af37df01";
  useEffect(() => {
    getproducts();
  }, []);
  const getproducts = async () => {
    setLoading(true);
    await axios
      .get(url)
      .then((response) => {
        // console.log(response.data)
        setResponse(response.data);
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(true);
      });
  };

  return (
    <div className={classes.productContainer}>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error occured.</div>
      ) : (
        response.map((item) => {
          return (
            <Card
              src={item.picture}
              title={item.product_name}
              price={item.price}
            />
          );
        })
      )}
    </div>
  );
}
