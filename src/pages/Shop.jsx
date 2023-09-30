import React, { useEffect, useState } from "react";
import "../styles/shop.css";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
// import products from "../assets/data/products";
import ProductLists from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";


const Shop = () => {

  const { data: products, loading } = useGetData('products');

  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    const allitems = products;
    setProductsData(allitems);
  }, [products])

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
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
      <CommonSection title="Products" />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="filter__widget">
                <select onClick={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
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
              <h1 className="fs-3">Product not found!</h1>
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
