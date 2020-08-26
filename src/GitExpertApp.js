import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';
export const GitExpertApp = () => {
  const [categories,setCategories]=useState(['One Punch']);

  // const handleAdd=()=>{
  //   setCategories(
  //     categoria=>[...categoria,'Pokemón']
  //   )
  // }
  return(
    <>
    <AddCategory setCategories={setCategories}/>
    <h2>GitExpertaApp</h2>
    <hr/>
    
    <ul>
      {
        categories.map(categorie=>(
          <GifGrid 
            category={categorie} 
            key={categorie}
          />
        ))
      }
    </ul>
    </>
  )
}

