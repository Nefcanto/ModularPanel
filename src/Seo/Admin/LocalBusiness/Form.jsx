import {
    post,
} from "App"
import {
    Link,
    LongText,
    PageForm,
    Text,
} from "Form"
import { useEntitySettings } from "Settings"

const inputs = <>
    <Text
        property="Name"
        required
    />
    <Link
        property="Url"
        required
    />
    <Link
        property="Logo"
        required
    />
    <Link
        property="Image"
        required
    />
    <LongText
        property="Description"
        required
        rows={2}
    />
    <Text
        property="Telephone"
        required
    />
    <Text
        dir="ltr"
        property="Email"
        required
    />

    <Text
        dir="ltr"
        property="AddressType"
        required
    />
    <Text
        property="AddressLocality"
        required
    />
    <Text
        property="AddressRegion"
        required
    />
    <Text
        property="StreetAddress"
        required
    />
    <Text
        property="PostalCode"
        required
    />
    <Text
        dir="ltr"
        property="OpeningHours"
        required
    />
    <Text
        dir="ltr"
        property="PriceRange"
        required
    />
</>

const load = ({
    error,
    setCurrentEntity,
    setProgress,
}) => {
    setProgress(true)
    const { getEntitySetting } = useEntitySettings()
    getEntitySetting({ key: "localBusinessSchema" })
        .then(localBusinessSchema => {
            setCurrentEntity({
                name: localBusinessSchema?.name,
                url: localBusinessSchema?.url,
                logo: localBusinessSchema?.logo,
                image: localBusinessSchema?.image,
                description: localBusinessSchema?.description,
                telephone: localBusinessSchema?.telephone,
                email: localBusinessSchema?.email,
                addressType: localBusinessSchema?.address?.hasOwnProperty("@type") ? localBusinessSchema?.address["@type"] : "",
                addressLocality: localBusinessSchema?.address?.addressLocality,
                addressRegion: localBusinessSchema?.address?.addressRegion,
                streetAddress: localBusinessSchema?.address?.streetAddress,
                postalCode: localBusinessSchema?.address?.postalCode,
                openingHours: localBusinessSchema?.openingHours?.length > 0 ? localBusinessSchema?.openingHours[0] : "",
                priceRange: localBusinessSchema?.priceRange,
            })
            setProgress(false)
        }, e => {
            error(e)
        })
}

const save = ({
    data,
    error,
    setProgress,
    success,
}) => {
    setProgress(true)

    const schema = {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": data.Name,
        "url": data.Url,
        "logo": data.Logo,
        "image": data.Image,
        "description": data.Description,
        "telephone": data.Telephone,
        "email": data.Email,
        "address": {
            "@type": data.AddressType,
            "addressLocality": data.AddressLocality,
            "addressRegion": data.AddressRegion,
            "streetAddress": data.StreetAddress,
            "postalCode": data.PostalCode,
        },
        "openingHours": [
            data.OpeningHours
        ],
        "priceRange": data.PriceRange
    }
    data.keySegment = "localBusinessSchema"
    data.value = JSON.stringify(schema)
    post("/entitySetting/setSingleSetting", data)
        .then(data => {
            setProgress(false)
            success("Applied")
        }, e => {
            setProgress(false)
            error(e)
        })
}

const LocalBusinessForm = () => {
    return <PageForm
        humanReadableEntityType="SeoLocalBusiness"
        inputs={inputs}
        okAction={save}
        onLoad={load}
    />
}

export default LocalBusinessForm
