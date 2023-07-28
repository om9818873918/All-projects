import React from "react";
import './App.css';
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { apiUrl , filterData } from "./data";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";



const App = () => {
  const[dataId,setId]=useState('1');
  const[newCourse,setNewCourses]=useState([]);
  const[courses,setCourses]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
       const res= await fetch(apiUrl);
       const output= await res.json();
       //save data into courses
       await setCourses(output.data)

     

      }
      catch(e){
      toast.error("Something went wrong");


      }
      
    }
    fetchData();
  },[]);

  function NCH(id){
    setId(id);
   
    console.log(id);
    if(id==1){
      setNewCourses(courses)
    }
    
   else if(id==2){
    setNewCourses(courses.Development)
    console.log(newCourse);
    
    
   }
   else if(id==3){
    setNewCourses(courses.Business)
    console.log(newCourse);

   }
   else if(id==4){
    setNewCourses(courses.Design)
   
    console.log(newCourse);

   }
   else if(id==5){
    setNewCourses(courses.Lifestyle)
    console.log(newCourse);
   }


  }

  
  return(
          <div className="app"> 
         
           
      
            
           <Navbar/>
           <Filter
           filterData={filterData}  NCH={NCH} />
           <Cards courses={newCourse} id={dataId}  />
  

        
     
          
          
          </div>
 

  );
};

export default App;
