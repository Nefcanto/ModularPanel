const Brand = ({ entity }) => {
    return <div>
        <div>{entity.originalName ?? entity.localizedName}</div>
    </div>
}

export default Brand
