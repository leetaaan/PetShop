import React from "react";
import "../styles/checkout.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmt = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h6 className="mb-4 fw-bold">Thông tin hóa đơn</h6>
              <form className="billing__form">
                <div className="form__group">
                  <input type="text" placeholder="Nhập tên của bạn" />
                </div>

                <div className="form__group">
                  <input type="email" placeholder="Nhập địa chỉ Email" />
                </div>

                <div className="form__group">
                  <input type="number" placeholder="Nhập số điện thoại" />
                </div>

                <div className="form__group">
                  <input type="text" placeholder="Địa chỉ nhà" />
                </div>

                <div className="form__group">
                  <input type="text" placeholder="Thành phố" />
                </div>

                <div className="form__group">
                  <input type="text" placeholder="Tỉnh" />
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="checkout__cart">
                <h6>
                 Tổng số lượng: <span>{totalQty}</span>
                </h6>
                <h6>
                  Giá tiền: <span>{totalAmt} Đ</span>
                </h6>
                <h6>
                  Phí giao hàng: <br /> Miễn phí <span>0 Đ</span>
                </h6>
                <h4 className="mt-3">
                  Tổng tiền: <span>{totalAmt} Đ</span>
                </h4>
                <Link to="/">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="buy__btn auth__btn w-100"
                  >
                    {/* Place an order */}
                      Đặt hàng
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Checkout;
