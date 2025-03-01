import DownloadIcon from "@mui/icons-material/Download"
import { HolismIcon } from "Panel"
import Blob from "./Blob"

const File = ({
    property,
    url,
    ...rest
}) => {
    return <>
        <Blob
            type="file"
            className="flex-col"
            property={property || "File"}
            render={({ preview }) => <div>{preview.name}</div>}
            {...rest}
        />
        {
            url && <a
                href={url}
                download
                target="_blank"
            >
                <HolismIcon
                    icon={DownloadIcon}
                />
            </a>
        }
    </>
}

export default File
