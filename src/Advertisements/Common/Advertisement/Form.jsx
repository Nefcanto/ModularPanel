import {
    DialogForm,
    Key,
    LongText,
    Slug,
    Title,
} from "Form"

const inputs = entity => <>
    <Title />
    <Slug />
    <LongText
        property="Summary"
        Placeholder="InfraSummary"
    />
</>

const AdvertisementForm = props => {

    return <DialogForm
        {...props}
        entityType="Advertisement"
        humanReadableEntityType="AdvertisementsAdvertisement"
        inputs={inputs}
    />
}

export default AdvertisementForm
