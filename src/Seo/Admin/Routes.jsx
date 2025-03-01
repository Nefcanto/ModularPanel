import BrokenLinks from "./BrokenLink/List"
import EntityFaqPages from "./EntityFaqPage/List"
import EntityParameterForm from "./EntityParameter/Form"
import EntityParameters from "./EntityParameter/List"
import Gones from "./Gone/List"
import LocalBusinessForm from "./LocalBusiness/Form"
import OrganizationForm from "./Organization/Form"
import PathParameterForm from "./PathParameter/Form"
import PathParameters from "./PathParameter/List"
import QueryParameterForm from "./QueryParameter/Form"
import QueryParameters from "./QueryParameter/List"
import Redirects from "./Redirect/List"
import Links from "./Link/List"
import LinkGroups from "./LinkGroup/List"
import SitemapGenerator from "./Sitemap/Generator"
import Snippets from "./Snippet/List"

const SeoRoutes = [
    {
        path: "/seo/entities",
        component: EntityParameters
    },
    {
        path: "/seo/entity",
        component: EntityParameterForm
    },
    {
        path: "/seo/queries",
        component: QueryParameters
    },
    {
        path: "/seo/query/upsert",
        component: QueryParameterForm
    },
    {
        path: "/seo/query/edit",
        component: QueryParameterForm
    },
    {
        path: "/seo/snippets",
        component: Snippets
    },
    {
        path: "/seo/redirects",
        component: Redirects
    },
    {
        path: "/seo/gones",
        component: Gones
    },
    {
        path: "/seo/brokenLinks",
        component: BrokenLinks
    },
    {
        path: "/seo/paths",
        component: PathParameters
    },
    {
        path: "/seo/pathParameters/upsert",
        component: PathParameterForm
    },
    {
        path: "/seo/entityFaqPages",
        component: EntityFaqPages
    },
    {
        path: "/seo/localBusiness",
        component: LocalBusinessForm
    },
    {
        path: "/seo/organization",
        component: OrganizationForm
    },
    {
        path: "/seo/sitemapGenerator",
        component: SitemapGenerator
    },
    {
        path: "/seo/linkGroups",
        component: LinkGroups
    },
    {
        path: "/seo/links",
        component: Links
    }
]

export default SeoRoutes
