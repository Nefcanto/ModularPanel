import Blob from "./Blob"

const Image = ({
    property,
    ...rest
}) => <Blob
        placeholder="InfraImage"
        property={property || "Image"}
        render={({ preview }) => <img
            className="rounded-lg shadow-md shadow-black object-cover "
            src={preview?.url}
        />}
        type="image"
        {...rest}
    />

export default Image
