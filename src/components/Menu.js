import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import buyV from '../buy.svg';
import buyP from '../buyP.svg';
import { data } from '../data';
import { Link } from 'react-router-dom';
import Nav from './Nav';
function Menu() {
  const [activate, setActivate] = useState({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1304,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

    ]
  };

  const buyA = (itemId) => {
    setActivate(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };

  return (
    <div className='container'>
      <Nav/>
      <div className='page1'>
        <img id='card' src='./Images/card.png' />
      </div>
      <div className='List-article'>
        <div className='art'>
          <p>Type:</p>
          <div className='List-object'>
            <Slider {...settings}>

              {data.map((item) => (
                <div className='object' key={item.id}>
                  <Link to={`/Article/${item.id}`}>
                    <div className='card-top'>
                      <img src={item.image} alt={item.Name} />
                    </div>
                  </Link>
                  <div className='card-bottom'>
                  <Link to={`/Article+${item.id}`}>
                    <p>#"{item.Name + "#\"'-" + item.prix + "DA"}</p>
                  </Link>
                
                    <img
                      onClick={() => buyA(item.id)}
                      className={`buy ${activate[item.id] ? 'activate' : ''}`}
                      src={activate[item.id] ? buyP : buyV}
                      alt='buy'
                    />
                  </div>    
                </div>
              ))}
            </Slider>

          </div>
        </div>
 

      </div>
      <div className='end'>
        <a href='#first'> <button>UP</button></a>
      </div>
    </div>
  )
}

export default Menu;
