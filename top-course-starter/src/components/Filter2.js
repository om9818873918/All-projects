import { useEffect, useState } from "react";
import './style.css';

function Filter2({data,NCH}){
    function SM(){
        NCH(data.id);
        //this helps getting the right button which is being called
        
    }
return(
    <span className="m-4 bg-green text-green filter2" >
    <button type="unchecked"  onClick={SM}>

    {data.title}
    
    </button></span>)

}
export default Filter2;