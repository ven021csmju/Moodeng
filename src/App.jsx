import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const [size, setSize] = useState(100); 
  const [isClicked, setIsClicked] = useState(false); 


  const [mainImage, setMainImage] = useState('https://www.khaosod.co.th/wpapp/uploads/2024/09/Nong-Moo-Deng4548-5.jpg');


  const increaseValue = (amount) => {
    const newValue = value + amount;
    setValue(newValue);
    increaseSize(); 
    setIsClicked(true); 

  
    if (newValue >= 100 && mainImage !== 'https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/417801701_885056489762082_5171117265331353488_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OsV9d3tzL28Q7kNvgHJAFeU&_nc_ht=scontent.fbkk6-2.fna&_nc_gid=AhlBR0YemBI0teKUBzUQvs0&oh=00_AYCJOk-S4dl1ww8S26uCzrV3CIw8c433Ik9WM2Z02gcisg&oe=66F33C8B') {
      setMainImage('https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/417801701_885056489762082_5171117265331353488_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OsV9d3tzL28Q7kNvgHJAFeU&_nc_ht=scontent.fbkk6-2.fna&_nc_gid=AhlBR0YemBI0teKUBzUQvs0&oh=00_AYCJOk-S4dl1ww8S26uCzrV3CIw8c433Ik9WM2Z02gcisg&oe=66F33C8B'); 
    }


    setTimeout(() => setIsClicked(false), 300);
  };


  const increaseSize = () => {
    setSize(size + 20); 
  };

  return (
    <div className="container">
      <h1>LEVEL :  {value}</h1>

     
      <img
        src={mainImage}
        alt="Main Image"
        className={`main-image ${isClicked ? 'clicked' : ''}`}
        style={{ width: size, height: size }}
      />

      <div className="button-container">
     
        <img
          src="https://i.pinimg.com/564x/93/28/03/9328034cc6bfc65fad20cd666d5c6fe7.jpg" 
          alt="Increase by 1"
          onClick={() => increaseValue(5)}
          className="button-image"
        />

        <img
          src="https://www.pngbie.com/assets/images/icon/Pngbie-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9F%E0%B8%A3%E0%B8%B5-20230921002816.png" 
          alt="Increase by 5"
          onClick={() => increaseValue(10)}
          className="button-image"
        />

        <img
          src="https://i.pinimg.com/736x/56/16/73/561673bd36c07f60a0f5a88131634cf5.jpg" 
          alt="Increase by 10"
          onClick={() => increaseValue(20)}
          className="button-image"
        />
      </div>
    </div>
  );
}

export default App;
