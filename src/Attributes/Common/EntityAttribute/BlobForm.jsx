import {
    DialogForm,
    File,
    Hidden
} from "Form"

const inputs = entity => {
    const initialUrls = entity?.relatedItems?.fileUrl ? [entity?.relatedItems?.fileUrl] : undefined
    return <>
        <File
            placeholder={entity.attributesAttributeTitle}
            property={entity.attributeId}
            url={entity?.relatedItems?.fileUrl}
            initialUrls={initialUrls}
        />
        <Hidden
            property="AttributeId"
            value={entity.attributeId}
        />
    </>
}

const AttributeBlobForm = () => {

    return <DialogForm
        entityType="EntityAttribute"
        inputs={inputs}
        submitTo="/entityAttribute/setBlobs"
    />
}

export default AttributeBlobForm
