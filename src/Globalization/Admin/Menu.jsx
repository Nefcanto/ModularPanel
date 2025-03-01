import TranslateIcon from "@mui/icons-material/Translate"

const GlobalizationMenu = [
    {
        title: "GlobalizationGlobalization",
        icon: TranslateIcon,
        superAdmin: true,
        children: [
            {
                title: "GlobalizationLocales",
                path: "/globalization/locales"
            },
            {
                title: "GlobalizationTranslations",
                path: "/globalization/translations"
            },
            {
                title: "GlobalizationTranslate",
                path: "/globalization/translate"
            }
        ]
    }
]

export default GlobalizationMenu
