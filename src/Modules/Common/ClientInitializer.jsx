import { get } from "App"

const initialize = () => {

    get("/modules/data")
        .then(data => {
            window.modules = data
        }, e => {
            console.error(e)
        })
}

export default initialize
