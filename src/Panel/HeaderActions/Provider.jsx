import * as Components from "HeaderActionAugmenters"

const Provider = () => {

    return <>
        {
            Object.keys(Components).map((key, index) => {
                const Component = Components[key]
                return <Component />
            })
        }
    </>
}


export default Provider
