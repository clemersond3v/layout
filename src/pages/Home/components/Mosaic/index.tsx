import './styles.scss'
import mosaicBanner from '../../../../assets/mosaic-banner.png'
import mosaicBannerMobile from '../../../../assets/mosaic-banner-mobile.png'

const Mosaic = (): JSX.Element => {

  return (
    <section className='mosaic'>
        <div className='mosaic-container'>
            <div className='mosaic-container-textual'>
                <p className='mosaic-container-textual--title'>Lorem ipsum</p>
                <p className='mosaic-container-textual--paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.</p>
            </div>
            <div className='mosaic-container-banner'>
                <img src={window.innerWidth > 1024 ? mosaicBanner : mosaicBannerMobile} alt="Nova coleção de outono-inverno" />
            </div>
        </div>
    </section>
  );
};

export default Mosaic;
