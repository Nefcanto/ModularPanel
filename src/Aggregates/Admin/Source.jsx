import { useState } from "react"
import {
    DialogForm,
    Radio,
    Text,
} from "Form"
import CodeField from "./Code/Field"
import QueryField from "./Query/Field"

const Source = ({ entity }) => {

    const [type, setType] = useState("query")

    const options = [
        {
            title: "InfraQuery",
            value: "query"
        },
        {
            title: "InfraCode",
            value: "code"
        },
    ]

    const inputs = <>
        <Radio
            choose={i => i.value}
            display={i => i.title}
            hideLabel
            onChange={value => setType(value)}
            options={options}
            property="DataSourceType"
            row
            value={options[0]}
        />
        {
            type === "query"
                ?
                QueryField
                :
                CodeField
        }
    </>

    return <DialogForm
        entityType={entity.relatedItems.entityType}
        inputs={inputs}
        title="AggregatesDataSource"
    />
}

export default Source
