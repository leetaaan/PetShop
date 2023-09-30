import React, { useState } from "react";
import { toast } from "react-toastify";
import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [loading, setLoading] = useState(false);

  const [entertitle, setTitle] = useState("");
  const [entershortDesc, setShortDesc] = useState("");
  const [enterdescription, setDescription] = useState("");
  const [entercategory, setCategory] = useState("");
  const [enterprice, setPrice] = useState("");
  const [enterproductImg, setProductImg] = useState(null);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    // console.log(enterproductImg.name);
    e.preventDefault();
    setLoading(true);

    // ======= add product to the firebase database =========

    try {
      const docRef = collection(db, "products");
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterproductImg.name}`
      );

      const uploadTask = uploadBytesResumable(storageRef, enterproductImg);

      uploadTask.on(
        () => {
          toast.error("images not uploaded!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: entertitle,
              shortDesc: entershortDesc,
              description: enterdescription,
              category: entercategory,
              price: enterprice,
              imgUrl: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success("Product successfully added!");
      navigate("/dashboard/all-products");
    } catch (error) {
      setLoading(false);
      toast.error("Product not added");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {loading ? (
              <h4 className="py-5">Loading...</h4>
            ) : (
              <>
                <h4 className="mb-5">Add Product</h4>
                <form action="" onSubmit={addProduct}>
                  <div className="form__group">
                    <span>Product title</span>
                    <input
                      type="text"
                      name="title"
                      placeholder="Product name"
                      value={entertitle}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form__group">
                    <span>Short description</span>
                    <input
                      type="text"
                      name="shortDesc"
                      placeholder="Product's description in brief"
                      value={entershortDesc}
                      onChange={(e) => setShortDesc(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form__group">
                    <span>Description</span>
                    <input
                      type="text"
                      name="description"
                      placeholder="Product's description in detail"
                      value={enterdescription}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <div className="form__group w-50">
                      <span>Price</span>
                      <input
                        type="number"
                        name="price"
                        placeholder="₹1000"
                        value={enterprice}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group w-50">
                      <span>Category</span>
                      <select
                        className="w-50 p-2 rounded border-dark"
                        name="category"
                        value={entercategory}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                      >
                        <option className="text-center">Select Category</option>
                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="watch">Watch</option>
                        <option value="mobile">Mobile</option>
                        <option value="wireless">Wireless</option>
                      </select>
                    </div>
                  </div>
                  <div className="form__group">
                    <span>Product Image</span>
                    <input
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      name="imgUrl"
                      onChange={(e) => setProductImg(e.target.files[0])}
                      required
                    />
                  </div>
                  <button type="submit" className="buy__btn btn">
                    Add Product
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
