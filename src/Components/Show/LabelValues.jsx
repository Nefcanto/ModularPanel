import LabelValue from "./LabelValue"

const LabelValues = ({
    entities,
    multiColumn,
    labelExtractor,
    valueExtractor,
    ...rest
}) => {
    return <div className="labelValues">
        {
            entities.map(entity => <LabelValue
                key={entity.id}
                label={labelExtractor(entity)}
                value={valueExtractor(entity)}
                {...rest}
            />)
        }
    </div>
}

export default LabelValues
