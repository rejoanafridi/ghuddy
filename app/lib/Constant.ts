import type { RentalType } from '~/_types/type'
export const ACCESS_TOKEN = 'access-token'
export const API_BASE_URL =
    'https://ghuddy.link/api/v1/open/get/rental-property/es-deals-hotels?checkinDate=2025-02-02&checkoutDate=2025-02-04&requestId=123'
export const GET_HOTEL_BY_PROPERTY =
    'https://ghuddy.link/api/v1/open/get/rental-property/es-deals-hotels'

// Array of rental types
export const RENTAL_TYPES: RentalType[] = [
    {
        label: 'Apartment',
        value: 'Apartment',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/APARTMENT.svg'
    },
    {
        label: 'Holiday Home',
        value: 'Holiday Home',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/HOLIDAY_HOME.svg'
    },
    {
        label: 'Camping',
        value: 'Camping',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/CAMPING.svg'
    },
    {
        label: 'Chalet',
        value: 'Chalet',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/CHALET.svg'
    },
    {
        label: 'Boat',
        value: 'Boat',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/BOAT.svg'
    },
    {
        label: 'Farm stay',
        value: 'Farm stay',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/FARM_STAY.svg'
    },
    {
        label: 'Guest House',
        value: 'Guest House',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/GUEST_HOUSE.svg'
    },
    {
        label: 'Resort',
        value: 'Resort',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/RESORT.svg'
    },
    {
        label: 'Hostel',
        value: 'Hostel',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/HOSTEL.svg'
    },
    {
        label: 'Hotel',
        value: 'Hotel',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/HOTEL.svg'
    },
    {
        label: 'Inn',
        value: 'Inn',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/INN.svg'
    },
    {
        label: 'Lodge',
        value: 'Lodge',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/LODGE.svg'
    },
    {
        label: 'Homestay',
        value: 'Homestay',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/HOMESTAY.svg'
    },
    {
        label: 'Motel',
        value: 'Motel',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/MOTEL.svg'
    },
    {
        label: 'Tented',
        value: 'Tented',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/TENTED.svg'
    },
    {
        label: 'Villa',
        value: 'Villa',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/VILLA.svg'
    },
    {
        label: 'Bungalow',
        value: 'Bungalow',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/BUNGALOW.svg'
    },
    {
        label: 'Ship',
        value: 'Ship',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/SHIP.svg'
    },
    {
        label: 'Cruise',
        value: 'Cruise',
        iconUrl:
            'https://ghuddy-live-attachments.s3.ap-southeast-1.amazonaws.com/icons/rental-type/CRUISE.svg'
    }
]
