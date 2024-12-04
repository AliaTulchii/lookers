import React, { useState } from "react";
import "./Home.css";
import Brightspace from '../../img/home/Brightspace.png';
import Brightspace1 from '../../img/home/Brightspace1.png';
import Brightspace2 from '../../img/home/Brightspace2.png';
import { motion} from 'framer-motion';

const Home = () => {
  const [hoverItem, setHoverItem] = useState(false)
  // useEffect(() => {
  //   const body = document.body;
  //   if (activeItem) {
  //     body.classList.add("red");
  //   } else {
  //     body.classList.remove("red");
  //   }
  // }, [activeItem]);

  return (
    <section className="home__container container">
      <div className="corner-top-left"></div>
      <div className="corner-top-right"></div>
      <div className="corner-bottom-left"></div>
      <div className="corner-bottom-right"></div>
      <div className="home-background">
        <ul className="upline">
          <li className="upline__item"></li>
          <li className="upline__item upline__item--middle"></li>
          <li className="upline__item"></li>
        </ul>
        



        <ul className="middleline">
          <li className="middleline__item random-img">
            {hoverItem && ( <motion.img 
            src={Brightspace1} 
            alt="img" 
            className="middleline__img"
            animate={{
              y: [-50, 0],
              transition: { ease: ["easeIn", "easeOut"], times: [0, 1], restSpeed: 1, duration: 0.9 }
            }}
            />) }
          </li>
          <li className="middleline__item middleline__item--middle">

            {hoverItem && (<motion.img src={Brightspace} alt="" className="middleline__img middleline__img--middle" animate={{
              y: [-50, 0],
              transition: { ease: ["easeIn", "easeOut"], times: [0, 1], restSpeed: 1, duration: 0.7 }
            }}/> )}
          </li>
          <li className="middleline__item random-img">
            {hoverItem && ( <motion.img src={Brightspace2} alt="" className="middleline__img" animate={{
              y: [-50, 0],
              transition: { ease: ["easeIn", "easeOut"], times: [0, 1], restSpeed: 1, duration: 0.9 }
            }}/>)}
          </li>
        </ul>
        <ul className="downline">
          <li className="downline__item"></li>
          <li className="downline__item downline__item--middle"></li>
          <li className="downline__item"></li>
        </ul>
      </div>

      <div className="home__content">
        <p className="home__text">
          We are a creative team specializing in real estate <br />
          photography and storytelling
        </p>

        <div className="home__downpart">
          <div className="home__lists-wrapper">
            <ul className="home__list">
              <li
               className="home__item"
               onMouseEnter={() => setHoverItem(true)}
                onMouseLeave={() => setHoverItem(false)}
               > 
                <span className="home__item--uppercase" id="bright">Bright space</span>
              estate project</li>
              <li className="home__item "> 
                <span className="home__item--uppercase" id="arch">ArchShots</span> 
              architecture</li>
            </ul>

            <ul className="home__list home__list--right">
            <li className="home__item "> 
              <span className="home__item--uppercase" id="drone">DroneVista</span> 
            drone Photography</li>
            <li className="home__item "> 
              <span className="home__item--uppercase" id="space">SpaceLens</span>
            commercial Spaces</li>
            </ul>
          </div>

          <div className="home__titleWrapper">
            <h2 className="home__title">L</h2>
            <div className="title__figure">
              <div className="title__img title__img--circleOne"></div>
              <div className="title__img title__img--circleTwo"></div>
            </div>

            <h2 className="home__title">kers</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
