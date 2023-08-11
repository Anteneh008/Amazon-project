import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import ImgSlider from "./ImageSlider";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51RPiINhM7L._SX1500_.jpg"
          alt=""
        /> */}
        <div className="home__image">
          <ImgSlider />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="FLYBIRD Weight Bench, Adjustable Strength Training Bench for Full Body Workout with Fast Folding-New Version"
            price={148.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61BZVvxncZL._AC_SX466_.jpg"
          />
          <Product
            id="12321342"
            title="LISEN for MagSafe Magnetic Phone Holder Car Mount, Phone Mount Holder for Car Vent Magnetic [Easily Install] Hands Free iPhone Car Holder Mount Fit for iPhone 14 13 12 Pro Plus Max Mini MagSafe Phones"
            price={19.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71umhqkp3PL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="12321343"
            title="ASUS 2023 Zenbook Pro 17 17.3” 2.5K 165Hz Business Laptop, AMD Ryzen 9 6900HX, 16GB RAM, 1TB PCIe SSD, Backlit Keyboard, NVIDIA GeForce RTX 3050, Win 11, Black, 32GB SnowBell USB Card"
            price={1199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/6108HODR8AL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
          <Product
            id="12321344"
            title="TP-Link AC1750 Smart WiFi Router (Archer A7) -Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control, QoS"
            price={124.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321345"
            title="HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink (26K67A), white"
            price={400.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/61S+R5SLmrL._AC_UL480_QL65_.jpg"
          />
          <Product
            id="12321346"
            title="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life"
            price={134.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL480_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321347"
            title="PlayStation 5 Console (PS5)
            Visit the PlayStation Store
            Platform : PlayStation 5"
            price={499.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/31i9Fft3dqL._SY300_SX300_QL70_FMwebp_.jpg"
          />
          <Product
            id="12321348"
            title="Gameboy Phone Case for iPhone 14 Pro Max with Tempered Glass Phone Screen Protector,Playable 36 Retro Classic Games, Handheld Video Game Console iPhone"
            price={22.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61tsCn4VJSL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="12321349"
            title="AMAZTIM Smart Watch, 60 Days Extra-Long Battery, 50M Waterproof, Rugged Military Bluetooth Call(Answer/Dial Calls) Fitness Tracker, 1.85 inch Ultra Large HD Display, AI Voice"
            price={99.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/71vozvKx7hL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123213410"
            title="SAMSUNG Odyssey CRG Series 49-Inch Dual QHD (5120x1440) Gaming Monitor, 120Hz, Curved, QLED, HDR, Height Adjustable Stand, Radeon FreeSync (LC49RG90SSNXZA)"
            price={199.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/81QEJYyspjL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
          <Product
            id="1232134101"
            title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide/ Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN1)"
            price={199.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/71YIbSoWRzL._AC_SL1500_.jpg"
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
