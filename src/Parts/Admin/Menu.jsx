import FingerprintIcon from "@mui/icons-material/Fingerprint"

const PartsMenu = [
    {
        title: "PartsParts",
        icon: FingerprintIcon,
        superAdmin: true,
        children: [
            {
                title: "PartsParts",
                path: "/parts/parts",
            },
            {
                title: "PartsTypes",
                path: "/parts/types",
            }
        ]
    }
]

export default PartsMenu
