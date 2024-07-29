import React from 'react';
import "./Loader.scss";
import { loader_svg, loader_gif } from "../../utils/images";

const Loader = () => {
  return (
    <div className='loader my-5'>
      <div className='container flex align-center justify-center'>
        <img src = {loader_svg} alt = "" />
        <img src = {loader_gif} alt = "" />
      </div>
    </div>
  )
}

export default Loader