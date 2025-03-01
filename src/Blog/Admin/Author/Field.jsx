import {
    useEffect,
    useState,
} from "react"
import { get } from "App"
import { Select } from "Form"

const AuthorField = () => {

    const [authors, setAuthors] = useState([])
    const [progress, setProgress] = useState(true)

    useEffect(() => {
        setProgress(true)
        let url = `/author/all`
        get(url)
            .then(data => {
                setAuthors(data)
                setProgress(false)
            }, e => {
                console.log(e)
                setProgress(false)
            })
    }, [])

    const loadInitialValue = ({
        entity,
        setChosenValue,
        setDisplayValue,
        setInitialValue,
    }) => {
        setProgress(true)
        let url = `/authorPost/all?post=${entity.guid}`
        get(url)
            .then(data => {
                const values = data?.map(i => i.author)
                setInitialValue(values)
                setChosenValue(values)
                setProgress(false)
            }, e => {
                setProgress(false)
            })
    }

    return <Select
        choose={i => i.person}
        display={i => i.naturalPersonName}
        loading={progress}
        loadInitialValue={loadInitialValue}
        multi
        options={authors}
        placeholder="BlogAuthors"
        property="Authors"
    />
}

export default AuthorField
