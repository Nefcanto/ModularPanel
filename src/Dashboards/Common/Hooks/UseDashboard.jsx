const useDashboard = () => {

    const dashboardStyle = "dashboard grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-4 pt-2"

    const getColsAndRows = block => {
        let colSpan = ""
        let rowSpan = ""
        if (block.smCols) {
            colSpan += ` sm:col-span-${block.smCols}`
        }
        if (block.mdCols) {
            colSpan += ` md:col-span-${block.mdCols}`
        }
        if (block.lgCols) {
            colSpan += ` lg:col-span-${block.lgCols}`
        }
        if (block.xlCols) {
            colSpan += ` xl:col-span-${block.xlCols}`
        }
        if (block.xxlCols) {
            colSpan += ` 2xl:col-span-${block.xxlCols}`
        }

        if (block.smRows) {
            rowSpan += ` sm:row-span-${block.smRows}`
        }
        if (block.mdRows) {
            rowSpan += ` md:row-span-${block.mdRows}`
        }
        if (block.lgRows) {
            rowSpan += ` lg:row-span-${block.lgRows}`
        }
        if (block.xlRows) {
            rowSpan += ` xl:row-span-${block.xlRows}`
        }
        if (block.xxlRows) {
            rowSpan += ` 2xl:row-span-${block.xxlRows}`
        }
        return ` ${colSpan} ${rowSpan} `
    }

    return {
        dashboardStyle,
        getColsAndRows
    }
}

export default useDashboard
