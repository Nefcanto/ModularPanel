import CalculateIcon from "@mui/icons-material/Calculate"
import { post } from "App"
import { useMessage } from "Hooks"
import { ListAction } from "List"

const CalculationAggregateAction = () => {

    const {
        error,
        success
    } = useMessage()

    return <ListAction
        title="PropertiesCalculateAllAgentsCommissionAggregate"
        icon={CalculateIcon}
        onClick={async () => {
            await post("/agent/calculateAllAgentsCommissionAggregate")
                .then(data => {
                    success("AggregatesSuccessCalculated")
                }, e => error(e))
        }}
    />
}

export default CalculationAggregateAction
