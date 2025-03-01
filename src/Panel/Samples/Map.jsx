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

const Map = () => {

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click(e) {
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
                style={{ height: "450px" }}
            >
                <TileLayer
                    attribution="&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LocationMarker/>
            </MapContainer>

        </Page >
    </>
}

export default Map
