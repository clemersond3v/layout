import './styles.scss'
import brandsBar01 from '../../../../assets/brandComma.svg'
import brandsBar02 from '../../../../assets/brandMelissa.svg'
import brandsBar03 from '../../../../assets/brandForever21.svg'
import brandsBar04 from '../../../../assets/brandZara.svg'
import brandsBar05 from '../../../../assets/brandAnnTaylor.svg'
import Slider from "react-slick";

const BrandsBar = (): JSX.Element => {

  return (
    <section className='brandsBar'>
        <div className='brandsBar--title'>
            <p>Marcas Parceiras</p>
        </div>
        <div className='brandsBar-container'>
            {window.innerWidth > 1024 ? (
                <>
                    <div className='brandsBar-container--item'>
                        <div className='brandsBar-container--item__icon'>
                            <a href="/">
                                <img src={brandsBar01} alt="Brand Comma" />
                            </a>                    
                        </div>
                    </div>

                    <div className='brandsBar-container--item'>
                        <div className='brandsBar-container--item__icon'>
                            <a href="/">
                                <img src={brandsBar02} alt="Brand Melissa" />
                            </a>
                        </div>
                    </div>

                    <div className='brandsBar-container--item'>
                        <div className='brandsBar-container--item__icon'>
                            <a href="/">
                                <img src={brandsBar03} alt="Brand Forever 21" />
                            </a>
                        </div>
                    </div>

                    <div className='brandsBar-container--item'>
                        <div className='brandsBar-container--item__icon'>
                            <a href="/">
                                <img src={brandsBar04} alt="Brand Zara" />
                            </a>
                        </div>
                    </div>

                    <div className='brandsBar-container--item'>
                        <div className='brandsBar-container--item__icon'>
                            <a href="/">
                                <img src={brandsBar05} alt="Brand Ann Taylor" />
                            </a>
                        </div>
                    </div>
                </>
            ) : (
                <Slider
                    dots={false}
                    arrows={true}
                    infinite={true}
                    slidesToShow={5}
                    slidesToScroll={1}
                    autoplay={false}
                    centerMode={false}
                    responsive={[                        
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                arrows: false,
                                centerPadding: '30px',
                                autoplay: true,
                            },
                        },
                    ]}
                >
                    <div className='brandsBar-container--item'>
                        <div className='brandsBar-container--item__icon'>
                            <a href="/">
                                <img src={brandsBar01} alt="Brand Comma" />
                            </a>                    
                        </div>
                    </div>

                    <div className='brandsBar-container--item'>
                        <div className='brandsBar-container--item__icon'>
                            <a href="/">
                                <img src={brandsBar02} alt="Brand Melissa" />
                            </a>
                        </div>
                    </div>

                    <div className='brandsBar-container--item'>
                        <div className='brandsBar-container--item__icon'>
                            <a href="/">
                                <img src={brandsBar03} alt="Brand Forever 21" />
                            </a>
                        </div>
                    </div>

                    <div className='brandsBar-container--item'>
                        <div className='brandsBar-container--item__icon'>
                            <a href="/">
                                <img src={brandsBar04} alt="Brand Zara" />
                            </a>
                        </div>
                    </div>

                    <div className='brandsBar-container--item'>
                        <div className='brandsBar-container--item__icon'>
                            <a href="/">
                                <img src={brandsBar05} alt="Brand Ann Taylor" />
                            </a>
                        </div>
                    </div>
                </Slider>                    
            )}
        </div>
    </section>
  );
};

export default BrandsBar;
