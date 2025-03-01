import {
    filterOperator,
    t,
} from "App"
import Numeric from "./Numeric"

const NumericRange = ({
    placeholder,
    property,
    ...rest
}) => {

    return <>
        <Numeric
            operator={filterOperator.greaterThanOrEqualTo}
            placeholder={`${t(placeholder || property)} (${t("InfraFrom")})`}
            property={`${property}From`}
            {...rest}
        />
        <Numeric
            operator={filterOperator.lessThanOrEqualTo}
            placeholder={`${t(placeholder || property)} (${t("InfraTo")})`}
            property={`${property}To`}
            {...rest}
        />
    </>
}

export default NumericRange
