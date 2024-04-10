import { useState, useEffect } from "react";

import { getSingleUsers } from "../service/Api";
import { Oval } from "react-loader-spinner";
import { useParams } from "react-router-dom";
const SingleUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { _id } = useParams();

  useEffect(() => {
    const loadSingleuser = async () => {
      try {
        const response = await getSingleUsers(_id);
        setUsers(response);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    loadSingleuser();
  }, [_id]);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold my-3">Singleuser</h1>
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
          </tr>
        </thead>
        <tbody>
          <tr key={users._id} className="text-lg text-center">
            <td className="px-4 py-2 border">{1}</td>
            <td className="px-4 py-2 border">{users.name}</td>
            <td className="px-4 py-2 border">{users.email}</td>
            <td className="px-4 py-2 border">{users.district}</td>
            <td className="px-4 py-2 border">{users.state}</td>
            <td className="px-4 py-2 border"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleUser;
