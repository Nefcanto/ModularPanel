import tokenize from "./Tokenize"

const kebabize = (text) => {
    if (!text) {
        return ""
    }
    const tokens = tokenize(text)
    const kebabCased = tokens
        .map(token => token.toLowerCase())
        .join('-')
    return kebabCased
}

export default kebabize
