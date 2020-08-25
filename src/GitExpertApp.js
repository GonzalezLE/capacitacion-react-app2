import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GitExpertApp = () => {
  const [categories,setCategories]=useState(['One Punch','Samurai X','Drangon Ball']);

  const handleAdd=()=>{
    setCategories(
      categoria=>[...categoria,'Pokemón']
    )
  }
  return(
    <>
    <AddCategory setCategories={setCategories}/>
    <h2>GitExpertaApp</h2>
    <hr/>
    <button onClick={handleAdd}>Agregar</button>
    <ul>
      {
        categories.map(categorie=>{
        return <li key={categorie} >{categorie}</li>
        })
      }
    </ul>
    </>
  )
}

