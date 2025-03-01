import { useContext } from "react"
import Collapse from "@mui/material/Collapse"
import { FormContext } from "Contexts"
import Unify from "../Unify"
import Progress from "../Progress"

const FormElement = ({
    handleSubmit,
    id,
    inputs,
    isInline,
}) => {

    const {
        contentProgress,
        currentEntity,
        externalProgress,
        formMode,
        mode,
        progress,
    } = useContext(FormContext)

    const doesDestructure = func => {
        return /\({.+}\)/gm.test(func.toString().replaceAll("\n", "").split("=>")[0])
    }

    const finalInputs = inputs instanceof Function
        ?
        doesDestructure(inputs)
            ?
            inputs({
                currentEntity: currentEntity || {},
                formMode,
                mode,
            })
            :
            inputs(currentEntity || {})
        :
        inputs

    const jsx = <>
        <div>hi</div>
    </>

    return <form
        id={id || "form"}
        noValidate
        onSubmit={handleSubmit}
    >
        {
            isInline
                ?
                <>
                    <div className="relative w-full h-full">
                        <div id="fields">
                            <Unify component={finalInputs} />
                        </div>
                        {
                            (externalProgress || contentProgress || progress)
                            &&
                            <div className="absolute inset-0 grid place-items-center opacity-30 bg-gray-800 ">
                                <Progress />
                            </div>
                        }
                    </div>
                </>
                :
                <>
                    <div
                        id="fields"
                        className={(externalProgress || contentProgress) && "grid place-items-center"}>
                        <Collapse in={externalProgress || contentProgress}>
                            <div className="py-10">
                                <Progress />
                            </div>
                        </Collapse>
                        <Collapse in={!externalProgress && !contentProgress}>
                            {
                                // todo: Consider adding IsVital and Key and Guid to all forms for super admin
                            }
                            <Unify
                                component={finalInputs}
                            />
                        </Collapse>
                    </div>
                </>
        }
    </form>
}

export default FormElement
