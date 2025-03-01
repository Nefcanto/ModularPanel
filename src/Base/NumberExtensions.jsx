const NumberExtensions = {
    digitGroup: function () {
        if (!this) {
            return ""
        }
        if (isNaN(this)) {
            console.log(this)
            return ""
        }
        const value = this * 1
        return value.toLocaleString(undefined, {
            maximumFractionDigits: 5
        })
    },
}

Object.assign(Number.prototype, NumberExtensions)

export default NumberExtensions
