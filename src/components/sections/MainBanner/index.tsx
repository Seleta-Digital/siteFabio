import dynamic from 'next/dynamic'
import * as S from './styles'
const Slider = dynamic(() => import('react-slick'))

export type MainBannerProps = {
  img?: string
}

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1
}
const bannerList = [
  {
    titulo: '#hardwork',
    subTitulo: 'é nois',
    img: 'https://picsum.photos/800/600?random=1'
  },
  {
    titulo: '#LifeStyle',
    subTitulo: 'saude',
    img: 'https://picsum.photos/800/600?random=2'
  },
  {
    titulo: '#hardwork',
    subTitulo: 'é nois',
    img: 'https://picsum.photos/800/600?random=3'
  }
]
const MainBanner = () => (
  <S.Wrapper>
    <div>
      <Slider {...settings}>
        {bannerList.map(({ titulo, subTitulo, img }, index) => (
          <div key={index}>
            <S.BannerItem img={img}>
              <h3>{titulo}</h3>
              <p>{subTitulo}</p>
            </S.BannerItem>
          </div>
        ))}
      </Slider>
    </div>
  </S.Wrapper>
)

export default MainBanner
