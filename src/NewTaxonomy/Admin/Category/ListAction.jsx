import { useContext } from "react"
import AccountTreeIcon from "@mui/icons-material/AccountTree"
import { url } from "App"
import { ListContext } from "Contexts"
import { ListAction } from "List"

const DefineCategories = props => {

    const {
        camelizedEntityType,
        camelizedModule,
    } = useContext(ListContext)

    const link = url({
        path: "/taxonomy/categories",
        granularity: "entityType",
        granularityExtractionEntity: {
            entityType: camelizedEntityType,
            module: camelizedModule,
        }
    })

    return <ListAction
        {...props}
        icon={AccountTreeIcon}
        notApplicableToEntities
        title="NewTaxonomyCategories"
        url={link}
    />
}

export default DefineCategories
