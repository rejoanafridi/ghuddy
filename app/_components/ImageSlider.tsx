import React from 'react'
import CustomSlider from './CustomSlider'

type ImageSliderProps = {
    hotel: any
}

const ImageSlider: React.FC<ImageSliderProps> = ({ hotel }: any) => {
    // Use the images array or fallback to a single image
    const images = hotel?.images?.length ? hotel.images : [hotel?.thumb_image]

    return (
        <div className="relative w-full">
            <CustomSlider
                items={images.map((image: any, index: number) => (
                    <img
                        key={index}
                        src={image}
                        alt={hotel?.property_name}
                        className="w-full h-52 object-cover rounded-t-xl"
                    />
                ))}
                slidesToShow={1}
                slidesToScroll={1}
                breakpoints={[{ settings: { slidesToShow: 1 } }]}
                dots={images.length > 1}
                navigation={images.length > 1 ? true : false}
                arrowClassName="text-white hover:text-white/80"
            />
        </div>
    )
}

export default ImageSlider
