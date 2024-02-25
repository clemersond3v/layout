import React from 'react';
import mainBanners from "../../data/mainBanners.json"
import BenefitsBar from "./components/BenefitsBar"
import BrandsBar from "./components/BrandsBar"
import Shelf from "../../components/Shelf"
import Mosaic from "./components/Mosaic"
import Slider from "react-slick";
import './styles.scss'
import mainBanner from '../../assets/main-banner.png'
import mainBannerMobile from '../../assets/main-banner-mobile.png'

const PrevArrowIcon = (props: any) => (
  <button {...props}>
    <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.514971 14.7561L14.7568 0.514971C15.4434 -0.171657 16.5573 -0.171657 17.2439 0.514971L18.9052 2.17621C19.5911 2.86211 19.5918 3.97302 18.9081 4.66038L7.62087 15.9996L18.9074 27.3396C19.5918 28.027 19.5903 29.1379 18.9044 29.8238L17.2432 31.485C16.5566 32.1717 15.4427 32.1717 14.7561 31.485L0.514971 17.2432C-0.171657 16.5566 -0.171657 15.4427 0.514971 14.7561Z" fill="#353535"/>
    </svg>
  </button>
);

const NextArrowIcon = (props: any) => (
  <button {...props}>
    <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.9047 17.2436L4.6633 31.4849C3.97646 32.1717 2.86291 32.1717 2.17613 31.4849L0.515117 29.8238C-0.170556 29.1382 -0.171875 28.0269 0.512186 27.3396L11.7987 16L0.512186 4.66039C-0.171875 3.9731 -0.170556 2.86182 0.515117 2.17615L2.17613 0.515134C2.86298 -0.171711 3.97653 -0.171711 4.6633 0.515134L18.9046 14.7564C19.5914 15.4432 19.5914 16.5567 18.9047 17.2436Z" fill="#353535"/>
    </svg>
  </button>
);

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
          prevArrow={<PrevArrowIcon />}
          nextArrow={<NextArrowIcon />}
          responsive={[
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
                <img src={window.innerWidth < 1024 ? mainBannerMobile: mainBanner} alt={banner.imageAlt} />
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
