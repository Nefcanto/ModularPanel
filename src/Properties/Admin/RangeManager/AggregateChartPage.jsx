import { DimensionalChartPage } from "PropertiesCommon"

const RangeManagerAggregateChartPage = ({
    parentEntity,
    progress,
}) => {

    return !progress && <DimensionalChartPage
        breadcrumbItems={[
            {
                title: "PropertiesRangeManagers",
                link: "/properties/rangeManagers"
            },
            {
                title: parentEntity?.displayName,
                link: `/properties/rangeManagers?displayName=containing_${parentEntity?.displayName}`
            }
        ]}
    />
}

export default RangeManagerAggregateChartPage
