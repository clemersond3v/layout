import shelfData from '../../data/shelfs.json'
import shelfImage01 from '../../assets/productImage01.png'
import shelfImage02 from '../../assets/productImage02.png'
import Slider from "react-slick";
import './styles.scss'

const Shelf = (): JSX.Element => {
    console.log("shelfData: ", shelfData);

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
