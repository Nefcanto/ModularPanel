import BaseChart from "../BaseChart"

const EntityChart = ({
    entityGuid,
    entityType,
    reload,
}) => {
    return entityGuid && entityType && <BaseChart
        loadingUrl={`/entityMonthlyQuantity/list?entityGuid=${entityGuid}&entityType=${entityType}`}
        interval="monthly"
        reload={reload}
    />
}

export default EntityChart
