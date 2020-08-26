import React from 'react';

const GetGits = async ()=>{
  const url='https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=J2HKAWkWu8OlknS24lpfpa5gvKJ0OEIO';
  const resp= await fetch(url)
  const {data}=await resp.json();
  
  const gits=data.map(img=>{
    return {
      id:img.id,
      title:img.title,
      url:img.images?.downsized_medium.url
    }
  })
  console.log(gits);
}
GetGits();
export const GifGrid=({category})=>{
  return(
    <div>
      <h3>{category}</h3>
    </div>
  )
}