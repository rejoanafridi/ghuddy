import { useState, useEffect } from 'react'

type FetchState<T> = {
    data: T
    loading: boolean
    error: string | null
}

export const useFetchData = <T>(
    url: string,
    defaultValue: T,
    dependencies: any[] = []
) => {
    const [state, setState] = useState<FetchState<T>>({
        data: defaultValue,
        loading: true,
        error: null
    })
    const fetchData = async (params?: Record<string, string>) => {
        setState({ data: defaultValue, loading: true, error: null })

        try {
            // Build query string if params exist
            let queryString = ''
            if (params) {
                const query = new URLSearchParams(params).toString()
                queryString = url.includes('?') ? '&' + query : '?' + query
            }

            const res = await fetch(url + queryString)

            if (!res.ok) throw new Error('Failed to fetch data')

            const result = await res.json()
            setState({ data: result, loading: false, error: null })
        } catch (error: any) {
            setState({
                data: defaultValue,
                loading: false,
                error: error.message
            })
        }
    }
    useEffect(() => {
        fetchData()
    }, dependencies)

    return { ...state, fetchData }
}
