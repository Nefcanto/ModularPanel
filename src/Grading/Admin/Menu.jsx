import GradeIcon from "@mui/icons-material/Grade"

const GradingMenu = [
    {
        title: "GradingGrading",
        icon: GradeIcon,
        children: [
            {
                title: "GradingSkills",
                path: "/skills"
            },
            {
                title: "GradingGrades",
                path: "/grades"
            }
        ]
    }
]

export default GradingMenu
