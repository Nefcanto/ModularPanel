import HandshakeIcon from "@mui/icons-material/Handshake"

const ContractsMenu = [
    {
        title: "ContractsContracts",
        icon: HandshakeIcon,
        children: [
            {
                title: "ContractsContracts",
                path: "/contracts"
            },
            {
                title: "ContractsRelationTypes",
                path: "/relationTypes"
            },
            {
                title: "NewTaxonomyCategories",
                path: "/contractHierarchies?entityType=Contract"
            }
        ]
    }
]

export default ContractsMenu
