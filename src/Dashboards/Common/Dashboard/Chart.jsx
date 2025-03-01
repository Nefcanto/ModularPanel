import { camelize } from "App"
import { BarChart } from "Dashboard"
import { useEntitySettings } from "Settings"

const Chart = ({
    block,
    setProgress,
}) => {

    const { getSetting } = useEntitySettings()

    const {
        data,
        dimensions,
        facts,
    } = block?.relatedItems?.content || {}

    const getHover = props => {
        return <>
            <div className="flex gap-2">
                <span>{dimensions?.[0]?.translation} :</span>
                <span>{props[camelize(dimensions?.[0]?.property)]}</span>

            </div>
            <div className="flex gap-2">
                <span>{facts?.[0]?.translation} :</span>
                <span>{props[camelize(facts?.[0]?.property)]}</span>
            </div>
            {
                facts?.[1]?.property &&
                <div className="flex gap-2">
                    <span>{facts?.[1]?.translation} :</span>
                    <span>{props[camelize(facts?.[1]?.property)]}</span>
                </div>
            }
            {
                facts?.[2]?.property &&
                <div className="flex gap-2">
                    <span>{facts?.[2]?.translation} :</span>
                    <span>{props[camelize(facts?.[2]?.property)]}</span>
                </div>
            }
            {
                facts?.[3]?.property &&
                <div className="flex gap-2">
                    <span>{facts?.[3]?.translation} :</span>
                    <span>{props[camelize(facts?.[3]?.property)]}</span>
                </div>
            }
            {
                facts?.[4]?.property &&
                <div className="flex gap-2">
                    <span>{facts?.[4]?.translation} :</span>
                    <span>{props[camelize(facts?.[4]?.property)]}</span>
                </div>
            }
        </>
    }

    const params = {}
    const angleOfLabels = getSetting(block, "angleOfLabels")
    if (angleOfLabels) {
        params.xAngle = angleOfLabels
    }
    const heightOfLabels = getSetting(block, "heightOfLabels")
    if (heightOfLabels) {
        params.xHeight = heightOfLabels
    }
    params.hasGrid = getSetting(block, "grid")
    if (getSetting(block, "showingHoverData")) {
        params.hover = getHover
    }
    if (facts?.[1]?.property) {
        params.y2 = camelize(facts[1].property)
    }
    if (facts?.[2]?.property) {
        params.y3 = camelize(facts[2].property)
    }
    if (facts?.[3]?.property) {
        params.y4 = camelize(facts[3].property)
    }
    if (facts?.[4]?.property) {
        params.y5 = camelize(facts[4].property)
    }
    const clickHandler = getSetting(block, "clickHandler")
    if (clickHandler) {
        params.onClick = clickHandler
    }

    return <div>
        <BarChart
            data={data}
            setProgress={setProgress}
            x={camelize(dimensions?.[0]?.property)}
            y={camelize(facts?.[0]?.property)}
            {...params}
        />
    </div>
}

export default Chart
