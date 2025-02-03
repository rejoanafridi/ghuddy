export interface RentalType {
    label: string
    value: string
    iconUrl: string
}
export type HotelCardProps = {
    hotel: {
        id: number
        property_name: string
        short_address: string
        display_facilities: []
        black_price: number
        red_price: number
        discount_percent: number
        user_rating: number
        no_of_reviews: number
        stars: number
        thumb_image: string
    }
}

export type PropertyType = 'hotel' | 'holiday_home' | 'resort' | ''

export type Hotel = {
    id: string
    name: string
    location: string
    price: number
    image: string
}

export type PropertyFilterProps = {
    selected: PropertyType
    onSelect: (type: PropertyType) => void
}
