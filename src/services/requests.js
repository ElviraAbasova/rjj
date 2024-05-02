import axios from "axios";
import { BASE_URL } from "./api";


export const getAllData = async () => {
    let res = await axios(BASE_URL);
    let data = res.data;
    return data;
  };
  
  export const postData = async (obj) => {
    let res = await axios.post(BASE_URL , obj);
    let data = res.data;
    return data;
  };
  
  export const patchById = async (id, obj) => {
    let res = await axios.patch(BASE_URL + id, obj);
    let data = res.data;
    return data;
  };
  
  export const getDataById = async (id) => {
    let res = await axios(BASE_URL + id);
    let data = res.data;
    return data;
  };
  
  export const deleteById = async (id) => {
    let res = await axios.delete(BASE_URL + id);
    let data = res.data;
    return data;
  };
  

  
