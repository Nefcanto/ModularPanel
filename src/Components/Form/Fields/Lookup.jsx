import { useLookup } from "Hooks"
import Select from "./Select"
import Radio from "./Radio"
import Hidden from "./Hidden"

const Lookup = props => {

    const lookupProps = useLookup(props)
    const {
        hideForSingleItem,
        isSingleItem,
        radio,
        singleItemValue,
    } = lookupProps

    return hideForSingleItem && isSingleItem
        ?
        <Hidden
            {...props}
            value={singleItemValue}
        />
        :
        radio
            ?
            <Radio
                {...props}
                {...lookupProps}
            />
            :
            <Select
                {...props}
                {...lookupProps}
            />
}

export default Lookup
