import { useState } from "react"
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
    useMapEvents,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Page } from "Panel"
import { useField } from "Hooks"

const Map = () => {
    const [position, setPosition] = useState(null)

    const latiField = useField({
        property: "Latitude",
        type: "Text",
    })
    const lngField = useField({
        property: "Longitude",
        type: "Text",
    })

    function LocationMarker() {
        const map = useMapEvents({
            click(e) {
                lngField.setChosenValue(e.latlng.lng)
                latiField.setChosenValue(e.latlng.lat)
                setPosition(e.latlng)
            },
        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }

    return <>
        <Page>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "350px" }}
            >
                <TileLayer
                    attribution="&copy; <a href=" https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LocationMarker />
            </MapContainer>

        </Page >
    </>
}

export default Map
