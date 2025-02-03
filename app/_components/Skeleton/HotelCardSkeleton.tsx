import { motion } from 'framer-motion'
import Skeleton from './Skeleton'

const HotelCardSkeleton: React.FC = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-xl relative cursor-pointer card-shadow bg-white w-[280px] h-[442px] flex-shrink-0"
        >
            {/* Image Skeleton */}
            <Skeleton className="w-full h-52 rounded-t-xl" />

            {/* Favorite Button Placeholder */}
            <div className="absolute top-1 right-1">
                <Skeleton className="w-8 h-8 rounded-full" />
            </div>

            {/* Discount Badge Placeholder */}
            <div className="absolute left-0 top-3">
                <Skeleton className="w-16 h-6 rounded-md" />
            </div>

            <div className="p-3 space-y-3">
                {/* Hotel Name */}
                <Skeleton className="w-3/4 h-5 rounded-md" />

                {/* Star Rating */}
                <div className="flex items-center gap-2">
                    <Skeleton className="w-5 h-5 rounded-full" />
                    <Skeleton className="w-8 h-5 rounded-md" />
                </div>

                {/* Location */}
                <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4 rounded-md" />
                    <Skeleton className="w-2/3 h-4 rounded-md" />
                </div>

                {/* Facilities */}
                <div className="flex items-start gap-2">
                    <Skeleton className="w-5 h-5 rounded-md" />
                    <Skeleton className="w-3/4 h-4 rounded-md" />
                </div>

                {/* Checkout Price */}
                <div className="text-center mt-3">
                    <Skeleton className="w-1/3 h-4 rounded-md mx-auto" />
                </div>
            </div>
        </motion.div>
    )
}
export const HotelCardSkeletons = ({ length }: any) => {
    return (
        <>
            {Array.from({ length: length }).map((_, index) => (
                <HotelCardSkeleton key={index} />
            ))}
        </>
    )
}
