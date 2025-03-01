import {
    Children,
    cloneElement,
    useEffect,
    useRef,
    useState,
} from "react"
import { useWindowSize } from "Hooks"

const Section = ({
    children,
    className,
}) => {

    const ref = useRef(null)
    const { width, height } = useWindowSize()
    const [sectionWidth, setSectionWidth] = useState(null)
    const [count] = useState(children.length ? children.length : (children.props ? 1 : null))

    const clonedChildren = Children
        .toArray(children)
        .map(child => cloneElement(child, {
            allSiblingsCount: count,
        }))

    let widgetWidth = ""

    if (count < 1 || count > 4) {
        throw "Dashboard widgets are only supported in 1,2,3, and 4 widgets per section."
    }

    useEffect(() => {
        setSectionWidth(ref.current.offsetWidth)
    }, [ref])

    return <div
        className={
            "section grid justify-between w-full grid gap-6 "
            + /* from zero */ " grid-cols-1 "
            + /* sm */ " sm:grid-cols-" + (count > 2 ? "2" : count)
            + /* md */ " md:grid-cols-" + (count > 3 ? "2" : count)
            + /* lg */ " lg:grid-cols-" + count
            + ` width_${width} height_${height}`
            + (className || "")
        }
        ref={ref}
        safelist="sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4"
    >
        {
            clonedChildren.map((clonedChild, index) => {
                return <div
                    className="widgetWrapper"
                    key={index}
                    style={{
                        width: widgetWidth
                    }}
                >
                    {clonedChild}
                </div>
            })
        }
    </div>
}

export default Section
