import {
    useEffect,
    useState,
} from "react"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import {
    camelize,
    get,
    pascalize,
    t,
} from "App"
import { useTop } from "Hooks"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import Progress from "../Components/Progress"
import PrimaryButton from "../Components/Button/PrimaryButton"
import EntityRenderers from "EntityRenderers"
import ErrorBoundary from "../Components/ErrorBoundary"

const Search = () => {

    const [progress, setProgress] = useState(false)
    const [phrase, setPhrase] = useState("")
    const [result, setResult] = useState()
    const [partsWithResults, setPartsWithResults] = useState()

    const search = () => {
        if (!phrase) {
            return
        }
        setProgress(true)
        let url = `/search/perform?term=${phrase}&whole=true`
        get(url)
            .then(data => {
                setResult(data)
                setProgress(false)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const getWithResults = object => {
        const withResults = Object.entries(object)
            .filter(([key, value]) => key !== "hasResults" && value === true)
            .map(([key, value]) => [key.replace(/Results|has/g, ""), value])
            .map(([key, value]) => camelize(key))
        return withResults
    }

    useTop({
        title: "InfraSearch"
    })

    useEffect(() => {
        if (typeof result !== "object") {
            return
        }
        setPartsWithResults(getWithResults(result))
    }, [result])

    const handleKeyDown = e => {
        if (e.key === "Enter") {
            search()
        }
    }

    const typeJsx = (part, type) => <div
        key={`${part}${type}`}
    >
        <div>
            {t("InfraType")}: {t(`${pascalize(part)}${pascalize(type)}`)}
        </div>
        <ListContext.Provider
            value={{}}
        >
            <ul>
                {
                    result[part][type]?.map(item =>
                        <EntityContext.Provider
                            key={item.id}
                            value={{
                                entity: item,
                                isTable: false,
                            }}
                        >
                            <EntityRenderers
                                entity={item}
                                entityType={pascalize(item.relatedItems.entityType)}
                                module={pascalize(item.relatedItems.module)}
                            />
                        </EntityContext.Provider>
                    )
                }
            </ul>
        </ListContext.Provider>
    </div>

    const partJsx = part => <div
        className="border-t border-slate-600 mt-8"
        key={part}
    >
        <div>
            {t("InfraPart")}: {t(`${pascalize(part)}${pascalize(part)}`)}
        </div>
        <div className="ms-8 mt-8">
            {
                getWithResults(result[part])?.map(type => typeJsx(part, type))
            }
        </div>
    </div>

    return <div>
        <div className="flex items-center gap-4">
            <TextField
                className="w-full lg:w-1/2"
                disabled={progress}
                onChange={e => setPhrase(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t("InfraSearch")}
                value={phrase}
            />
            {
                progress
                    ?
                    <Progress />
                    :
                    <PrimaryButton
                        icon={SearchIcon}
                        onClick={search}
                        text="InfraSearch"
                    />
            }
        </div>
        <ErrorBoundary>
            {
                result?.hasResults &&
                <div>
                    {
                        partsWithResults?.map(part => partJsx(part))
                    }
                </div>
            }
        </ErrorBoundary>
    </div>
}

export default Search
