import {
    Addresses,
    BankAccounts,
    JuridicalPersons,
    NaturalPersons,
    PersonInfo,
    Persons,
    Phones,
    Relations,
    SocialNetworks,
    SocialProfiles,
} from "ContactsCommon"
import Attributes from "./Attribute/List"
import JobTitles from "./JobTitle/List"
import Titles from "./Titles/List"

const ContactsRoutes = [
    {
        path: "/bankAccounts",
        component: BankAccounts
    },
    {
        path: "/persons",
        component: Persons
    },
    {
        path: "/naturalPersons",
        component: NaturalPersons
    },
    {
        path: "/juridicalPersons",
        component: JuridicalPersons
    },
    {
        path: "/titles",
        component: Titles
    },
    {
        path: "/jobTitles",
        component: JobTitles
    },
    {
        path: "/relations",
        component: Relations
    },
    {
        path: "/profile",
        component: PersonInfo
    },
    {
        path: "/addresses",
        component: Addresses
    },
    {
        path: "/phones",
        component: Phones
    },
    {
        path: "/person/attributes",
        component: Attributes
    },
    {
        path: "/socialNetworks",
        component: SocialNetworks
    },
    {
        path: "/socialProfiles",
        component: SocialProfiles
    }
]

export default ContactsRoutes
