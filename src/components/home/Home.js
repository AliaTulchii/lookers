import React from 'react'
import './styles.css'

const Home = () => {
  return (
    <section className='home__container container'>
        <div class="corner-top-left"></div>
    <div class="corner-top-right"></div>
    <div class="corner-bottom-left"></div>
    <div class="corner-bottom-right"></div>
        <div className='home-background'></div>

        <div className='home__content'>
        <p className='home__text'>
        We are a creative team specializing in real estate <br/>
        photography and storytelling
        </p>

        <div className='home__downpart'>
        <div className='home__listsWrapper'>
            <ul className='home__list'>
                <li className='home__item home__item--uppercase'>Bright space</li>
                <li className='home__item'>estate project</li>
                <li className='home__item home__item--uppercase'>ArchShots</li>
                <li className='home__item'>architecture</li>
            </ul>

            <ul className='home__list home__list--right'>
                <li className='home__item home__item--uppercase'>DroneVista</li>
                <li className='home__item'>Drone Photography</li>
                <li className='home__item home__item--uppercase'>SpaceLens</li>
                <li className='home__item'>Commercial Spaces</li>
            </ul>
        </div>

        <div className='home__titleWrapper'>
        <h2 className='home__title'>L</h2>
        <div class="title__figure">
    <div class="title__img title__img--circleOne"></div>
    <div class="title__img title__img--circleTwo"></div>
</div>
        
        {/* <div className="title__figure">
            <div className='title__img'></div>
        <div className='title__circleOne'></div>
        <div className='title__circleTwo'></div>
        
        </div> */}
        <h2 className='home__title'>kers</h2>
        </div>
        
       

        </div>
        </div>
        
    </section>
  )
}

export default Home
