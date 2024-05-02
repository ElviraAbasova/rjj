import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { patchById } from '../services/requests';

const Edit = ({ state, dispatch }) => {
  const location = useLocation();
 
  const editId = location.state.id;
  const find = state.data.find(item => item.id === editId);
  const [formData, setFormData] = useState({
    companyName: find.companyName,
    contactName: find.contactName,
    city: find.address.city,
    region: find.address.region
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await patchById(editId, formData);
    
    } catch (error) {
   
      console.error('Error editing data:', error);
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Company Name
        </label>
        <input
          value={formData.companyName}

          type="text"
          id="companyName"
          name="companyName"
          onChange={(e)=> setFormData.companyName(e.target.value)}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="contactName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Contact Name
        </label>
        <input
          value={formData.contactName}
          type="text"
          id="contactName"
          name="contactName"
          onChange={(e)=> setFormData.contactName(e.target.value)}

          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
      </div>
      <div className="mb-5">
        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          City
        </label>
        <input
          value={formData.city}
          type="text"
          id="city"
          name="city"
          onChange={(e)=> setFormData.city(e.target.value)}

          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
      </div>
      <div className="mb-5">
        <label htmlFor="region" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Region
        </label>
        <input
          value={formData.region}
          type="text"
          id="region"
          name="region"
          onChange={(e)=> setFormData.region(e.target.value)}

          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Edit
      </button>
    </form>
  );
};

export default Edit;