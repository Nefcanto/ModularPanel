import { useContext } from "react"
import RuleIcon from "@mui/icons-material/Rule"
import { url } from "App"
import { ListContext } from "Contexts"
import { ListAction } from "List"

const DefineAttributes = props => {

    const {
        camelizedEntityType,
        camelizedModule,
    } = useContext(ListContext)

    const link = url({
        path: "/attributes/attributes",
        granularity: "entityType",
        granularityExtractionEntity: {
            entityType: camelizedEntityType,
            module: camelizedModule,
        }
    })

    return <ListAction
        {...props}
        icon={RuleIcon}
        notApplicableToEntities
        title="AttributesAttributes"
        url={link}
    />
}

export default DefineAttributes
