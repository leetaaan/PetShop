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
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <form className="billing__form">
                <div className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </div>

                <div className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </div>

                <div className="form__group">
                  <input type="number" placeholder="Phone number" />
                </div>

                <div className="form__group">
                  <input type="text" placeholder="Street address" />
                </div>

                <div className="form__group">
                  <input type="text" placeholder="City" />
                </div>

                <div className="form__group">
                  <input type="text" placeholder="Postal Code" />
                </div>

                <div className="form__group">
                  <input type="text" placeholder="Country" />
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>₹{totalAmt}</span>
                </h6>
                <h6>
                  Shipping: <br /> Free Shipping <span>₹0</span>
                </h6>
                <h4 className="mt-3">
                  Total Cost: <span>₹{totalAmt}</span>
                </h4>
                <Link to="/">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="buy__btn auth__btn w-100"
                  >
                    {/* Place an order */}
                      Place Order
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
