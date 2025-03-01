import FingerprintIcon from "@mui/icons-material/Fingerprint"

const ModulesMenu = [
    {
        title: "ModulesModules",
        icon: FingerprintIcon,
        superAdmin: true,
        children: [
            {
                title: "ModulesModules",
                path: "/modules",
            },
            {
                title: "ModulesEntityTypes",
                path: "/entityTypes",
            }
        ]
    }
]

export default ModulesMenu
