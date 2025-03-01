import { useState } from "react"

const useListParameters = () => {

    const [pageNumber, setPageNumber] = useState()
    const [pageSize, setPageSize] = useState()
    const [filters, useFilters] = useState()
    const [sorts, setSorts] = useState()

    const getInitialListParameters = () => {

        return {
            pageNumber: 1,
            pageSize: 5,
            filters: [],
            sorts: [],
            search: ""
        }
    }

    const [initialListParameters] = useState(getInitialListParameters())

    return {

    }
}

export default useListParameters
