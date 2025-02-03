const PropertyFilterSkeleton: React.FC = () => {
    return (
        <div className="flex gap-6 mb-6 overflow-auto hidden-scrollbar">
            {Array.from({ length: 15 }).map((_, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center justify-center min-w-[78px] h-[60px] gap-1 rounded-lg bg-gray-200 animate-pulse">
                        <div className="w-5 h-5 bg-gray-300 rounded"></div>
                        <div className="w-12 h-4 bg-gray-300 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PropertyFilterSkeleton
