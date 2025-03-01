import {
    useContext,
    useEffect,
    useState,
} from "react"
import UploadIcon from "@mui/icons-material/Upload"
import DeleteIcon from "@mui/icons-material/Delete"
import VisibilityIcon from "@mui/icons-material/Visibility"
import app, {
    camelize,
    post,
    upload,
    url as urlBuilder,
} from "App"
import {
    useForm,
    useMessage,
} from "Hooks"
import {
    BrowseContext,
    DialogContext,
    EntityContext,
    FormContext,
    ListContext,
    TableContext,
} from "Contexts"
import { Image as PanelImage } from "Panel"
import Dialog from "../../Dialog/Dialog"
import ImageField from "../../Form/Fields/Image"
import OkCancel from "../../Dialog/OkCancel"
import PrimaryAction from "../../Dialog/PrimaryAction"
import FormElement from "../../Form/FormElement"
import HolismIcon from "../../HolismIcon"
import Warning from "../../Message/Warning"

const Image = ({
    alt,
    entity,
    onUploadSuccess,
    property,
    readOnly,
    single,
    uploadUrl,
    url,
}) => {

    const [uploadOpen, setUploadOpen] = useState(false)
    const [deletionOpen, setDeletionOpen] = useState(false)
    const [previewOpen, setPreviewOpen] = useState(false)
    const [progress, setProgress] = useState(false)
    const { hasMoreRoom } = useContext(TableContext) || {}
    const { success, error } = useMessage()
    const {
        camelizedEntityType,
        isBrowse,
        isTable,
        reloadEntity,
        separateRowForActions,
    } = useContext(ListContext)
    const internalReadOnly = readOnly || isBrowse
    const { entity: internalEntity } = entity ? { entity } : useContext(EntityContext)
    const [hasImage, setHasImage] = useState(false)
    const [image, setImage] = useState("")
    const [src, setSrc] = useState("")

    const {
        ...formRest
    } = useForm({
        entityType: "image"
    })

    useEffect(() => {
        if (url) {
            setSrc(url)
        }
        else if (internalEntity.relatedItems.imageUrl) {
            setSrc(internalEntity.relatedItems.imageUrl)
        }
        else if (property) {
            const normalizedProperty = `${camelize(property)}Url`
            console.log(normalizedProperty)
            if (internalEntity.relatedItems[normalizedProperty]) {
                setSrc(internalEntity.relatedItems[normalizedProperty])
            }
        }
    }, [url, internalEntity])

    useEffect(() => {
        const uuid = src?.split("/")?.findLast(() => true)?.split(".")[0]
        setImage(uuid)
        setHasImage(uuid !== "00000000-0000-0000-0000-000000000000")
    }, [src])

    const deleteImage = () => {
        setProgress(true)
        const deletionUrl = urlBuilder({
            path: single ? `/${camelizedEntityType}/deleteImage` : "/image/deleteDefault",
            query: {
                entity: internalEntity.guid,
                entityType: internalEntity.relatedItems.entityType,
                id: internalEntity.id,
                image: image,
                module: internalEntity.relatedItems.module,
                property,
            }
        })
        post(deletionUrl)
            .then(data => {
                setProgress(false)
                success("InfraImageDeletedSuccessfully")
                setDeletionOpen(false)
                reloadEntity(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const uploadImage = () => {
        let form = new FormData()
        app.selectedFiles.forEach(file => {
            form.append("file", file)
        })
        setProgress(true)
        const internalUploadUrl = uploadUrl || urlBuilder({
            path: single ? `/${camelizedEntityType}/setImage` : "/image/setDefault",
            query: {
                entity: internalEntity.guid,
                entityType: internalEntity.relatedItems.entityType,
                id: internalEntity.id,
                module: internalEntity.relatedItems.module,
                property,
            }
        })
        upload(internalUploadUrl, form)
            .then(data => {
                setProgress(false)
                success("InfraImageUploadedSuccessfully")
                setUploadOpen(false)
                if (typeof onUploadSuccess == "function") {
                    onUploadSuccess(data)
                }
                reloadEntity(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const showPreviewDialog = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setPreviewOpen(true)
    }

    const showDeletion = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDeletionOpen(true)
    }

    let jsx = <>
        {hasMoreRoom && separateRowForActions && <div className="w-24"></div>}
        <div className={(hasMoreRoom ? (separateRowForActions ? " absolute top-2.5 start-2 w-24 h-24 " : " relative ") : " relative ") + " inline-block"}>
            {
                !internalReadOnly && uploadOpen &&
                <DialogContext.Provider
                    value={{
                        open: uploadOpen,
                        setOpen: setUploadOpen
                    }}
                >
                    <FormContext.Provider
                        value={{
                            setHasFile: () => { },
                            ...formRest
                        }}
                    >
                        <Dialog
                            actions={
                                <OkCancel
                                    cancelClick={() => setUploadOpen(false)}
                                    okClick={() => uploadImage()}
                                    progress={progress}
                                />
                            }
                            content={<>
                                <FormElement
                                    inputs={<>
                                        <ImageField />
                                    </>}
                                />
                            </>}
                            title="InfraUploadImage"
                        />
                    </FormContext.Provider>
                </DialogContext.Provider>
            }
            {
                hasImage && previewOpen &&
                <DialogContext.Provider
                    value={{
                        open: previewOpen,
                        setOpen: setPreviewOpen
                    }}
                >
                    <Dialog
                        actions={
                            <PrimaryAction
                                onClick={() => setPreviewOpen(false)}
                            />
                        }
                        content={
                            <div>
                                <PanelImage
                                    alt={alt || ""}
                                    className="w-full h-full object-contain border-solid border-2 border-gray-100"
                                    source={src}
                                />
                            </div>
                        }
                        title="InfraPreview"
                    />
                </DialogContext.Provider>
            }

            {
                hasImage && deletionOpen &&
                <DialogContext.Provider
                    value={{
                        open: deletionOpen,
                        setOpen: setDeletionOpen
                    }}
                >
                    <Dialog
                        actions={
                            <OkCancel
                                cancelClick={() => setDeletionOpen(false)}
                                okClick={() => deleteImage()}
                                progress={progress}
                            />
                        }
                        content={
                            <Warning
                                text="InfraAreYouSureForDeletion"
                                title="InfraNote"
                            />
                        }
                        title="InfraDelete"
                    />
                </DialogContext.Provider>
            }
            <div className="group" onClick={() => setUploadOpen(true)}>
                <PanelImage
                    alt={alt || ""}
                    className={(hasMoreRoom ? (separateRowForActions ? " absolute w-24 h-24 " : "w-12 h-12") : "w-8 h-8 ") + " object-cover rounded-full " + (!internalReadOnly && "cursor-pointer group-hover:shadow-md group-hover:shadow-black transition-all border-solid border-2 border-gray-100")}
                    source={src}
                />
                {
                    hasImage && !internalReadOnly &&
                    <div
                        className="absolute w-8 h-8 top-0 end-0 bottom-0 start-0 opacity-0 transition-all cursor-pointer m-auto group-hover:opacity-100 group-hover:-start-16 group-hover:-bottom-10 hover:fill-red-400 grid place-items-center"
                        onClick={showDeletion}
                    >
                        <HolismIcon
                            className="hover:fill-red-400"
                            icon={DeleteIcon}
                        />
                    </div>
                }
                {
                    hasImage &&
                    <div
                        className="absolute w-8 h-8 top-0 end-0 bottom-0 start-0 opacity-0 transition-all cursor-pointer m-auto group-hover:opacity-100 group-hover:-start-16 group-hover:-top-10 hover:fill-blue-400 grid place-items-center"
                        onClick={showPreviewDialog}
                    >
                        <HolismIcon
                            className="hover:fill-blue-400"
                            icon={VisibilityIcon}
                        />
                    </div>
                }
                {
                    !internalReadOnly &&
                    <HolismIcon
                        className={(hasMoreRoom ? (separateRowForActions ? " start-16" : "start-8 ") : "start-6 ") + " w-4 h-4 absolute bottom-0 cursor-pointer text-slate-900 bg-white rounded-full p-0.5 group-hover:bg-slate-900 group-hover:text-white transition-colors"}
                        icon={UploadIcon}
                    />
                }
            </div>
        </div>
    </>

    if (isTable) {
        jsx = <td className={hasMoreRoom ? (separateRowForActions ? "w-32 relative h-20 " : "w-16 ") : "w-16 "}>
            {jsx}
        </td>
    }

    return jsx
}

export default Image
