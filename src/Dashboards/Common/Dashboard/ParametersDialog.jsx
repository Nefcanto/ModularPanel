import { Dialog } from "Panel"
import Parameter from "../Parameter/Parameter"
import Date from "../Parameter/Date"
import DateTime from "../Parameter/DateTime"

const ParametersDialog = ({ block }) => {

    const parameters = block.relatedItems.query?.relatedItems?.parameters || block.relatedItems.code?.relatedItems?.parameters

    const jsx = parameters.map(parameter => {

        let inputJsx = <span>{parameter.translation} - {parameter.dataType}</span>

        switch (parameter.dataType) {
            case "date":
                inputJsx = <Date
                    block={block}
                    parameter={parameter}
                />
                break
            default:
                break
        }
        return <Parameter
            key={parameter.id}
        >
            {inputJsx}
        </Parameter>
    })

    return <Dialog
        title="InfraParameters"
        content={jsx}
    />
}

export default ParametersDialog
