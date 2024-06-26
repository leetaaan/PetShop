import React, { useState } from "react";
import "../styles/login.css";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// import { motion } from "framer-motion";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("signup");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error('Lỗi tải hình ảnh');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //update user profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });
            //store user data in firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success("Dăng ký thành công");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Đã có lỗi xảy ra");
    }
  };

  return (
    <Helmet title="Signup">
      <div className="container">
        <div className="row">
          {loading ? (
            <div className="col-lg-12 text-center">
              <h5 className="fw-bold">Đang tải...</h5>
            </div>
          ) : (
            <div className="col-lg-6 m-auto mt-5 mb-5 text-center">
              <h3 className="fw-bold mt-3 mb-4">Đăng ký</h3>
              <form action="" className="auth__form" onSubmit={signUp}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Nhập tên của bạn"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu của bạn"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <button type="submit" className="buy__btn auth__btn mb-3">
                  Tạo tài khoản
                </button>
                <p>
                Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default Signup;
