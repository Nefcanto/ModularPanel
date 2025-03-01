import { parseQuery } from "App"
import {
    List,
    UpdateKeysAction,
} from "List"
import { ChangeScope } from "Granularities"
import { ManageUnits } from "Units"
import {
    AttributeHeaders,
    AttributeSorts,
    ManageOptions,
} from "AttributesCommon"
import filters from "./Filters"
import AttributeForm from "./Form"
import row from "./Row"
import card from "./Card"

const listActions = <>
    <UpdateKeysAction />
</>

const entityActions = entity => <>
    <ChangeScope />
    {
        (entity.dataType == "singleChoice" || entity.dataType == "multiChoice")
        && <ManageOptions />
    }
    {
        entity.hasUnits && <ManageUnits />
    }
</>

const Attributes = () => {

    const { fixedGranularity } = parseQuery()

    return <List
        card={card(fixedGranularity)}
        create={AttributeForm}
        entityActions={entityActions}
        entityType="Attribute"
        filters={filters}
        hasDelete
        hasEdit
        headers={AttributeHeaders}
        listActions={listActions}
        module="Attributes"
        row={row(fixedGranularity)}
        separateRowForActions
        sorts={AttributeSorts}
        title="AttributesAttributes"
    />
}

export default Attributes
