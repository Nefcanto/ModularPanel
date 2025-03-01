import { io } from "socket.io-client"

const host = window.location.host.split(".").reverse()[1]
const socketUrl = window.settings.PushUrl
    ?
    `${window.settings.PushUrl}/${host}`
    :
    `https://push.pydr.ir/${host}`
console.log(socketUrl)

let socket
try {
    socket = io(socketUrl)
} catch (error) {
    console.log(error)
}

const usePush = () => {

    const send = data => {
        socket?.emit("admin", data)
    }

    const receive = callback => {
        socket?.on("admin", data => callback(data))
    }

    return {
        isConnected: socket.connected,
        send,
        receive,
    }
}

export default usePush
