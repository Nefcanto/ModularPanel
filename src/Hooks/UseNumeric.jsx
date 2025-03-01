const useNumeric = () => {

    const convertToEnDigits = text => {
        return text.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString())
    }

    return {
        convertToEnDigits
    }
}

export default useNumeric
