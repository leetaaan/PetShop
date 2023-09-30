import React, { useState } from "react";
import "../styles/login.css";
import Helmet from "../components/Helmet/Helmet";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log(user);
      setLoading(false);
      toast.success("Successfully logged in");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet title="Login">
      <div className="container">
        <div className="row">
          {loading ? (
            <div className="col-lg-12 text-center h-100">
              <h6>Loading...</h6>
            </div>
          ) : (
            <div className="col-lg-6 m-auto mt-5 mb-5 text-center">
              <h3 className="fw-bold mt-3 mb-4">Login</h3>
              <form action="" className="auth__form" onSubmit={signIn}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter you email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Enter you password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="buy__btn auth__btn mb-3"
                >
                  Login
                </motion.button>
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup">Create an account</Link>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
