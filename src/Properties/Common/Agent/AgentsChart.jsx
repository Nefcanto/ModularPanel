import CumulativeChart from "../CumulativeChart"

const AgentsChart = props => {

    return <CumulativeChart
        dataLoadingUrl="/agent/getAgentsAggregateCommission"
        title="PropertiesAgents"
        {...props}
    />
}

export default AgentsChart
