import React, { useEffect, useState } from "react";
import "../styles/shop.css";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
// import products from "../assets/data/products";
import ProductLists from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";

const Shop = () => {
  const { data: products, loading } = useGetData("products");

  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    const allitems = products;
    setProductsData(allitems);
  }, [products]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "dog") {
      const filteredProducts = products.filter(
        (item) => item.category === "dog"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "cat") {
      const filteredProducts = products.filter(
        (item) => item.category === "cat"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "rabbit") {
      const filteredProducts = products.filter(
        (item) => item.category === "rabbit"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "productForDog") {
      const filteredProducts = products.filter(
        (item) => item.category === "productForDog"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "productForCat") {
      const filteredProducts = products.filter(
        (item) => item.category === "productForCat"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title=" Shop">
      <CommonSection title="Sản phẩm" />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="filter__widget">
                <select onClick={handleFilter}>
                  <option>Lọc danh mục</option>
                  <option value="dog">Chó</option>
                  <option value="cat">Mèo</option>
                  <option value="rabbit">Thỏ</option>
                  <option value="productForDog">Đồ cho chó</option>
                  <option value="productForCat">Đồ cho mèo</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-end">
              <div className="filter__widget"></div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            {productsData.length === 0 ? (
              <h1 className="fs-3">Shop chưa có sản phẩm nào =,=</h1>
            ) : (
              <ProductLists data={productsData} />
            )}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Shop;
