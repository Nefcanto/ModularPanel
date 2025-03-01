import { useContext } from "react"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import { url } from "App"
import { ListContext } from "Contexts"
import { ListAction } from "List"

const DefineTags = props => {

    const {
        camelizedEntityType,
        camelizedModule,
    } = useContext(ListContext)

    const link = url({
        path: "/taxonomy/tags",
        granularity: "entityType",
        granularityExtractionEntity: {
            entityType: camelizedEntityType,
            module: camelizedModule,
        }
    })

    return <ListAction
        {...props}
        icon={LocalOfferIcon}
        notApplicableToEntities
        title="NewTaxonomyTags"
        url={link}
    />
}

export default DefineTags
