import { renderPlace } from "App"

const SequencePost = ({
    entity,
    place,
}) => {
    return <div>
        <div title={entity.postTitle}>
            {
                place === renderPlace.listRow
                    ?
                    entity.postTitle?.cut(20)
                    :
                    entity.postTitle
            }
        </div>
    </div>
}

export default SequencePost
