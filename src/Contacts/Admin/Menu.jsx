import PersonIcon from "@mui/icons-material/Person"

const ContactsMenu = [
    {
        title: "Contacts",
        icon: PersonIcon,
        children: [
            {
                title: "ContactsAllPersons",
                path: "/persons"
            },
            {
                title: "ContactsNaturalPersons",
                path: "/naturalPersons"
            },
            {
                title: "ContactsJuridicalPersons",
                path: "/juridicalPersons"
            },
            {
                title: "ContactsSocialNetworks",
                path: "/socialNetworks"
            },
            {
                title: "ContactsTitles",
                path: "/titles"
            },
            {
                title: "ContactsJobTitles",
                path: "/jobTitles"
            },
            {
                title: "ContactsRelations",
                path: "/relations"
            },
        ]
    }
]

export default ContactsMenu
