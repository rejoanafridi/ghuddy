import type { HotelCardProps } from '~/_types/type'
import { IconHome, IconLocation, IconStar } from '../Icon/Icons'
import { motion } from 'framer-motion'
import FavoriteButton from '~/_components/FavoriteButton'
import { OfferBadge } from '../Badges'
const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-xl relative cursor-pointer card-shadow bg-white w-[280px] h-[442px] flex-shrink-0 "
        >
            <img
                src={hotel?.thumb_image}
                alt={hotel?.property_name}
                className="w-full h-52 object-cover rounded-t-xl"
            />
            <div className="absolute top-1 right-1">
                <FavoriteButton itemId={hotel?.id} />
            </div>
            {hotel?.discount_percent > 0 && (
                <div className="absolute left-0 top-3">
                    <OfferBadge
                        percentage={Math.round(hotel?.discount_percent)}
                    />
                </div>
            )}

            <div className="p-3">
                <div className="flex items-start gap-2 justify-between">
                    <h3 className="h4-text-16-medium line-clamp-2">
                        {hotel?.property_name}
                    </h3>
                    <span className=" h4-text-14-medium flex items-center gap-1">
                        <IconStar /> {hotel?.stars}
                    </span>
                </div>
                <div className="flex items-center line-clamp-1 justify-start gap-2 mt-1">
                    <IconLocation />
                    <p className="h4-text-14-regular ">
                        {hotel?.short_address}
                    </p>
                </div>
                <div className="flex items-start gap-2 mt-3">
                    <IconHome className="min-w-4" />
                    <p className="h4-text-14-regular line-clamp-4">
                        {hotel.display_facilities?.map(
                            (facility: { name: string }) => `${facility.name},`
                        )}
                    </p>
                </div>

                <div className="text-center mt-3">
                    <p className="caption">Checkout Price:</p>

                    <span className="h4-text-16-medium">
                        {hotel?.black_price} BDT
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default HotelCard
