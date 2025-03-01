import { useState } from "react"
import Button from "@mui/material/Button"
import { upload } from "App"
import { useMessage } from "Hooks"

const BigFileUpload = () => {

    const [data, setData] = useState()
    const [progress, setProgress] = useState(false)
    const { error } = useMessage()

    const simulate = () => {
        setProgress(true)
        let file = new File(["0123456789".repeat(50_000_000)], "name")
        let form = new FormData()
        form.append("file", file)
        upload("/debug/simulateBigFileUpload", form)
            .then(data => {
                setProgress(false)
                setData(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <div className="prose">
        <h1>Big file upload</h1>
        {
            progress
                ?
                <div>Uploading ...</div>
                :
                <Button onClick={simulate}>Simulate</Button>
        }
        {
            !progress && data && <h2>Done with {data} bytes</h2>
        }
    </div>
}

export default BigFileUpload
