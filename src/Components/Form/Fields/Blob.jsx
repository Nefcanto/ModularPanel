import {
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react"
import IconButton from "@mui/material/IconButton"
import CancelIcon from "@mui/icons-material/Cancel"
import { useDropzone } from "react-dropzone"
import Fade from "@mui/material/Fade"
import app, {
    download,
    t,
} from "App"
import { FormContext } from "Contexts"
import { useField } from "Hooks"
import Field from "./Field"
import Progress from "../../Progress"

const Blob = ({
    className,
    compress,
    doNotCompress,
    doNotResize,
    inForm,
    initialUrls,
    multiple,
    render,
    required,
    resize,
    type,
    onChange,
    ...rest
}) => {

    const validate = () => {
        if (!required) {
            return true
        }
        if (hasBlobs) {
            return true
        }
        return {
            error: "required"
        }
    }

    const field = useField({
        required: required,
        initialValue: [],
        type: "Upload",
        validate: validate,
        ...rest
    })
    const {
        isDirty,
        progress,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
        validateAll,
    } = field
    const [files, setFiles] = useState([])
    const [previews, setPreviews] = useState([])
    const [hasBlobs, setHasBlobs] = useState(false)
    let { setHasFile } = useContext(FormContext) || { setHasFile: () => { } }
    const [fieldProgress, setFieldProgress] = useState()
    const pascalizedType = app.pascalize(type)

    useEffect(() => {
        setHasFile(true)
    }, [])

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    useEffect(() => {
        if (!isDirty) {
            setIsDirty(files.length > 0)
        }
        const filesList = files.map(file => file.name)
        setChosenValue(filesList)
        setDisplayValue(filesList)
        app.selectedFiles = files
        setPreviews(files.map(file => {
            return {
                name: file.name,
                url: URL.createObjectURL(file.file || file)
            }
        }))
        return () => previews.map(preview => URL.revokeObjectURL(preview.url))
    }, [files])

    useEffect(() => {
        setHasBlobs(previews.length > 0)
        if (onChange instanceof Function) {
            onChange(previews)
        }
    }, [previews])

    useEffect(() => {
        validateAll()
    }, [hasBlobs])

    const removeBlob = (e, preview, ...rest) => {
        setFiles(files.filter(i => i.name != preview.name))
        e.stopPropagation()
        e.preventDefault()
    }

    const loadBlobs = async url => {
        for (let i = 0; i < initialUrls.length; i++) {
            const index = i
            download(`/blobProxy/get?url=${initialUrls[i]}`)
                .then(file => {
                    setFiles([...files, file])
                    if (index === initialUrls.length - 1) {
                        setFieldProgress(false)
                    }
                }, e => {
                    console.log(e)
                })
        }
    }

    useEffect(() => {
        if (initialUrls?.length > 0) {
            setFieldProgress(true)
            loadBlobs()
        }
    }, [])

    return <Field
        {...rest}
        {...field}
        className="relative w-full"
    >
        {/* {field.label && <div>{t(field.label)}</div>} */}
        <div
            className={"field mt-4" +
                (
                    previews.length === 0
                        ?
                        " relative bg-slate-100 flex justify-center items-center py-20 cursor-pointer group hover:bg-slate-200 border-dashed border-2 border-slate-400 hover:border-slate-600 dark:bg-stone-800 dark:hover:bg-slate-800 "
                        :
                        ""
                )
            }
            {...getRootProps()}
        >
            <Fade in={hasBlobs}>
                <div className={`relative flex items-center gap-6 justify-around ${hasBlobs ? "" : "hidden"} ${className || ""}`}>
                    {
                        previews.map((preview, index) => {
                            return <div
                                className="w-full h-full relative"
                                key={index}
                            >
                                <div
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                    }}
                                    className={progress ? "brightness-50" : ""}
                                >
                                    {render instanceof Function && render({ preview })}
                                </div>
                                <IconButton
                                    className="absolute -top-4 -end-4 z-30"
                                    onClick={(e) => removeBlob(e, preview)}
                                    disabled={progress}
                                >
                                    <CancelIcon />
                                </IconButton>
                            </div>
                        })
                    }
                </div>
            </Fade>
            <Fade in={!hasBlobs}>
                <div className="w-4/5 mx-auto text-center">
                    {
                        isDragActive && <div className="absolute inset-0 bg-green-500 animate-pulse"></div>
                    }
                    <input
                        {...getInputProps({ multiple: multiple })}
                        className="hidden"
                    />
                    <p className="relative text-sm tracking-wide font-bold text-black dark:text-slate-50 group-hover:drop-shadow-sm group-hover:drop-shadow-sm ">
                        {
                            isDragActive ?
                                <span>{t(`InfraDropThe${pascalizedType}Here`)}</span> :
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: t(`InfraDragAndDropA${pascalizedType}HereOrClickToSelect${pascalizedType}`)
                                    }}
                                />
                        }
                    </p>
                </div>
            </Fade>
        </div>
        {
            (progress || fieldProgress) && !inForm &&
            <div className="absolute top-0 start-0 bottom-0 end-0 bg-gray-800 opacity-30 ">
                <Progress />
            </div>
        }
    </Field>
}

export default Blob
