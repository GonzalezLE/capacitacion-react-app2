import React, { useState } from 'react';
import PropType from 'prop-types';
export const AddCategory=({setCategories})=>{
  const [inputValue,setinputValue]=useState('Hola mundo')
  const handleInputChange=(e)=>{
    setinputValue(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();    
    setCategories(categoria=>[...categoria,inputValue])
    setinputValue('')
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

AddCategory.PropType={
  setCategories:PropType.func.isRequired
}







