import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import "./SearchedProduct.css";
import axios from "axios";
import BeatLoader from "react-spinners/ClipLoader";

const SearchedProduct = () => {
  let params = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    url: "https://amazon24.p.rapidapi.com/api/product",
    params: {
      categoryID: "aps",
      keyword: params.params,
      country: "US",
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": "4737c3f9a5mshcbb1474b536c7b2p110e39jsncf2b468fca23",
      "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
    },
  };
  console.log(loading);
  useEffect(() => {
    axios.request(options).then((res) => {
      setItems(res.data.docs.slice(0, 9));
      setLoading(true);
      console.log(loading);
    });
  }, [params]);

  return (
    <div className="searchedProduct">
      <img
        className="searched__img"
        src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2022/Q3/Onsite/StoreFronts/2022Q3_HCT_Storefront_Hero_NewTraditional_D_1500x500_EN.jpg"
        alt=""
      />
      {loading === false ? (
        <div className="loading__div">
          <BeatLoader className="loading__bar" size={100} />
        </div>
      ) : (
        <div className="searched__row">
          {items.map((item) => (
            <Product
              key={item.product_id}
              id={item?.product_id}
              title={item?.product_title}
              price={item?.original_price || "99.99"}
              rating={4}
              image={item?.product_main_image_url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchedProduct;
