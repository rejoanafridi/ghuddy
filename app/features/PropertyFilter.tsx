import React from 'react'
import CustomSlider from '~/_components/CustomSlider'
import PropertyFilterSkeleton from '~/_components/Skeleton/PropertyFilterSkeleton'
import useIsClient from '~/_hooks/useClient'
import type { PropertyFilterProps, PropertyType } from '~/_types/type'
import { RENTAL_TYPES } from '~/lib/Constant'

const PropertyFilter: React.FC<PropertyFilterProps> = ({
    selected,
    onSelect
}) => {
    const { isClient } = useIsClient()
    const breakpoints = [
        { breakpoint: 1280, settings: { slidesToShow: 14 } },
        { breakpoint: 1024, settings: { slidesToShow: 10 } },
        { breakpoint: 768, settings: { slidesToShow: 8 } },
        { breakpoint: 640, settings: { slidesToShow: 6 } },
        { breakpoint: 480, settings: { slidesToShow: 5 } },
        { breakpoint: 320, settings: { slidesToShow: 4 } }
    ]
    const items = RENTAL_TYPES.map(({ label, value, iconUrl }) => (
        <div key={label} className="px-2">
            <button
                className={`flex flex-col px-2 items-center justify-center cursor-pointer min-w-[78px] h-[60px] gap-1 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-200 ${
                    selected === label
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100'
                }`}
                onClick={() =>
                    onSelect(selected === value ? '' : (label as PropertyType))
                }
            >
                <img height="20" width="20" src={iconUrl} alt={label} />
                <span className="h5-text-medium text-wrap">{label}</span>
            </button>
        </div>
    ))
    if (!isClient) {
        return <PropertyFilterSkeleton />
    }
    return (
        <CustomSlider
            items={items}
            slidesToShow={14}
            slidesToScroll={1}
            breakpoints={breakpoints}
        />
    )
}

export default PropertyFilter
