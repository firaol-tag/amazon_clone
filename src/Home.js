import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
          alt=""
        ></img>
        <div className="home-row">
          <Product
            id="123221341"
            title="the lean startup constant innovation"
            price={11.9}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg"
          />
          <Product
            id="123221341"
            title="the lean startup constant innovation"
            price={11.9}
            rating={6}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="123221341"
            title="the lean startup constant innovation"
            price={11.9}
            rating={5}
            image="https://m.media-amazon.com/images/I/71K4czB1syL._AC_UL320_.jpg"
          />
          <Product
            id="123221341"
            title="the lean startup constant innovation"
            price={11.9}
            rating={5}
            image="https://m.media-amazon.com/images/I/711pKcE2-gL._AC_UL320_.jpg"
          />
          <Product
            id="123221341"
            title="the lean startup constant innovation"
            price={11.9}
            rating={5}
            image="https://m.media-amazon.com/images/I/51GiCuBe44L._AC_UL320_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="123221341"
            title="the lean startup constant innovation"
            price={11.9}
            rating={5}
            image="https://m.media-amazon.com/images/I/51Eq4G2XZ+L._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
