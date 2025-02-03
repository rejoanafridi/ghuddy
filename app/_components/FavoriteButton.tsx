import { useEffect, useState } from 'react'
import { IconHeart } from './common/Icon/Icons'

interface FavoriteButtonProps {
    itemId: number
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ itemId }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    // Load favorite state from localStorage on mount
    useEffect(() => {
        const storedFavorites = JSON.parse(
            localStorage.getItem('favorites') || '[]'
        )
        setIsFavorite(storedFavorites.includes(itemId))
    }, [itemId])

    const toggleFavorite = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        setIsFavorite((prev) => {
            const newFavoriteState = !prev
            const storedFavorites = JSON.parse(
                localStorage.getItem('favorites') || '[]'
            )

            if (newFavoriteState) {
                localStorage.setItem(
                    'favorites',
                    JSON.stringify([...storedFavorites, itemId])
                )
            } else {
                localStorage.setItem(
                    'favorites',
                    JSON.stringify(
                        storedFavorites.filter((id: number) => id !== itemId)
                    )
                )
            }

            return newFavoriteState
        })
    }

    return (
        <button
            onClick={toggleFavorite}
            className="p-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-50/20"
        >
            {isFavorite ? (
                <IconHeart className="w-6 h-6 text-red-600 fill-red-600 " />
            ) : (
                <IconHeart className="w-6 h-6 text-gray-50/20" />
            )}
        </button>
    )
}

export default FavoriteButton
