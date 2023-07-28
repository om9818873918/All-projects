import React from "react"
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards=({courses,id})=>{
    let allCourses=[]; useEffect(()=>{
        getCourses();
    })

    const [likedCourses,setLiked]=useState([null]);

    

    //returns you a list of all the courses recieved from the api response
    const getCourses=()=>{
        if(id==1){
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })}
        else{
            Object.values(courses).forEach((course)=>{
                allCourses.push(course);
            })
            }

        
        return allCourses;
    }
//    useEffect(()=>{

//     console.log(allCourses);
//    })
    return(
        <div className="w-[90vw]  mx-auto mt-[20px] grid grid-cols-3 ">            {
            
          
            getCourses().map((course)=>{
 
               return( <Card  course={course}
                likedCourses={likedCourses}
                setLiked={setLiked} />)
            })
            
            }
        </div>
    );
   
}

export default Cards;