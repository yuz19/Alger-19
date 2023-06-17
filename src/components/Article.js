import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data';
import Nav from './Nav';
function Article() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const searchById = async () => {
    const foundItem = data.find((item) => item.id === id);
    return foundItem;
  };

  useEffect(() => {
    const fetchItem = async () => {
      const item = await searchById();
      setItem(item);
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Nav/>
    <div className='article'>
     
      <img src={'.'+item.image} alt={item.Name} />
      <div className='article-desc'>
        <h1>{item.Name}</h1>
    
        <p>Prix: {item.prix} DA</p>
        <p>Date: {item.Date}</p>
        
 
        <p>Size</p>
        <ul>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
        </ul>
        <button>
          ADD TO CART
        </button>
      </div>

    </div>
    </div>

  );
}

export default Article;
