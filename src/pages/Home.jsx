import React, { useState, useEffect } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import dogBg from "../assets/images/dogcat.png";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";

import counterImg from "../assets/images/dog-bg.png";


import useGetData from "../custom-hooks/useGetData";


const Home = () => {
  const { data: products, loading } = useGetData('products');
  
  const [trendingProducts, setTrendingProducts] = useState([]);
  //const [bestSalesPets, setBestSalesPets] = useState([]);
  const [petProducts, setPetProducts] = useState([]);
  const [petCats, setPetCats] = useState([]);
  const [petRbs, setPetRbs] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "dog"
    );

    // const filteredBestSalesPets = products.filter(
    //   (item) => item.category === "cat"
    // );
    const filteredRb = products.filter(
      (item) => item.category === "rabbit"
    );
    const filteredPetProducts = products.filter(
      (item) => item.category === "productForDog"
    );

    const filteredCat = products.filter(
      (item) => item.category === "cat"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "productForCat"
    );

    setTrendingProducts(filteredTrendingProducts);
    //setBestSalesPets(filteredBestSalesPets);
    setPetProducts(filteredPetProducts);
    setPetCats(filteredCat);
    setPetRbs(filteredRb);
    setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <Helmet title={" Home"}>
      <section className="hero__section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12">
              <div className="hero__content">
                <p className="hero__subtitle">Trending pet in {year}</p>
                <h2>Chăm sóc thú cưng của bạn tốt hơn</h2>
                <p>
                Chăm sóc thú cưng cần có thời gian, công sức và sự kiên nhẫn. Tuy nhiên, đó là trách nhiệm mà chúng ta phải đảm nhận khi nuôi thú cưng. Hãy yêu thương và chăm sóc thú cưng của bạn thật tốt để chúng luôn khỏe mạnh và vui vẻ.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">Mua ngay</Link>
                </motion.button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="hero__img">
                <img src={dogBg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      
      <section className="trending__products">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section__title">Chó cảnh</h2>
            </div>
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList data={trendingProducts} />
            )}
          </div>
        </div>
      </section>
      <section className="popular__category">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section__title">Mèo cảnh</h2>
            </div>
            <ProductsList data={petCats} />
          </div>
        </div>
      </section>

      <section className="timer__count">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12" lg="6" md="12">
              <div className="clock__top-content">
                <h4 className="text-white fs-6">Ưu đãi giới hạn</h4>
                <h3 className="text-white fs-5 mt-2">Chó con thuần chủng</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Ghé thăm cửa hàng</Link>
              </motion.button>
            </div>

            <div className="col-md-6 text-end d-none d-sm-none d-md-block">
              <img src={counterImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="best__sales">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section__title">Thỏ</h2>
            </div>
            <ProductsList data={petRbs}/>
          </div>
        </div>
      </section>
      <section className="new__arrivals">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section__title">Sản phẩm cho chó, mèo</h2>
            </div>
            <ProductsList data={petProducts} />
            <ProductsList data={popularProducts} />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
