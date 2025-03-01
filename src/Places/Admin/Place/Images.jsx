import { Images } from "Media"

const PlaceImages = ({
    parentEntity,
    progress,
    returnTo,
    ...rest
}) => {

    return !progress &&
        <Images
            breadcrumbItems={[
                {
                    title: `${returnTo ?? "PlacesPlaces"}`,
                    link: `/${returnTo ?? "places"}`
                },
                {
                    title: `${parentEntity?.title}`,
                    link: `/${returnTo ?? "places"}?title=${parentEntity?.title}`
                },
                {
                    title: "InfraImages"
                }
            ]}
            {...rest}
        />
}

export default PlaceImages
