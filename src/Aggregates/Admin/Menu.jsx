import BarChartIcon from "@mui/icons-material/BarChart"

const AggregatesMenu = [
    {
        title: "AggregatesAggregates",
        icon: BarChartIcon,
        children: [
            {
                title: "InfraQueries",
                path: "/aggregates/queries"
            },
            {
                title: "InfraCodes",
                path: "/aggregates/codes"
            },
            {
                title: "AggregatesCubes",
                path: "/aggregates/cubes"
            }
        ]
    }
]

export default AggregatesMenu
