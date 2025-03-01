import card from "./Card"

const Image = ({ entity }) => {

    return <div className="w-48 lg:w-72">
        {card(entity)}
    </div>
}

export default Image
