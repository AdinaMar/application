import react from 'react';
import { useState, useEffect } from 'react';

const Cards = () => {
   const [data, setData] = useState();
  
   useEffect(() => {
    getData();
   }, []);

   const getData = async () =>{
    const response = await fetch(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed`);
    const data = await response.json(); }
    
   return (
        <div>
        
    
        
        
        
        
        </div>
    )
}

export default Cards;