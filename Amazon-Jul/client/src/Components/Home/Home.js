import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51RPiINhM7L._SX1500_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink (26K67A), white"
            price={400.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/61S+R5SLmrL._AC_UL480_QL65_.jpg"
          />
          <Product
            id="12321342"
            title="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life"
            price={134.96}
            rating={3}
            image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL480_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321343"
            title="PlayStation 5 Console (PS5)
            Visit the PlayStation Store
            Platform : PlayStation 5"
            price={499.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/31i9Fft3dqL._SY300_SX300_QL70_FMwebp_.jpg"
          />
          <Product
            id="12321344"
            title="Gameboy Phone Case for iPhone 14 Pro Max with Tempered Glass Phone Screen Protector,Playable 36 Retro Classic Games, Handheld Video Game Console iPhone"
            price={22.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/61tsCn4VJSL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="12321345"
            title="AMAZTIM Smart Watch, 60 Days Extra-Long Battery, 50M Waterproof, Rugged Military Bluetooth Call(Answer/Dial Calls) Fitness Tracker, 1.85 inch Ultra Large HD Display, AI Voice"
            price={99.96}
            rating={3}
            image="https://m.media-amazon.com/images/I/71vozvKx7hL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321346"
            title="SAMSUNG Odyssey CRG Series 49-Inch Dual QHD (5120x1440) Gaming Monitor, 120Hz, Curved, QLED, HDR, Height Adjustable Stand, Radeon FreeSync (LC49RG90SSNXZA)"
            price={199.96}
            rating={1}
            image="https://m.media-amazon.com/images/I/81QEJYyspjL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
