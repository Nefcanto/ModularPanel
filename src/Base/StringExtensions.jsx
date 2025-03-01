const StringExtensions = {
    cut: function (length) {
        if (this.length > length) {
            return this.substring(0, length) + " ..."
        }
        return this
    },
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

Object.assign(String.prototype, StringExtensions)

export default StringExtensions
