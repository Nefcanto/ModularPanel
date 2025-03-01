import {
    DialogForm,
    Hidden,
} from "Form"
import LinkGroupField from "./Field"

const LinkGroupDialog = ({
    entityGuid,
    entityType,
    module,
}) => {

    const inputs = <>
        <LinkGroupField
            entityGuid={entityGuid}
            entityType={entityType}
            module={module}
        />
        <Hidden
            property="Entity"
            value={entityGuid}
        />
        <Hidden
            property="EntityType"
            value={entityType}
        />
        <Hidden
            property="Module"
            value={module}
        />
    </>

    return <DialogForm
        alwaysEdit
        entityLoadingUrl={`/entityLinkGroup/getByEntity?entity=${entityGuid}`}
        entityType="EntityLinkGroup"
        inputs={inputs}
        submitTo="/entityLinkGroup/upsert"
        title="SeoLinkGroup"
        uniqueIdentifierExtractor={() => entityGuid}
    />
}

export default LinkGroupDialog
