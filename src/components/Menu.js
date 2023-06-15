import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import buy from '../buy.svg'
import {data} from '../data'
function Menu() {
 
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
  return (
    <div className='container'>
      <nav  id='first'>
        <img src='./images/icon.svg' alt='' width={200}/>
        <ul>
          <li>Homme</li>
          <li>Femme</li>
          <li>Collections</li>
        </ul>
      </nav>
      <div className='page1'>
          <img id='card' src='./Images/card.png'/>
      </div>
      <div className='List-article'>
        <div className='article'>
          <p>Type:</p>
          <div className='List-object'>
            <Slider {...settings}>
            
              {data.map((item)=>(
                  <div className='object' key={item.id}>
                      <div className='card-top'> 
                          <img src={item.image}/>
                      </div>
                      <div className='card-bottom'>
                          <p>{item.Name+" "+item.prix+"DA"}</p>
                          {buy}
                      </div>
                  </div>
              ))}
            </Slider>

          </div>
        </div>
        <div className='article'>
          <p>Type:</p>
          <div className='List-object'>
            <Slider {...settings}>
            
              {data.map((item)=>(
                  <div className='object' key={item.id} >
                      <div className='card-top'> 
                          <img src={item.image}/>
                      </div>
                      <div className='card-bottom'>
                          <p>{item.Name+""+item.prix}</p>
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

export default Menu