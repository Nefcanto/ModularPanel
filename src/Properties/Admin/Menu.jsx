import DomainIcon from "@mui/icons-material/Domain"

const PropertiesMenu = [
    {
        title: "PropertiesProperties",
        icon: DomainIcon,
        children: [
            {
                title: "PropertiesListOfAds",
                path: "/properties/properties"
            },
            {
                title: "PropertiesFiles",
                path: "/properties/propertyFiles"
            },
            {
                title: "PropertiesRangeManagers",
                path: "/properties/rangeManagers"
            },
            {
                title: "PropertiesAgents",
                path: "/properties/agents"
            },
            {
                title: "PropertiesDealTypes",
                path: "/properties/dealTypes",
                superAdmin: true,
            },
            {
                title: "PropertiesPropertyTypes",
                path: "/properties/propertyTypes",
                superAdmin: true,
            }
        ]
    }
]

export default PropertiesMenu
