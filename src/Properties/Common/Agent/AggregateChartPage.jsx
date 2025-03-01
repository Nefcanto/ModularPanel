import DimensionalChartPage from "../DimensionalChartPage"

const AgentAggregateChartPage = ({
    parentEntity,
    progress,
}) => {

    return !progress && <DimensionalChartPage
        breadcrumbItems={[
            {
                title: "PropertiesAgents",
                link: "/agents"
            },
            {
                title: parentEntity?.displayName,
                link: `/agents?displayName=containing_${parentEntity?.displayName}`
            }
        ]}
    />
}

export default AgentAggregateChartPage
