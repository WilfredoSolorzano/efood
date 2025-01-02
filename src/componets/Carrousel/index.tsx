import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselContainer, NextButton, PrevButton, SlideImage } from './styled'
import Sushi from '../../asset/images/Sushi.png'
import Trattoria from '../../asset/images/Trattoria.png'
import Mignon from '../../asset/images/Mignon .jpg'
import Burrito from '../../asset/images/burritomexicano.jpeg'
import Paisa from '../../asset/images/BandejaPaisa.jpg'
import Ceviche from '../../asset/images/ceviche.jpg'

const images = [Sushi, Trattoria, Mignon, Burrito, Paisa, Ceviche]

const Carousel = () => {
  const sliderRef = React.useRef<Slider>(null)

  const goToPrevious = () => {
    sliderRef.current?.slickPrev()
  }

  const goToNext = () => {
    sliderRef.current?.slickNext()
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  }

  return (
    <CarouselContainer>
      <PrevButton onClick={goToPrevious}>‹</PrevButton>
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <SlideImage src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <NextButton onClick={goToNext}>›</NextButton>
    </CarouselContainer>
  )
}

export default Carousel
