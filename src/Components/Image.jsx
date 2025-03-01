import {
    useEffect,
    useState,
} from "react"

const Image = ({
    source,
    ...rest
}) => {

    const [imageSource, setImageSource] = useState(source)

    useEffect(() => {
        setImageSource(source)
    }, [source])

    const setFallbackImage = e => {
        const svgString = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#5f6368"
        >
            <path d="M233.76-176.5q-24.2 0-40.73-16.53-16.53-16.53-16.53-40.73v-492.48q0-24.2 16.53-40.73 16.53-16.53 40.73-16.53h492.48q24.2 0 40.73 16.53 16.53 16.53 16.53 40.73v492.48q0 24.2-16.53 40.73-16.53 16.53-40.73 16.53H233.76ZM242-419l158.5-158.5 159 159L718-577l40 40v-189q0-14-9-23t-23-9H234q-14 0-23 9t-9 23v266.87L242-419Zm-8 217h492q14 0 23-9t9-23v-266.3l-40-40.2L559.5-382l-159-159L242-382.5l-40-40V-234q0 14 9 23t23 9Zm-32 0v-298.5 25.5-283 556Z" />
        </svg>
    `
        const blob = new Blob([svgString], { type: "image/svg+xml" })
        const blobUrl = URL.createObjectURL(blob)
        setImageSource(blobUrl)
    }

    if (!source) {
        const stack = new Error()
            .stack
            .split("\n")
            .filter(i => !/^.*(\.vite|keycloak|\.main\.jsx).*/.test(i))
            .join("\n")
    }

    return <img
        src={imageSource || null}
        onError={setFallbackImage}
        {...rest}
    />
}

export default Image
