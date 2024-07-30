import React from 'react';
import "./Loader.scss";
import { loader_svg } from "../../utils/images";

const Loader = () => {
  console.log("weszło")
  return (
    <div className='loader my-5'>
      <div className='container flex align-center justify-center'>
        <img src = {loader_svg} alt = "" />
      </div>
    </div>
  )
}

export default Loader