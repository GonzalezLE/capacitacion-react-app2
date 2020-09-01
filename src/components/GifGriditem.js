import React from 'react';

export const GitGriditem=({id,title,url})=>{
  
  return(
    <div className="card animate__animated animate__zoomIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}