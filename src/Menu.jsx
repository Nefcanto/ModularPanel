import DashboardIcon from "@mui/icons-material/Dashboard"
import { AccountsMenu } from "Accounts"
import { ActionsMenu } from "Actions"
import { AdvertisementsMenu } from "Advertisements"
import { AggregatesMenu } from "Aggregates"
import { AnnotationsMenu } from "Annotations"
import { AnnouncementsMenu } from "Announcements"
import { AttributesMenu } from "Attributes"
import { AugmentorsMenu } from "Augmentors"
import { BannersMenu } from "Banners"
import { BenchmarksMenu } from "Benchmarks"
import { BlogMenu } from "Blog"
import { BrandsMenu } from "Brands"
import { BundlingMenu } from "Bundling"
import { ChangeLogMenu } from "ChangeLog"
import { CollaborationMenu } from "Collaboration"
import { CommissionsMenu } from "Commissions"
import { CompletionMenu } from "Completion"
import { ContactsMenu } from "Contacts"
import { ContentPoliciesMenu } from "ContentPolicies"
import { ContentsMenu } from "Contents"
import { ContractsMenu } from "Contracts"
import { CoursesMenu } from "Courses"
import { CurrenciesMenu } from "Currencies"
import { CustomersMenu } from "Customers"
import { DashboardsMenu } from "Dashboards"
import { DataTypesMenu } from "DataTypes"
import { DiscountsMenu } from "Discounts"
import { DynamicContactsMenu } from "DynamicContacts"
import { DynamicPartsMenu } from "DynamicParts"
import { EventsMenu } from "Events"
import { FaqsMenu } from "Faqs"
import { FlashcardsMenu } from "Flashcards"
import { FlowsMenu } from "Flows"
import { FormsMenu } from "Forms"
import { ForumsMenu } from "Forums"
import { GalleriesMenu } from "Galleries"
import { GeoMenu } from "Geo"
import { GlobalizationMenu } from "Globalization"
import { GlossaryMenu } from "Glossary"
import { GradingMenu } from "Grading"
import { GranularitiesMenu } from "Granularities"
import { InternshipMenu } from "Internship"
import { InventoryMenu } from "Inventory"
import { JobsMenu } from "Jobs"
import { LogsMenu } from "Logs"
import { MarketingMenu } from "Marketing"
import { MediaMenu } from "Media"
import { ModulesMenu } from "Modules"
import { MonetaryValuesMenu } from "MonetaryValues"
import { NavigationMenu } from "Navigation"
import { NewContentsMenu } from "NewContents"
import { NewTaxonomyMenu } from "NewTaxonomy"
import { NotificationsMenu } from "Notifications"
import { OrdersMenu } from "Orders"
import { OrganizationMenu } from "Organization"
import { PackagingMenu } from "Packaging"
import { PartsMenu } from "Parts"
import { PaymentMenu } from "Payment"
import { PayrollMenu } from "Payroll"
import { PlacesMenu } from "Places"
import { PodcastMenu } from "Podcast"
import { PricingMenu } from "Pricing"
import { ProductsMenu } from "Products"
import { ProjectsMenu } from "Projects"
import { PropertiesMenu } from "Properties"
import { PushesMenu } from "Pushes"
import { QuestionsMenu } from "Questions"
import { ReportingMenu } from "Reporting"
import { RestaurantsMenu } from "Restaurants"
import { RulesMenu } from "Rules"
import { SalesMenu } from "Sales"
import { SalonsMenu } from "Salons"
import { ScopesMenu } from "Scopes"
import { SeoMenu } from "Seo"
import { ServicesMenu } from "Services"
import { SettingsMenu } from "Settings"
import { ShipmentMenu } from "Shipment"
import { SocialMenu } from "Social"
import { StateMachinesMenu } from "StateMachines"
import { SubscriptionsMenu } from "Subscriptions"
import { TasksMenu } from "Tasks"
import { TechStackMenu } from "TechStack"
import { TelemetryMenu } from "Telemetry"
import { TemplatesMenu } from "Templates"
import { TenantsMenu } from "Tenants"
import { TestimonialsMenu } from "Testimonials"
import { TicketingMenu } from "Ticketing"
import { UnitsMenu } from "Units"
import { UsageEligibilityMenu } from "UsageEligibility"
import { VlogMenu } from "Vlog"
import { WalletMenu } from "Wallet"
import { WarrantyMenu } from "Warranty"
import { ZoomMenu } from "Zoom"

const menuItems = [
    {
        title: "InfraDashboard",
        icon: DashboardIcon,
        path: "/"
    },
    ...AccountsMenu,
    ...ActionsMenu,
    ...AdvertisementsMenu,
    ...AggregatesMenu,
    ...AnnotationsMenu,
    ...AnnouncementsMenu,
    ...AttributesMenu,
    ...AugmentorsMenu,
    ...BannersMenu,
    ...BenchmarksMenu,
    ...BlogMenu,
    ...BrandsMenu,
    ...BundlingMenu,
    ...ChangeLogMenu,
    ...CollaborationMenu,
    ...CommissionsMenu,
    ...CompletionMenu,
    ...ContactsMenu,
    ...ContentPoliciesMenu,
    ...ContentsMenu,
    ...ContractsMenu,
    ...CoursesMenu,
    ...CurrenciesMenu,
    ...CustomersMenu,
    ...DashboardsMenu,
    ...DataTypesMenu,
    ...DiscountsMenu,
    ...DynamicContactsMenu,
    ...DynamicPartsMenu,
    ...EventsMenu,
    ...FaqsMenu,
    ...FlashcardsMenu,
    ...FlowsMenu,
    ...FormsMenu,
    ...ForumsMenu,
    ...GalleriesMenu,
    ...GeoMenu,
    ...GlobalizationMenu,
    ...GlossaryMenu,
    ...GradingMenu,
    ...GranularitiesMenu,
    ...InternshipMenu,
    ...InventoryMenu,
    ...JobsMenu,
    ...LogsMenu,
    ...MarketingMenu,
    ...MediaMenu,
    ...ModulesMenu,
    ...MonetaryValuesMenu,
    ...NavigationMenu,
    ...NewContentsMenu,
    ...NewTaxonomyMenu,
    ...NotificationsMenu,
    ...OrdersMenu,
    ...OrganizationMenu,
    ...PackagingMenu,
    ...PartsMenu,
    ...PaymentMenu,
    ...PayrollMenu,
    ...PlacesMenu,
    ...PodcastMenu,
    ...PricingMenu,
    ...ProductsMenu,
    ...ProjectsMenu,
    ...PropertiesMenu,
    ...PushesMenu,
    ...QuestionsMenu,
    ...ReportingMenu,
    ...RestaurantsMenu,
    ...RulesMenu,
    ...SalesMenu,
    ...SalonsMenu,
    ...ScopesMenu,
    ...SeoMenu,
    ...ServicesMenu,
    ...SettingsMenu,
    ...ShipmentMenu,
    ...SocialMenu,
    ...StateMachinesMenu,
    ...SubscriptionsMenu,
    ...TasksMenu,
    ...TechStackMenu,
    ...TelemetryMenu,
    ...TemplatesMenu,
    ...TenantsMenu,
    ...TestimonialsMenu,
    ...TicketingMenu,
    ...UnitsMenu,
    ...UsageEligibilityMenu,
    ...VlogMenu,
    ...WalletMenu,
    ...WarrantyMenu,
    ...ZoomMenu,
]

export default menuItems
