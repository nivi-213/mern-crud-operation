import React, { useState, useEffect } from "react";
import { IoMdEye } from "react-icons/io";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { deleteUsers, getAllUsers } from "../service/Api";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
const Alluser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadAllUserData = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    loadAllUserData();
  }, []);
  const handleDelete = async (id) => {
    try {
      await deleteUsers(id);
      setUsers((prevuser) => prevuser.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="container mx-auto p-5 overflow-auto">
      <h1 className="text-3xl font-bold my-3 text-center">Table</h1>
      {loading ? (
        <div className="flex justify-center">
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <></>
      )}
      <table className="table-auto w-full">
        <thead className="bg-gray-300 text-center">
          <tr>
            <th className="px-4 py-2 border">Sl No</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">District</th>
            <th className="px-4 py-2 border">State</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className="text-lg text-center">
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.district}</td>
              <td className="px-4 py-2 border">{user.state}</td>
              <td className="px-4 py-2 border">
                <div className="text-3xl space-x-4 mt-3 flex justify-center items-center">
                  <Link to={`/${user._id}`}>
                    <IoMdEye className="text-blue-700" />
                  </Link>

                  <Link to={`/update/${user._id}`}>
                    <TiEdit className="text-green-700" />
                  </Link>

                  <button onClick={() => handleDelete(user._id)}>
                    <MdDelete className="text-red-700" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alluser;
