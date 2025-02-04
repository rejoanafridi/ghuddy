import SectionWrapper from '~/_components/common/SectionWrapper'
import type { Route } from './+types/home'
import HotelList from '~/features/HotelCatalog'

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Short Hotel' },
        { name: 'description', content: 'Hotel Package' }
    ]
}

export default function Home() {
    return (
        <SectionWrapper>
            <HotelList />
        </SectionWrapper>
    )
}
