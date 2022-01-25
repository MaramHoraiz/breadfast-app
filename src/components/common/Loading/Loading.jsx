import React from "react";

import './style.css';
import LoadingIcon from "../../../assets/GIF/loading-spinner.gif";

export default function Loading(){
    return(
        <div className="loading-container">
        <img className="loading-icon" src={LoadingIcon}/>
        </div>
    )
}