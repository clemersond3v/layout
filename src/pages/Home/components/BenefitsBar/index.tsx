import './styles.scss'
import benefitsBar01 from '../../../../assets/importProducts.svg'
import benefitsBar02 from '../../../../assets/stock.svg'
import benefitsBar03 from '../../../../assets/exchanges.svg'
import benefitsBar04 from '../../../../assets/discountOff.svg'
import benefitsBar05 from '../../../../assets/deliveryFree.svg'

const BenefitsBar = (): JSX.Element => {
    return (
        <section className='benefitsBar'>
            <div className='benefitsBar--title'>
                <p>Por que comprar na Maeztra?</p>
            </div>
            
            <div className='benefitsBar-container'>
                <div className='benefitsBar-container--item'>
                    <div className='benefitsBar-container--item__icon'>
                        <img src={benefitsBar01} alt="Produtos Importados" />
                    </div>
                    <div className='benefitsBar-container--item__content'>
                        <p className='benefitsBar-container--item__content-text'>Produtos importados</p>
                        <p className='benefitsBar-container--item__content-subText'>Produto de Alta Qualidade</p>
                    </div>
                </div>

                <div className='benefitsBar-container--item'>
                    <div className='benefitsBar-container--item__icon'>
                        <img src={benefitsBar02} alt="Estoque no Brazil" />
                    </div>
                    <div className='benefitsBar-container--item__content'>
                        <p className='benefitsBar-container--item__content-text'>Estoque no Brazil</p>
                        <p className='benefitsBar-container--item__content-subText'>Produtos mais perto de você!</p>
                    </div>
                </div>

                <div className='benefitsBar-container--item'>
                    <div className='benefitsBar-container--item__icon'>
                        <img src={benefitsBar03} alt="Trocas Garantidas" />
                    </div>
                    <div className='benefitsBar-container--item__content'>
                        <p className='benefitsBar-container--item__content-text'>Trocas Garantidas</p>
                        <p className='benefitsBar-container--item__content-subText'>Trocas em até 48 horas, vejas as regras</p>
                    </div>
                </div>

                <div className='benefitsBar-container--item'>
                    <div className='benefitsBar-container--item__icon'>
                    <img src={benefitsBar04} alt="Ganhe 5% off" />
                    </div>
                    <div className='benefitsBar-container--item__content'>
                        <p className='benefitsBar-container--item__content-text'>Ganhe 5% off</p>
                        <p className='benefitsBar-container--item__content-subText'>Pagando à vista no Cartão</p>
                    </div>
                </div>

                <div className='benefitsBar-container--item'>
                    <div className='benefitsBar-container--item__icon'>
                        <img src={benefitsBar05} alt="Frete Grátis" />
                    </div>
                    <div className='benefitsBar-container--item__content'>
                        <p className='benefitsBar-container--item__content-text'>Frete Grátis</p>
                        <p className='benefitsBar-container--item__content-subText'>Em compras acima de R$ 499,00</p>
                    </div>
                </div>      
            </div>
        </section>
    );
};

export default BenefitsBar;
