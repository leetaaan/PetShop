import React from "react";
import useGetData from "../custom-hooks/useGetData";
import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Users = () => {
  const { data: usersData, loading } = useGetData("users");

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("User deleted");
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="fw-bolc">Users</h4>
          </div>
          <div className="col-lg-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h5 className="py-5 fw-bold">Loading...</h5>
                ) : (
                  usersData?.map((user) => (
                    <tr key={user.uid}>
                      <td>
                        <img src={user.photoURL} alt="" />
                      </td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button onClick={()=>{deleteUser(user.id)}} className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
