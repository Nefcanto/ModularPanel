import { Children } from "react"

const MultiCol = ({ children }) => {

    const clonedChildren = Children
        .toArray(children)
        .filter(child => {
            if (child.props) {
                return true
            }
            console.log(child, children)
        })
        .map(child => {
            const {
                full,
                half,
            } = child.props
            const dynamicProps = {
                className: "md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2"
            }
            if (full) {
                dynamicProps.className = "full sm:col-span-2 md:col-span-4 lg:col-span-6 xl:col-span-8 2xl:col-span-12"
            }
            if (half) {
                dynamicProps.className = "sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-6"
            }
            return <child.type
                key={child.key}
                {...child.props}
                {...dynamicProps}
            >
                {child.props.children}
            </child.type>
        })

    return <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-2">
        {clonedChildren}
    </div>
}

export default MultiCol
