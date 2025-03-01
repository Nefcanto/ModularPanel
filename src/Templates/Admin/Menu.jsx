import FormatShapesIcon from "@mui/icons-material/FormatShapes"

const TemplatesMenu = [
    {
        title: "TemplatesTemplates",
        icon: FormatShapesIcon,
        children: [
            {
                title: "TemplatesTemplates",
                path: "/templates"
            },
            {
                title: "TemplatesTest",
                path: "/testTemplate",
                superAdmin: true
            }
        ]
    }
]

export default TemplatesMenu
