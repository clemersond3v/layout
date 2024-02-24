import shelfData from '../../data/shelfs.json'
import shelfImage01 from '../../assets/productImage01.png'
import shelfImage02 from '../../assets/productImage02.png'
import Slider from "react-slick";
import './styles.scss'

const Shelf = (): JSX.Element => {
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

    const formatPrice = (value: number) => {
        if (value >= 1000) {
          const [parteInteira, centavos] = value.toFixed(2).split('.');
          const parteInteiraFormatada = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
          return `R$ ${parteInteiraFormatada},${centavos}`;
        } else {
          return `R$ ${value.toFixed(2).replace('.', ',')}`;
        }
    }

    return (
        <div className='shelf-container'>
            <p className='shelf-container--title'>As Mais Pedidas</p>
            <div className='shelf-container-limit'>
                <div className='shelf-container--carousel'>
                    <Slider
                        dots={false}
                        arrows={true}
                        infinite={true}
                        slidesToShow={5}
                        slidesToScroll={1}
                        autoplay={false}
                        nextArrow={<NextArrowIcon />}
                        prevArrow={<PrevArrowIcon />}
                        responsive={[
                            {
                            breakpoint: 1375,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
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
                        {shelfData.map((item) => (
                            <div key={item.productId} data-product-id={item.productId} className='product-card'>
                                <div className='product-card--image'>
                                    <a href={item.productLink}>
                                        <img src={(Number(item.productId) % 2) === 0 ? shelfImage02 : shelfImage01} alt={item.productName} />
                                    </a>
                                </div>
                                <div className='product-card--bottom'>
                                    <div className='product-card--bottom__colorSelector'>
                                        {item.colors.map((color) => (
                                            <div className={`product-card--bottom__colorSelector--item ${color.colorName}`}></div>
                                        ))}
                                    </div>
                                    <div className='product-card--bottom__sellingPrice'>
                                        <p>{formatPrice(item.sellingPrice)}</p>
                                    </div>
                                    <div className='product-card--bottom__productName'>
                                        <a href={item.productLink}>{item.productName}</a>
                                    </div>
                                    <div className='product-card--bottom__productDescription'>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className='product-card--bottom__buyButton'>
                                        <button id='shelf-buyButton' data-product-id={item.productId}>Adicionar</button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </Slider>
                    
                </div>
            </div>
        </div>
    );
};

export default Shelf;
