import PolicyIcon from "@mui/icons-material/Policy"

const ContentPoliciesMenu = [
    {
        title: "ContentPoliciesContentPolicies",
        icon: PolicyIcon,
        children: [
            {
                title: "InfraSystem",
                path: "/systemContentPolicies"
            },
            {
                title: "InfraModuleHetero",
                path: "/moduleHeteroContentPolicies"
            },
            {
                title: "InfraModule",
                path: "/moduleContentPolicies"
            },
            {
                title: "InfraEntityTypeHetero",
                path: "/entityTypeHeteroContentPolicies"
            },
            {
                title: "InfraEntityType",
                path: "/entityTypeContentPolicies"
            },
            {
                title: "InfraEntityHetero",
                path: "/entityHeteroContentPolicies"
            },
            {
                title: "InfraEntity",
                path: "/entityContentPolicies"
            }
        ]
    }
]

export default ContentPoliciesMenu
