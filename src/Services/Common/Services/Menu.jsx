import CleaningServicesIcon from "@mui/icons-material/CleaningServices"

const ServicesMenu = [
    {
        icon: CleaningServicesIcon,
        path: "/services",
        title: "ServicesServices",
        children: [
            {
                path: "/services",
                title: "ServicesServices",
            },
            {
                path: "/attributes?entityType=service",
                title: "Attributes"
            }
        ]
    }
]

export default ServicesMenu
