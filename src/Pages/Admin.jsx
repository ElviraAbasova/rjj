import React, { useEffect, useReducer } from "react";
import reducer from "../Reducer/reducer";
import { deleteById } from "../services/requests";
import { useNavigate } from "react-router-dom";
const Admin = ({ state, dispatch }) => {
  let navigate = useNavigate();

  const deleteItem = (id) => {
    deleteById(id);
    dispatch({
      type: "SetDelete",
      id,
    });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Company name
            </th>
            <th scope="col" className="px-6 py-3">
              Contact name
            </th>
            <th scope="col" className="px-6 py-3">
              City
            </th>
            <th scope="col" className="px-6 py-3">
              Region
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((elem) => {
            return (
              <tr
                key={elem.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {elem.companyName}
                </th>
                <td className="px-6 py-4">{elem.contactName}</td>
                <td className="px-6 py-4">{elem.address.city}</td>
                <td className="px-6 py-4">{elem.address.region}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() =>
                      navigate("/edit", { state: { id:elem.id } })
                    }
                  >
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => deleteItem(elem.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
