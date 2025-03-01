import CumulativeChart from "../CumulativeChart"

const RangerManagersChart = props => {

    return <CumulativeChart
        {...props}
        dataLoadingUrl={"/rangeManager/getAggregateCommissionForAll"}
        title={"PropertiesRangeManagers"}
    />
}

export default RangerManagersChart
