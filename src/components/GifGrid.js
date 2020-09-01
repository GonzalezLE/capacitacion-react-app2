import React from 'react';
import { GitGriditem } from './GifGriditem';

import {useFetchGifs} from './../hooks/useFetchGifs'
export const GifGrid=({category})=>{
  
  const {data:images,loading} = useFetchGifs(category);
  //console.log(data,loading);  
  //GetGits();
  return(
    <>
    <h3>{category}</h3>   
    {loading&&<p>Cargando espera :D</p>}
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
