import React from 'react';
import mainBanners from "../../data/mainBanners.json"
import BenefitsBar from "./components/BenefitsBar"
import BrandsBar from "./components/BrandsBar"
import Shelf from "../../components/Shelf"
import Mosaic from "./components/Mosaic"
import Slider from "react-slick";
import './styles.scss'
import mainBanner from '../../assets/main-banner.png'

const Home = (): JSX.Element => {

  return (
    <main className='store-home'>
      <section className='store-home--mainBanners'>
        <Slider
          dots={true}
          arrows={true}
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {mainBanners.map((banner) => (
              <div key={banner.imageAlt} className='store-home--mainBanners__item'>
                  <a href={banner.imageHref} className='box-banner'>
                      <img src={mainBanner} alt={banner.imageAlt} />
                  </a>                
              </div>
          ))}
        </Slider>
      </section>
      <BenefitsBar />
      <BrandsBar />
      <Shelf />
      <Mosaic />
            
    </main>
  );
};

export default Home;
