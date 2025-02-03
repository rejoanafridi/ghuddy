import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { IconLeftArrow, IconRightArrow } from './common/Icon/Icons'

type SliderProps = {
    items: React.ReactNode[]
    slidesToShow?: number
    slidesToScroll?: number
    className?: string
    sliderSettings?: object
    breakpoints?: any
    dots?: boolean
    navigation?: boolean
    arrowClassName?: string
}

const CustomSlider: React.FC<SliderProps> = ({
    items,
    slidesToShow = 5,
    slidesToScroll = 1,
    className = '',
    dots = false,
    navigation = true,
    arrowClassName = 'text-gray-500 hover:text-gray-700',

    breakpoints = [
        { breakpoint: 1280, settings: { slidesToShow: 10 } },
        { breakpoint: 1024, settings: { slidesToShow: 4 } },
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 640, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
}) => {
    const [isClient, setIsClient] = useState(false)
    const sliderRef = useRef<Slider | null>(null)
    const [isHoverOnSlider, setIsHoverOnSlider] = useState(false)
    const sliderSettings = {
        dots: dots,
        infinite: false,
        speed: 500,
        slidesToShow,
        slidesToScroll,
        responsive: breakpoints
    }
    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null

    return (
        <div
            onMouseEnter={() => setIsHoverOnSlider(true)}
            onMouseLeave={() => setIsHoverOnSlider(false)}
            className={`relative ${className}`}
        >
            {isHoverOnSlider && navigation && (
                <button
                    className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 z-10  rounded-full shadow-md"
                    onClick={() => sliderRef.current?.slickPrev()}
                >
                    <IconLeftArrow className={arrowClassName} />
                </button>
            )}
            <Slider arrows={false} ref={sliderRef} {...sliderSettings}>
                {items.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </Slider>
            {isHoverOnSlider && navigation && (
                <button
                    className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 z-10  rounded-full shadow-md"
                    onClick={() => sliderRef.current?.slickNext()}
                >
                    <IconRightArrow className={arrowClassName} />
                </button>
            )}
        </div>
    )
}

export default CustomSlider
