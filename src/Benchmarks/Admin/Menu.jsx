import BoltIcon from "@mui/icons-material/Bolt"

const BenchmarksMenu = [
    {
        title: "BenchmarksBenchmarks",
        icon: BoltIcon,
        children: [
            {
                title: "BenchmarksLookupKeys",
                path: "/lookupKeys"
            },
            {
                title: "BenchmarksLookupIds",
                path: "/lookupIds"
            },
            {
                title: "BenchmarksStringIds",
                path: "/stringIds"
            }
        ]
    }
]

export default BenchmarksMenu
