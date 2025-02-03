import { IconDiamond } from './Icon/Icons'

export const OfferBadge = ({ percentage }: any) => {
    return (
        <div className="bg-red-500 flex pl-2  caption p-0.5 items-center w-fit font-medium gap-1.5 text-white">
            <IconDiamond />
            <span>-{percentage}% Off</span>
            <div className="rounded-sm bg-white text-red-500 px-1">Deal!</div>
        </div>
    )
}
