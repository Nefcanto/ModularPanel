import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import { ListAction } from "List"

const ListActions = <>
    <ListAction
        title="TaxonomyTags"
        icon={LocalOfferIcon}
        url={`/place/tags?entityType=Place`}
        notApplicableToEntities
    />
</>

export default ListActions
