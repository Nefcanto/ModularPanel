import CheckIcon from "@mui/icons-material/Check"
import ClearIcon from "@mui/icons-material/Clear"
import RemoveIcon from "@mui/icons-material/Remove"
import HolismIcon from "../HolismIcon"

const Boolean = ({
    nullable,
    value,
}) => {
    return <div className={"" + (
        value === true
            ?
            " text-green-600 "
            :
            value === false
                ?
                " text-red-600 "
                :
                ""
    )}
    >
        {
            nullable
                ?
                value === true
                    ?
                    <HolismIcon icon={CheckIcon} />
                    :
                    value === false
                        ?
                        <HolismIcon icon={ClearIcon} />
                        :
                        <HolismIcon icon={RemoveIcon} />
                :
                value === true
                    ?
                    <HolismIcon icon={CheckIcon} />
                    :
                    <HolismIcon icon={ClearIcon} />
        }
    </div>
}

export default Boolean
