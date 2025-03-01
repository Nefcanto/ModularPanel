import ContentCutIcon from "@mui/icons-material/ContentCut"

const SalonsMenu = [
    {
        title: "SalonsSalons",
        icon: ContentCutIcon,
        children: [
            {
                title: "SalonsSalons",
                path: "/salons"
            },
            {
                title: "SalonsTypes",
                path: "/salon/types"
            }
        ]
    }
]

export default SalonsMenu
