import { get } from "App"

const initialize = () => {

    get("/tenant/current")
        .then(data => {
            window.tenant = data
        }, e => {
            console.error(e)
        })
}

export default initialize
