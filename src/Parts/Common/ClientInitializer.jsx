import { get } from "App"

const initialize = () => {

    get("/parts/data")
        .then(data => {
            window.parts = data
        }, e => {
            console.error(e)
        })
}

export default initialize
