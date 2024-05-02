import React, { useEffect, useRef } from "react";
import { postData } from "../services/requests";


const Post = () => {
  

  const company = useRef()
  const contact = useRef()
  const cityy = useRef()
  const regionn= useRef()




  const handlePost = (e) => {
    e.preventDefault()
    let obj ={
      companyName: company.current.value,
      contactName: contact.current.value,
      address:{
        city: cityy.current.value,
        region: regionn.current.value,
  
      }
    }
  
    postData(obj)
   company.current.value = ""
   contact.current.value = ""
   cityy.current.value = ""
    regionn.current.value = ""



    
  }

  return (
<form className="max-w-sm mx-auto" onSubmit={(e)=>handlePost(e) }>
  <div className="mb-5">
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
     companyName
    </label>
    <input ref={company}
      type="text"
      id="email"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"

    />
  </div>
  <div className="mb-5">
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
     contactName
    </label>
    <input
    ref={contact}
      type="text"
      id="password"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      required=""
    />
  </div>
  <div className="mb-5">
    <label
      htmlFor="text"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      city
    </label>
    <input
    ref={cityy}
      type="text"
      id="repeat-password"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      required=""
    />
  </div>
  <div className="mb-5">
    <label
      htmlFor="region"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      region
    </label>
    <input
    ref={regionn}
      type="text"
      id="region"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      required=""
    />
  </div>

  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Post
  </button>
</form>

  );
};

export default Post;
