import {
    useEffect,
    useState,
} from "react"
import { get } from "App"
import { Dialog } from "Panel"

const ViewSection = ({
    entity,
    error,
}) => {

    const [data, setData] = useState()
    const [progress, setProgress] = useState(true)

    useEffect(() => {
        get(`/section/data?key=${entity.key}`)
            .then(data => {
                setProgress(false)
                setData(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }, [])

    const getHtml = (obj, level, isDark) => {
        if (!obj) {
            return <span className="ms-2 ms-4 ms-6 ms-8 ms-10"></span>
        }
        return <ul>
            {
                Object.getOwnPropertyNames(obj).map(propertyName => {
                    const property = obj[propertyName]
                    return <li key={propertyName}>
                        <span className="font-bold text-purple-900 dark:text-yellow-400 font-mono px-2 ms-8 inline-block rounded-sm">{propertyName}<span>:</span> </span>
                        {
                            typeof property === "object" && property != null
                                ?
                                <span className="ms-10 block break-all">
                                    {getHtml(property, level + 1, isDark)}
                                </span>
                                :
                                <span className="inline-block ms-1 break-all">
                                    {`"${obj[propertyName]}"`}
                                </span>
                        }
                    </li>
                })
            }
        </ul>
    }


    return <Dialog
        title="InfraView"
        content={getHtml(data)}
    />
}

export default ViewSection
