import {
    useContext,
    useState,
} from "react"
import { t } from "App"
import {
    DialogContext,
    EntityContext,
} from "Contexts"
import { useColorPicker } from "Hooks"
import DialogForm from "../../Form/DialogForm"
import Color from "../../Form/Fields/Color"

const ListColor = ({
    colorsDecoded,
    setTargetColorKey
}) => {

    return <span
        className="inline-grid grid-cols-2 w-48 gap-2"
        dir="ltr"
    >
        {
            Object.keys(colorsDecoded).map(value => {
                const rgbReadableForCss = Object.values(colorsDecoded[value]).toString()
                return <>
                    <span>{value}</span>
                    <span
                        className="w-4 h-4 rounded-full cursor-pointer border-2 border-[#cbd5e1]"
                        key={value}
                        onClick={() => setTargetColorKey(value)}
                        style={{
                            backgroundColor: `rgb(${rgbReadableForCss})`
                        }}
                        title={value}
                    />
                </>
            })
        }
    </span>
}

const ColorProperty = ({
    colors,
    entityId,
    entityType,
    ...rest
}) => {
    const {
        entity,
        isTable,
    } = useContext(EntityContext || {})
    const currentEntityType = entityType ?? entity?.relatedItems?.entityType
    const [
        colorsDecoded,
        saveColors,
        setColor,
    ] = useColorPicker(colors, entityId, currentEntityType)
    const [targetColorKey, setTargetColorKey] = useState(false)

    const okAction = props => {
        saveColors(props)
        setTargetColorKey(false)
    }

    let jsx = <div>
        {
            colors ? <>
                <DialogContext.Provider
                    value={{
                        open: targetColorKey,
                        setOpen: setTargetColorKey
                    }}
                >
                    <DialogForm
                        entityType={entityType}
                        explanations={targetColorKey}
                        inputs={<>
                            <Color
                                color={colorsDecoded[targetColorKey]}
                                colorKey={targetColorKey}
                                onChange={setColor}
                            />
                        </>}
                        okAction={okAction}
                        title="InfraChooseColor"
                    />
                </DialogContext.Provider>
                <ListColor
                    colorsDecoded={colorsDecoded}
                    setTargetColorKey={setTargetColorKey}
                />
            </> :
                t("InfraPleaseFirstGenerateColorVariables")
        }
    </div>

    if (isTable) {
        jsx = <td {...rest}>
            {jsx}
        </td>
    }

    return jsx
}

export default ColorProperty
