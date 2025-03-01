import {
    useLayoutEffect,
    useState,
} from "react"

const useWindowSize = () => {
    const [width, setWidth] = useState(null)
    const [height, setHeight] = useState(null)

    useLayoutEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return {
        height,
        width,
    }
}

export default useWindowSize
