import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="/"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Think Like a Programmer: An Introduction to Creative Problem Solving"
            price={20.49}
            image={
              "https://m.media-amazon.com/images/I/81KcsnpAvWL._AC_UY436_FMwebp_QL65_.jpg"
            }
            rating={4}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4324241"
            title="Bose QuietComfort 45 Bluetooth Wireless Noise Cancelling Headphones"
            price={249.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/31gXnogBxkL._AC_UF452,452_FMjpg_.jpg"
          />
          <Product
            id="82937298"
            title="Breville Barista Express Expresso Machines"
            price={599.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/41ti6zGcmGL._AC_UF452,452_FMjpg_.jpg"
          />
          <Product
            id="40301333"
            title="Fire TV Stick 4K streaming device with latest Alexa Voice Remote (includes TV controls), Dolby Vision"
            price={49.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/411y5UdVmvL._AC_UL675_SR675,480_.jpg"
          />
          <Product
            id="09028322"
            title="Gotrax GXL V2 Electric Scooter, 8.5 Pneumatic Tire, Max 12 Mile and 15.5Mph Speed, EABS and Rear Disk Brake,Foldable Escooter for Adult"
            price={331.49}
            rating={4}
            image="https://m.media-amazon.com/images/I/31xQA4EKNNL._AC_UF452,452_FMjpg_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
