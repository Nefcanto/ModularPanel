import PercentIcon from "@mui/icons-material/Percent"
import Numeric from "./Numeric"

const Percent = props => {
    return <Numeric
        {...props}
        max={100}
        min={0}
        realNumbers
        startIcon={PercentIcon}
    />
}

export default Percent
