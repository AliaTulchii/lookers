import React, { useState } from "react";
import "./Home.css";
import Brightspace from '../../img/home/Brightspace.png';
import Brightspace1 from '../../img/home/Brightspace1.png';
import Brightspace2 from '../../img/home/Brightspace2.png';
import Arch1 from '../../img/home/archshots1.png'
import Arch2 from '../../img/home/archshots2.png'
import Arch from '../../img/home/archshots.png'
import Drone from '../../img/home/DroneVista.png'
import Drone1 from '../../img/home/DroneVista1.png'
import Drone2 from '../../img/home/DroneVista2.png'
import Space  from '../../img/home/SpaceLens.png'
import Space1  from '../../img/home/SpaceLens1.png'
import Space2  from '../../img/home/SpaceLens2.png'





import { motion} from 'framer-motion';

const Home = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  const liItems = [0, 1, 2];
  const items = {
    bright: [Brightspace, Brightspace1, Brightspace2],
    arch:[Arch, Arch1, Arch2],
    drone: [Drone, Drone1, Drone2],
    space: [Space, Space1, Space2]
  }



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
        
{liItems.map((index) => (
  <li
    key={index}
    className={`middleline__item ${
      index === 1 ? "middleline__item--middle" : "random-img"
    }`}
  >
    {items[hoveredItem]?.[index] ? (
      <motion.img
        src={items[hoveredItem][index]}
        alt={`img-${index}`}
        className="middleline__img"
        animate={{
          scale: [0.5, 1],
          transition: {
            ease: ["easeIn", "easeOut"],
            times: [0, 1],
            restSpeed: 1,
            duration: 0.7 ,
          },
        }}
      />
    ) : null}
  </li>
))}

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
               onMouseEnter={() => setHoveredItem("bright")}
                onMouseLeave={() => setHoveredItem(null)}
               > 
                <span className="home__item--uppercase" id="bright">Bright space</span>
              estate project</li>
              <li 
              className="home__item "
              onMouseEnter={() => setHoveredItem("arch")}
                onMouseLeave={() => setHoveredItem(null)}
              > 
                <span className="home__item--uppercase" id="arch">ArchShots</span> 
              architecture</li>
            </ul>

            <ul className="home__list home__list--right">
            <li
             className="home__item "
             onMouseEnter={() => setHoveredItem("drone")}
                onMouseLeave={() => setHoveredItem(null)}
             > 
              <span className="home__item--uppercase" id="drone">DroneVista</span> 
            drone Photography</li>
            <li 
            className="home__item "
            onMouseEnter={() => setHoveredItem("space")}
                onMouseLeave={() => setHoveredItem(null)}
            > 
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
