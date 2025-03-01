import { useState } from "react"
import Collapse from "@mui/material/Collapse"
import {
    Check,
    DialogForm,
    Numeric,
} from "Form"
import AdditionTypeField from "../AdditionType/Field"

const inputs = entity => {

    const [hasPercent, setHasPercent] = useState(entity?.hasPercent)

    return <>
        <AdditionTypeField />
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

const AdditionForm = () => {

    return <DialogForm
        entityType="Addition"
        humanReadableEntityType="SalesAddition"
        inputs={inputs}
    />

}

export default AdditionForm
