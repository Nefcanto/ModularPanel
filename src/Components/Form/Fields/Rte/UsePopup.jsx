import {
    useEffect,
    useState,
} from "react"

const usePopup = popupRef => {
    const [showPopup, setShowPopup] = useState(false)

    useEffect(() => {
        const handleDocumentClick = (e) => {
            const clickedComponent = e.target
            if (!popupRef?.current?.contains(clickedComponent)) {
                setShowPopup(false)
            }
        }
        document.addEventListener("click", handleDocumentClick)

        return () => {
            document.removeEventListener("click", handleDocumentClick)
        }
    }, [])

    return [showPopup, setShowPopup]
}

export default usePopup
