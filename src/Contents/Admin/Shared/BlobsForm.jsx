import {
    useEffect,
    useState,
} from "react"
import { get } from "App"
import {
    useEnum,
    useMessage,
} from "Hooks"
import { Page } from "Panel"
import {
    Check,
    Collapse,
    File,
    Image,
    InlineForm,
    Numeric,
    Video,
} from "Form"

const BlobsForm = ({
    getUrl,
    saveTo,
    setProgress,
    ...rest
}) => {

    const [data, setData] = useState([])
    const [configs, setConfigs] = useState({})
    const [resize, setResize] = useState(false)

    const { enumItems, progress } = useEnum({ entityType: "DataType" })

    const { error } = useMessage()

    const load = () => {
        setProgress(true)
        get(getUrl)
            .then(data => {
                setData(data.parts)
                setConfigs(data.configs)
                let asEntity = {}
                data.parts.map(i => {
                    asEntity[i.id] = i.relatedItems.typedValue
                })
                setProgress(false)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    useEffect(() => {
        load()
    }, [])

    const getField = entity => {

        switch (entity?.dataType) {
            case "image":
                return <>
                    <Image
                        property={entity.key}
                        inForm
                        initialUrls={[entity.relatedItems.imageUrl]}
                    />
                    <Check
                        property={configs.resizeImages ? "DoNotResize" : "Resize"}
                        placeholder={configs.resizeImages ? "ContentsDoNotResize" : "ContentsResize"}
                        onChange={value => {
                            if (!configs.resizeImages) {
                                setResize(value)
                            }
                        }}
                    />
                    <Collapse in={resize}>
                        <>
                            <Numeric
                                property="MaxWidth"
                                placeholder="ContentsMaxWidth"
                            />
                        </>
                    </Collapse>
                    <Check
                        property={configs.resizeImages ? "DoNotCompress" : "Compress"}
                        placeholder={configs.resizeImages ? "ContentsDoNotCompress" : "ContentsCompress"}
                    />
                </>
            case "file":
                return <>
                    <File
                        property={entity.id}
                        url={entity.relatedItems.fileUrl}
                        inForm
                        initialUrls={[entity.relatedItems.fileUrl]}
                    />
                </>
            case "video":
                return <>
                    <Video
                        property={entity.id}
                        inForm
                        initialUrls={[entity.relatedItems.videoUrl]}
                    />
                </>
            default:
                return null
        }
    }

    const forms = <>
        {
            data.map(i => <div
                key={i.id}
                className="border-b pt-10 first:pt-0 last:border-none"
            >
                <InlineForm
                    title={i.name}
                    onLoad={({ setCurrentEntity }) => setCurrentEntity(i)}
                    submitTo={saveTo(i)}
                    inputs={getField(i)}
                    large
                />
            </div>)
        }
    </>

    return <Page
        title="ContentsBlobs"
        {...rest}
    >
        {forms}
    </Page>
}

export default BlobsForm
