import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Giỏ hàng" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4">Chưa có sản phẩm nào được thêm vào</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Ảnh</th>
                      <th>Sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="col-lg-3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between ">
                  Tổng:
                  <span className="fs-4 fw-bold">₹{totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Phí phát sinh sẽ được tính ở thanh toán
              </p>
              <div>
                <button className="buy__btn w-100">
                  <Link to="/checkout">Thanh toán</Link>
                </button>
                .
                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Tiếp tục mua sắm</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
    console.log("delete item");
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>₹{item.price}</td>
      <td>{item.quantity}px</td>
      <td onClick={deleteProduct}>
        <motion.i
          whileTap={{ scale: 1.2 }}
          class="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
