import React, { useState, useEffect } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";

import counterImg from "../assets/images/counter-timer-img.png";

import useGetData from "../custom-hooks/useGetData";


const Home = () => {
  const { data: products, loading } = useGetData('products');
  
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <Helmet title={" Home"}>
      <section className="hero__section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Mordern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident id ad suscipit molestiae velit, libero ea
                  repudiandae quisquam unde consequatur ipsam autem voluptas
                  beatae quia asperiores rerum possimus nostrum esse.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">Shop Now</Link>
                </motion.button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="hero__img">
                <img src={heroImg} alt="" />
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
              <h2 className="section__title">Trending Chairs</h2>
            </div>
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList data={trendingProducts} />
            )}
          </div>
        </div>
      </section>

      <section className="best__sales">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section__title">Best Selling Sofas</h2>
            </div>
            <ProductsList data={bestSalesProducts} />
          </div>
        </div>
      </section>

      <section className="timer__count">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12" lg="6" md="12">
              <div className="clock__top-content">
                <h4 className="text-white fs-6">Limited Offers</h4>
                <h3 className="text-white fs-5 mt-2">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </div>

            <div className="col-md-6 text-end d-none d-sm-none d-md-block">
              <img src={counterImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="new__arrivals">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </div>
            <ProductsList data={mobileProducts} />
            <ProductsList data={popularProducts} />
          </div>
        </div>
      </section>

      <section className="popular__category">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section__title">Popular in Accessories</h2>
            </div>
            <ProductsList data={wirelessProducts} />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
