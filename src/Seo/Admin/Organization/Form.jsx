import {
    post,
} from "App"
import {
    Code,
    Link,
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
    <Code
        hint="enter Urls separated by commas or enters"
        property="SameAs"
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
    getEntitySetting({ key: "organizationSchema" })
        .then(organizationSchema => {
            setCurrentEntity({
                name: organizationSchema?.name,
                url: organizationSchema?.url,
                sameAs: organizationSchema?.sameAs.join("\r\n"),
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
        "@type": "Organization",
        "name": data.Name,
        "url": data.Url,
        "sameAs": data.SameAs.replace(new RegExp("[\r\n]", "gm"), ",").split(",").filter(Boolean),
    }
    data.keySegment = "organizationSchema"
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

const OrganizationForm = () => {
    return <PageForm
        humanReadableEntityType="SeoOrganization"
        inputs={inputs}
        okAction={save}
        onLoad={load}
    />
}

export default OrganizationForm
