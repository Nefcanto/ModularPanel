const Salon = ({ entity }) => {
    return <p>
        {entity.title.cut(20)}
    </p>
}

export default Salon
