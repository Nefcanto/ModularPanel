const CityDivision = ({ entity }) => {
    return <div>
        <p>{entity.name.cut(20)}</p>
    </div>
}

export default CityDivision
