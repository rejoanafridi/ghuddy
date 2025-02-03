import SectionWrapper from '~/_components/common/SectionWrapper'
import type { Route } from './+types/home'
import HotelList from '~/features/HotelCatalog'

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Ghuddy Task' },
        { name: 'description', content: 'Welcome to React Router!' }
    ]
}

export default function Home() {
    return (
        <SectionWrapper>
            <HotelList />
        </SectionWrapper>
    )
}
