import { useContext } from "react"
import { t } from "App"
import { EntityContext } from "Contexts"
import { LabelValue } from "Panel"
import CodeProperty from "./Code/Property"
import QueryProperty from "./Query/Property"

const SourceProperty = () => {

    const { entity } = useContext(EntityContext)

    if (entity.code) {
        return <LabelValue
            label="AggregatesDataSource"
            value={<CodeProperty />}
        />
    }
    if (entity.query) {
        return <LabelValue
            label="AggregatesDataSource"
            value={<QueryProperty />}
        />
    }

    return null
}

export default SourceProperty
