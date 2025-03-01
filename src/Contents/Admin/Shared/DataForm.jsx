import { useState } from "react"
import { get } from "App"
import { useEnum } from "Hooks"
import {
    Dynamic,
    PageForm,
} from "Form"

const DataForm = ({
    getUrl,
    ...rest
}) => {

    const [data, setData] = useState([])

    const load = ({
        error,
        setCurrentEntity,
        setProgress,
    }) => {
        setProgress(true)
        get(getUrl)
            .then(data => {
                setData(data)
                let asEntity = {}
                data.map(i => {
                    asEntity[i.relatedItems.keySegment || i.key] = i.relatedItems.typedValue
                })
                console.log(asEntity)
                setCurrentEntity(asEntity)
                setProgress(false)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const inputs = <>
        <Dynamic
            definitions={data}
            assignments={data}
        />
    </>

    return <PageForm
        inputs={inputs}
        onLoad={load}
        {...rest}
    />
}

export default DataForm
