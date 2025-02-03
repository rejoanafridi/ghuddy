import React from 'react'
import Slider from 'react-slick'

interface SliderProps {
    slidesToShow?: number
    slidesToScroll?: number
    infinite?: boolean
    speed?: number
    responsive?: Array<{
        breakpoint: number
        settings: {
            slidesToShow: number
        }
    }>
    children: React.ReactNode
}

const ReusableSlider: React.FC<SliderProps> = ({
    slidesToShow = 4,
    slidesToScroll = 1,
    infinite = true,
    speed = 500,
    responsive = [],
    children
}) => {
    const settings = {
        infinite,
        speed,
        slidesToShow,
        slidesToScroll,
        responsive
    }

    return <Slider {...settings}>{children}</Slider>
}

export default ReusableSlider
