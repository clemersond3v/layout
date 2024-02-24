import './styles.scss'
import brandsBar01 from '../../../../assets/brandComma.svg'
import brandsBar02 from '../../../../assets/brandMelissa.svg'
import brandsBar03 from '../../../../assets/brandForever21.svg'
import brandsBar04 from '../../../../assets/brandZara.svg'
import brandsBar05 from '../../../../assets/brandAnnTaylor.svg'

const BrandsBar = (): JSX.Element => {

  return (
    <section className='brandsBar'>
        <div className='brandsBar--title'>
            <p>Marcas Parceiras</p>
        </div>
        <div className='brandsBar-container'>
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
        </div>
    </section>
  );
};

export default BrandsBar;
