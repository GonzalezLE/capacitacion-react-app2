import React, { useState,useEffect } from 'react';
import { GitGriditem } from './GifGriditem';
import {getGits} from './../helpers/getGifs';

export const GifGrid=({category})=>{
  const[images,setimages]=useState([]);
  //componenDimount
  useEffect(()=>{
    getGits(category)
      .then(imagenes=>setimages(imagenes))
  },[category])

  
  
  //GetGits();
  return(
    <>
    <h3>{category}</h3>   
    <div className="card-grid">
         
      {
        images.map((img)=>{
          return <GitGriditem
          key={img.id}
          {...img} />
        })
      }      
    </div>
    </>
  )
}