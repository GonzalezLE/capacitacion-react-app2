import { useState, useEffect } from "react"
import {getGits} from './../helpers/getGifs'
export const useFetchGifs =(category)=>{
   const [state,setstate]=useState({
      data:[],
      loading:true
   });
  
    
    useEffect(()=>{
      getGits(category)
      .then(imgs=>{
        setstate({
          data : imgs,
          loading :false}
        )
      })
    },[]);

   return state;
}