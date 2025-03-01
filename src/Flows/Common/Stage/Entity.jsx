const Stage = ({ entity }) => {
    return <>
        {entity.title}
        {
            entity.percentShareInFlow &&
            <sup>{entity.percentShareInFlow}%</sup>
        }
    </>
}

export default Stage
