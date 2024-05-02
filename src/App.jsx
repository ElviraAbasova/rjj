import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Admin from "./Pages/Admin";
import Edit from "./Pages/Edit";
import Post from "./Pages/Post";
import "./index.css"
import { getAllData } from "./services/requests";
import { useEffect, useReducer } from "react";
import reducer from "./Reducer/reducer";


export default function App() {
  const [state, dispatch] = useReducer(reducer,
    {
      data: [],
    })

  
    
    useEffect(()=>{
      getAllData().then((res)=>{
        dispatch({
          type: "SetData",
          data: res
        })

      })

    },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Admin state = {state} dispatch={dispatch}/>} />
          <Route path="post" element={<Post/>} />
          <Route path="edit" element={<Edit state = {state} dispatch={dispatch} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);