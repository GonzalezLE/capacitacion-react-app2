export const getGits = async (category)=>{  
  const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=J2HKAWkWu8OlknS24lpfpa5gvKJ0OEIO`;
  const resp= await fetch(url)
  const {data}=await resp.json();
  
  const gits=data.map(img=>{
    return {
      id:img.id,
      title:img.title,
      url:img.images?.downsized_medium.url
    }
  })
  
  return gits
}