import { useState } from "react"
import { t } from "App"
import {
    Code,
    DialogForm,
    Link,
    Select,
    Title,
    Video,
} from "Form"

const VideoForm = () => {

    const [chooseType, setChooseType] = useState(null)
    const renderVideoField = () => {
        switch (chooseType) {
            case "embed":
                return <Code
                    placeholder="MediaEmbedCode"
                    property="EmbedCode"
                />
            case "url":
                return <Link
                    placeholder="MediaUrl"
                    property="Url"
                />
            case "upload":
                return <Video />
            default:
                break
        }
    }

    const inputs = <>
        <Select
            choose={entity => entity.key}
            display={entity => entity.title}
            onChange={value => setChooseType(value)}
            options={[
                {
                    key: "upload",
                    title: t("InfraUpload")
                },
                {
                    key: "url",
                    title: t("MediaUrl")
                },
                {
                    key: "embed",
                    title: t("MediaEmbedCode")
                },
            ]}
            placeholder="MediaVideoUploadType"
            required
        />
        {renderVideoField()}
        <Title />
    </>
    return <DialogForm
        entityType="MediaVideo"
        humanReadableEntityType="MediaVideo"
        inputs={inputs}
    />
}

export default VideoForm
