import {
    useEffect,
    useState,
} from "react"
import {
    Check,
    LongText,
    Numeric,
    Title,
} from "Form"
import { useEntitySettings } from "Settings"
import { GeoFields } from "Geo"
import PropertyTypeField from "../PropertyType/Field"
import DealTypeAndPriceField from "../DealTypeAndPriceField"

const PropertyInputs = () => {

    const { getEntitySetting } = useEntitySettings()
    const [hasParkingsCount, setHasParkingsCount] = useState(false)
    useEffect(() => {
        getEntitySetting({
            entityType: "Property",
            key: "hasParkingsCount",
            module: "properties",
        }).then(data => {
            setHasParkingsCount((data?.toLowerCase() == true.toString().toLowerCase()) || false)
        })
    }, [])

    return <>
        <Title />
        <GeoFields
            entityType="Property"
            module="Properties"
            required
        />
        <PropertyTypeField />
        <DealTypeAndPriceField />
        <Numeric
            integers
            placeholder="PropertiesRoomCount"
            property="RoomsCount"
        />
        <Numeric
            integers
            placeholder="PropertiesAge"
            property="Age"
        />
        <Check
            placeholder="PropertiesHasParking"
            property="HasParking"
        />
        {
            hasParkingsCount && <Numeric
                integers
                placeholder="PropertiesParkingsCount"
                property="ParkingsCount"
            />
        }
        <LongText
            placeholder="PropertiesNote"
            property="Note"
        />
    </>
}

export default PropertyInputs
