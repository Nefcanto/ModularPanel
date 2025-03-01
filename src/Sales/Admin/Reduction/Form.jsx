import { useState } from "react"
import Collapse from "@mui/material/Collapse"
import {
    Check,
    DialogForm,
    Numeric,
} from "Form"
import ReductionTypeField from "../ReductionType/Field"

const inputs = entity => {

    const [hasPercent, setHasPercent] = useState(entity?.hasPercent)

    return <>
        <ReductionTypeField />
        <Check
            onChange={value => { setHasPercent(value) }}
            placeholder="SalesHasPercent"
            property="HasPercent"
        />

        {
            <Collapse in={hasPercent}>
                <Numeric
                    placeholder="SalesHasPercent"
                    property="Percent"
                />
            </Collapse>
        }
    </>
}

const ReductionForm = () => {

    return <DialogForm
        entityType="Reduction"
        humanReadableEntityType="SalesReduction"
        inputs={inputs}
    />

}

export default ReductionForm
