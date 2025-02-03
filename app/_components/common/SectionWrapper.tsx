import type { ReactNode } from 'react'

interface SectionWrapperProps {
    children: ReactNode
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
    return (
        <section className="max-w-[1440px]  my-8  mx-auto">{children}</section>
    )
}

export default SectionWrapper
