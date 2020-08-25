import React, { useState } from 'react';
import PropType from 'prop-types';
export const AddCategory=({setCategories})=>{
  const [inputValue,setinputValue]=useState('Hola mundo')
  const handleInputChange=(e)=>{
    setinputValue(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('haciendo un sumit')
    setCategories(categoria=>[...categoria,inputValue])
  }
  return(
    <form onSubmit={handleSubmit}>
      <h2>{inputValue}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>     
  )
}

AddCategory.propType={
  setCategories:PropType.func.isRequired
}







