import React from "react"
import {FcLike} from "react-icons/fc"
import {FcLikePlaceholder} from "react-icons/fc"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Card(prop){
    // useEffect(()=>{
    //     console.log("printing each course");

    // },[])
    const[readmore,setreadmore]=useState(false);
    function readmoreHandler(){
        setreadmore(!readmore);
    }

   
    const description= readmore ? prop.course.description: `${prop.course.description.substring(0,100)}...`;

    const likedCourses=prop.likedCourses;
    const setLiked=prop.setLiked;
    function changeHandeler(){
        if(likedCourses.includes(prop.course.id)){
            setLiked((prev)=>prev.filter((cid)=> (cid!==prop.course.id)))
            toast.warning("like removed")
        }
        else{
            if(likedCourses.length===0){
                setLiked(prop.course.id);
            }
            else{
                setLiked((prev)=>[...prev,prop.course.id]);
            }
            toast.success("Liked courses");
        }
    }


    return(
        <div className="m-4 text-white relative border-2 p-4  ">
            <div>
                         
                <img  src={prop.course.image.url}></img>

                <div>
                    <button onClick={changeHandeler} className="absolute right-4 top-[47%] ">
                      {likedCourses.includes(prop.course.id)?
                       (<FcLike fontSize="1.75rem"/>)
                       :  (<FcLikePlaceholder fontSize="1.75rem" />)}
                    

                    </button>
                </div>
                <div>
                  <h1 className=" text-xl font-bold my-4">  {prop.course.title}</h1>
                    {description}
                    <span>
                    <span className="readMore" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                    </span>
                </div> 

            </div>
            
        </div>
    )

}
export default Card;