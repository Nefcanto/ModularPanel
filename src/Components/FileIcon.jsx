import { Icon } from '@fluentui/react/lib/Icon'
import { getFileTypeIconProps } from '@fluentui/react-file-type-icons'


const FileIcon = ({
    extension,
    big,
    small,
}) => {
    const getSize = () => {
        if (big) {
            return 48
        }
        if (small) {
            return 16
        }
        return 32
    }
    return <Icon
        {...getFileTypeIconProps({
            extension,
            size: getSize()
        })}
    />
}

export default FileIcon
