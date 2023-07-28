import React from "react";
import Filter2 from "./Filter2";
import './style.css';


const Filter=({filterData,NCH})=>
{
    return(
        <div className="filter">
            {filterData.map((data)=>{
                return( 
                    console.log(),
                  <Filter2 data={data} NCH={NCH}  />
                )
            })}
        </div>
    )
}

export default Filter;