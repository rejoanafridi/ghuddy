import { useEffect, useState } from 'react'
import { API_BASE_URL, RENTAL_TYPES } from '~/lib/Constant'
import type { Hotel, PropertyFilterProps, PropertyType } from '~/_types/type'
import { useFetchData } from '~/_hooks/useFetchData'
import HotelCard from '~/_components/common/Cards/HotelCard'
import { HotelCardSkeletons } from '~/_components/Skeleton/HotelCardSkeleton'
import ErrorMessage from '~/_components/common/ErrorMessage'

const PropertyFilter: React.FC<PropertyFilterProps> = ({
    selected,
    onSelect
}) => {
    return (
        <div className="flex gap-6 mb-6 overflow-auto hidden-scrollbar">
            {RENTAL_TYPES.map(({ label, value, iconUrl }) => (
                <button
                    key={label}
                    className={`flex flex-col  justify-center cursor-pointer items-center min-w-[78px] h-[60px] gap-1 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-200 ${
                        selected === label
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100'
                    }`}
                    onClick={() =>
                        onSelect(
                            selected === label ? '' : (label as PropertyType)
                        )
                    }
                >
                    <img height="20" width="20" src={iconUrl} alt={label} />{' '}
                    <span className="h5-text-medium text-wrap">{label}</span>
                </button>
            ))}
        </div>
    )
}

const HotelList: React.FC = () => {
    const [selectedType, setSelectedType] = useState<PropertyType>('')

    const { data, loading, error, fetchData } = useFetchData<{
        esHotelCardList: Hotel[]
    }>(API_BASE_URL, { esHotelCardList: [] })

    useEffect(() => {
        if (selectedType) {
            fetchData({ propertyType: selectedType })
        }
    }, [selectedType])
    if (error) {
        return <ErrorMessage message={error} onRetry={fetchData} />
    }

    return (
        <div className="p-6">
            <div className="space-y-2">
                <h1 className="h1-title-medium">Hotels</h1>
                <PropertyFilter
                    selected={selectedType}
                    onSelect={setSelectedType}
                />
            </div>
            <h1 className="h2-subtitle-medium">Top Hotels</h1>
            <div className="flex space-x-6 overflow-x-auto py-4 hidden-scrollbar">
                {loading && <HotelCardSkeletons length={5} />}
                {data?.esHotelCardList?.length > 0 ? (
                    data.esHotelCardList?.map((hotel: any) => (
                        <HotelCard key={hotel.id} hotel={hotel} />
                    ))
                ) : (
                    <p className="text-gray-500">No hotels found...</p>
                )}
            </div>
        </div>
    )
}

export default HotelList
