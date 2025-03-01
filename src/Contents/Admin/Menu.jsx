import AbcIcon from "@mui/icons-material/Abc"

const ContentsMenu = [
    {
        title: "ContentsContents",
        icon: AbcIcon,
        children: [
            {
                title: "ContentsLayouts",
                path: "/layouts",
                superAdmin: true
            },
            {
                title: "ContentsPages",
                path: "/pages"
            },
            {
                title: "ContentsSections",
                path: "/sections"
            },
        ]
    }
]

export default ContentsMenu
