import { FieldContext } from "Contexts"
    import { Text } from "Form"
    import AccountsUserField from "./Accounts/Admin/User/Field.jsx"
import AggregatesCodeField from "./Aggregates/Admin/Code/Field.jsx"
import AggregatesQueryField from "./Aggregates/Admin/Query/Field.jsx"
import AttributesAttributeField from "./Attributes/Common/Attribute/Field.jsx"
import BlogAuthorField from "./Blog/Admin/Author/Field.jsx"
import BlogPostField from "./Blog/Admin/Post/Field.jsx"
import BrandsBrandField from "./Brands/Common/Brand/Field.jsx"
import CommissionsReasonField from "./Commissions/Admin/Reason/Field.jsx"
import ContactsJobTitleField from "./Contacts/Admin/JobTitle/Field.jsx"
import ContactsJuridicalPersonField from "./Contacts/Common/JuridicalPerson/Field.jsx"
import ContactsNaturalPersonField from "./Contacts/Common/NaturalPerson/Field.jsx"
import ContactsPersonField from "./Contacts/Common/Person/Field.jsx"
import ContactsSocialNetworkField from "./Contacts/Common/SocialNetwork/Field.jsx"
import ContentPoliciesPolicyField from "./ContentPolicies/Admin/Policy/Field.jsx"
import ContractsRelationTypeField from "./Contracts/Admin/RelationType/Field.jsx"
import CurrenciesCurrencyField from "./Currencies/Common/Currency/Field.jsx"
import CurrenciesCurrencyPrefixField from "./Currencies/Common/CurrencyPrefix/Field.jsx"
import DataTypesDataTypeField from "./DataTypes/Common/DataType/Field.jsx"
import DiscountsTypeField from "./Discounts/Admin/Type/Field.jsx"
import FlowsFlowField from "./Flows/Common/Flow/Field.jsx"
import GeoAdministrativeDivisionField from "./Geo/Common/AdministrativeDivision/Field.jsx"
import GeoCityField from "./Geo/Common/City/Field.jsx"
import GeoCityDivisionField from "./Geo/Common/CityDivision/Field.jsx"
import GeoCountryField from "./Geo/Common/Country/Field.jsx"
import GlobalizationLocaleField from "./Globalization/Admin/Locale/Field.jsx"
import GradingLevelField from "./Grading/Admin/Level/Field.jsx"
import GranularitiesGranularityField from "./Granularities/Common/Granularity/Field.jsx"
import InterfacesInterfaceField from "./Interfaces/Common/Interface/Field.jsx"
import InventoryWarehouseField from "./Inventory/Admin/Warehouse/Field.jsx"
import InventorySupplierField from "./Inventory/Common/Supplier/Field.jsx"
import ModulesEntityTypeField from "./Modules/Common/EntityType/Field.jsx"
import ModulesModuleField from "./Modules/Common/Module/Field.jsx"
import MonetaryValuesMonetaryValueField from "./MonetaryValues/Common/MonetaryValue/Field.jsx"
import NewTaxonomyCategoryField from "./NewTaxonomy/Common/Category/Field.jsx"
import NewTaxonomyTagField from "./NewTaxonomy/Common/Tag/Field.jsx"
import OrdersOrderField from "./Orders/Common/Order/Field.jsx"
import OrganizationDepartmentField from "./Organization/Admin/Department/Field.jsx"
import OrganizationEmployeeField from "./Organization/Admin/Employee/Field.jsx"
import PartsPartField from "./Parts/Common/Part/Field.jsx"
import PartsTypeField from "./Parts/Common/Type/Field.jsx"
import PlacesPlaceField from "./Places/Common/Place/Field.jsx"
import PodcastSpeakerField from "./Podcast/Admin/Speaker/Field.jsx"
import PricingIntervalField from "./Pricing/Common/Interval/Field.jsx"
import PricingPriceField from "./Pricing/Common/Price/Field.jsx"
import ProductsProductField from "./Products/Admin/Product/Field.jsx"
import PropertiesAgentField from "./Properties/Admin/Agent/Field.jsx"
import PropertiesDealTypeField from "./Properties/Admin/DealType/Field.jsx"
import PropertiesRangeManagerField from "./Properties/Admin/RangeManager/Field.jsx"
import PropertiesPropertyTypeField from "./Properties/Common/PropertyType/Field.jsx"
import SalesAdditionTypeField from "./Sales/Admin/AdditionType/Field.jsx"
import SalesReductionTypeField from "./Sales/Admin/ReductionType/Field.jsx"
import ScopesScopeField from "./Scopes/Common/Scope/Field.jsx"
import SeoLinkGroupField from "./Seo/Admin/LinkGroup/Field.jsx"
import SettingsSettingField from "./Settings/Common/Setting/Field.jsx"
import TemplatesTemplateField from "./Templates/Admin/Template/Field.jsx"
import TenantsTenantField from "./Tenants/Admin/Tenant/Field.jsx"
import UnitsPrefixField from "./Units/Common/Prefix/Field.jsx"
import UnitsUnitField from "./Units/Common/Unit/Field.jsx"

const FieldBrowsersAndLookups = ({
        type,
        part,
    }) => {

    if (part === "" || type === "") {
        return null
    }

    let component = <Text
        placeholder="InfraEntity"
        property="Entity"
    />
    
    if (part === "Accounts" && (type === "User" || type === "AccountsUser")) {
        component = <FieldContext.Provider
            value={{
                type: "User",
                forGranularSelection: true,
                part: "Accounts",
                property: "Entity",
            }}
        >
            <AccountsUserField />
        </FieldContext.Provider>
    }
    else if (part === "Aggregates" && (type === "Code" || type === "AggregatesCode")) {
        component = <FieldContext.Provider
            value={{
                type: "Code",
                forGranularSelection: true,
                part: "Aggregates",
                property: "Entity",
            }}
        >
            <AggregatesCodeField />
        </FieldContext.Provider>
    }
    else if (part === "Aggregates" && (type === "Query" || type === "AggregatesQuery")) {
        component = <FieldContext.Provider
            value={{
                type: "Query",
                forGranularSelection: true,
                part: "Aggregates",
                property: "Entity",
            }}
        >
            <AggregatesQueryField />
        </FieldContext.Provider>
    }
    else if (part === "Attributes" && (type === "Attribute" || type === "AttributesAttribute")) {
        component = <FieldContext.Provider
            value={{
                type: "Attribute",
                forGranularSelection: true,
                part: "Attributes",
                property: "Entity",
            }}
        >
            <AttributesAttributeField />
        </FieldContext.Provider>
    }
    else if (part === "Blog" && (type === "Author" || type === "BlogAuthor")) {
        component = <FieldContext.Provider
            value={{
                type: "Author",
                forGranularSelection: true,
                part: "Blog",
                property: "Entity",
            }}
        >
            <BlogAuthorField />
        </FieldContext.Provider>
    }
    else if (part === "Blog" && (type === "Post" || type === "BlogPost")) {
        component = <FieldContext.Provider
            value={{
                type: "Post",
                forGranularSelection: true,
                part: "Blog",
                property: "Entity",
            }}
        >
            <BlogPostField />
        </FieldContext.Provider>
    }
    else if (part === "Brands" && (type === "Brand" || type === "BrandsBrand")) {
        component = <FieldContext.Provider
            value={{
                type: "Brand",
                forGranularSelection: true,
                part: "Brands",
                property: "Entity",
            }}
        >
            <BrandsBrandField />
        </FieldContext.Provider>
    }
    else if (part === "Commissions" && (type === "Reason" || type === "CommissionsReason")) {
        component = <FieldContext.Provider
            value={{
                type: "Reason",
                forGranularSelection: true,
                part: "Commissions",
                property: "Entity",
            }}
        >
            <CommissionsReasonField />
        </FieldContext.Provider>
    }
    else if (part === "Contacts" && (type === "JobTitle" || type === "ContactsJobTitle")) {
        component = <FieldContext.Provider
            value={{
                type: "JobTitle",
                forGranularSelection: true,
                part: "Contacts",
                property: "Entity",
            }}
        >
            <ContactsJobTitleField />
        </FieldContext.Provider>
    }
    else if (part === "Contacts" && (type === "JuridicalPerson" || type === "ContactsJuridicalPerson")) {
        component = <FieldContext.Provider
            value={{
                type: "JuridicalPerson",
                forGranularSelection: true,
                part: "Contacts",
                property: "Entity",
            }}
        >
            <ContactsJuridicalPersonField />
        </FieldContext.Provider>
    }
    else if (part === "Contacts" && (type === "NaturalPerson" || type === "ContactsNaturalPerson")) {
        component = <FieldContext.Provider
            value={{
                type: "NaturalPerson",
                forGranularSelection: true,
                part: "Contacts",
                property: "Entity",
            }}
        >
            <ContactsNaturalPersonField />
        </FieldContext.Provider>
    }
    else if (part === "Contacts" && (type === "Person" || type === "ContactsPerson")) {
        component = <FieldContext.Provider
            value={{
                type: "Person",
                forGranularSelection: true,
                part: "Contacts",
                property: "Entity",
            }}
        >
            <ContactsPersonField />
        </FieldContext.Provider>
    }
    else if (part === "Contacts" && (type === "SocialNetwork" || type === "ContactsSocialNetwork")) {
        component = <FieldContext.Provider
            value={{
                type: "SocialNetwork",
                forGranularSelection: true,
                part: "Contacts",
                property: "Entity",
            }}
        >
            <ContactsSocialNetworkField />
        </FieldContext.Provider>
    }
    else if (part === "ContentPolicies" && (type === "Policy" || type === "ContentPoliciesPolicy")) {
        component = <FieldContext.Provider
            value={{
                type: "Policy",
                forGranularSelection: true,
                part: "ContentPolicies",
                property: "Entity",
            }}
        >
            <ContentPoliciesPolicyField />
        </FieldContext.Provider>
    }
    else if (part === "Contracts" && (type === "RelationType" || type === "ContractsRelationType")) {
        component = <FieldContext.Provider
            value={{
                type: "RelationType",
                forGranularSelection: true,
                part: "Contracts",
                property: "Entity",
            }}
        >
            <ContractsRelationTypeField />
        </FieldContext.Provider>
    }
    else if (part === "Currencies" && (type === "Currency" || type === "CurrenciesCurrency")) {
        component = <FieldContext.Provider
            value={{
                type: "Currency",
                forGranularSelection: true,
                part: "Currencies",
                property: "Entity",
            }}
        >
            <CurrenciesCurrencyField />
        </FieldContext.Provider>
    }
    else if (part === "Currencies" && (type === "CurrencyPrefix" || type === "CurrenciesCurrencyPrefix")) {
        component = <FieldContext.Provider
            value={{
                type: "CurrencyPrefix",
                forGranularSelection: true,
                part: "Currencies",
                property: "Entity",
            }}
        >
            <CurrenciesCurrencyPrefixField />
        </FieldContext.Provider>
    }
    else if (part === "DataTypes" && (type === "DataType" || type === "DataTypesDataType")) {
        component = <FieldContext.Provider
            value={{
                type: "DataType",
                forGranularSelection: true,
                part: "DataTypes",
                property: "Entity",
            }}
        >
            <DataTypesDataTypeField />
        </FieldContext.Provider>
    }
    else if (part === "Discounts" && (type === "Type" || type === "DiscountsType")) {
        component = <FieldContext.Provider
            value={{
                type: "Type",
                forGranularSelection: true,
                part: "Discounts",
                property: "Entity",
            }}
        >
            <DiscountsTypeField />
        </FieldContext.Provider>
    }
    else if (part === "Flows" && (type === "Flow" || type === "FlowsFlow")) {
        component = <FieldContext.Provider
            value={{
                type: "Flow",
                forGranularSelection: true,
                part: "Flows",
                property: "Entity",
            }}
        >
            <FlowsFlowField />
        </FieldContext.Provider>
    }
    else if (part === "Geo" && (type === "AdministrativeDivision" || type === "GeoAdministrativeDivision")) {
        component = <FieldContext.Provider
            value={{
                type: "AdministrativeDivision",
                forGranularSelection: true,
                part: "Geo",
                property: "Entity",
            }}
        >
            <GeoAdministrativeDivisionField />
        </FieldContext.Provider>
    }
    else if (part === "Geo" && (type === "City" || type === "GeoCity")) {
        component = <FieldContext.Provider
            value={{
                type: "City",
                forGranularSelection: true,
                part: "Geo",
                property: "Entity",
            }}
        >
            <GeoCityField />
        </FieldContext.Provider>
    }
    else if (part === "Geo" && (type === "CityDivision" || type === "GeoCityDivision")) {
        component = <FieldContext.Provider
            value={{
                type: "CityDivision",
                forGranularSelection: true,
                part: "Geo",
                property: "Entity",
            }}
        >
            <GeoCityDivisionField />
        </FieldContext.Provider>
    }
    else if (part === "Geo" && (type === "Country" || type === "GeoCountry")) {
        component = <FieldContext.Provider
            value={{
                type: "Country",
                forGranularSelection: true,
                part: "Geo",
                property: "Entity",
            }}
        >
            <GeoCountryField />
        </FieldContext.Provider>
    }
    else if (part === "Globalization" && (type === "Locale" || type === "GlobalizationLocale")) {
        component = <FieldContext.Provider
            value={{
                type: "Locale",
                forGranularSelection: true,
                part: "Globalization",
                property: "Entity",
            }}
        >
            <GlobalizationLocaleField />
        </FieldContext.Provider>
    }
    else if (part === "Grading" && (type === "Level" || type === "GradingLevel")) {
        component = <FieldContext.Provider
            value={{
                type: "Level",
                forGranularSelection: true,
                part: "Grading",
                property: "Entity",
            }}
        >
            <GradingLevelField />
        </FieldContext.Provider>
    }
    else if (part === "Granularities" && (type === "Granularity" || type === "GranularitiesGranularity")) {
        component = <FieldContext.Provider
            value={{
                type: "Granularity",
                forGranularSelection: true,
                part: "Granularities",
                property: "Entity",
            }}
        >
            <GranularitiesGranularityField />
        </FieldContext.Provider>
    }
    else if (part === "Interfaces" && (type === "Interface" || type === "InterfacesInterface")) {
        component = <FieldContext.Provider
            value={{
                type: "Interface",
                forGranularSelection: true,
                part: "Interfaces",
                property: "Entity",
            }}
        >
            <InterfacesInterfaceField />
        </FieldContext.Provider>
    }
    else if (part === "Inventory" && (type === "Warehouse" || type === "InventoryWarehouse")) {
        component = <FieldContext.Provider
            value={{
                type: "Warehouse",
                forGranularSelection: true,
                part: "Inventory",
                property: "Entity",
            }}
        >
            <InventoryWarehouseField />
        </FieldContext.Provider>
    }
    else if (part === "Inventory" && (type === "Supplier" || type === "InventorySupplier")) {
        component = <FieldContext.Provider
            value={{
                type: "Supplier",
                forGranularSelection: true,
                part: "Inventory",
                property: "Entity",
            }}
        >
            <InventorySupplierField />
        </FieldContext.Provider>
    }
    else if (part === "Modules" && (type === "EntityType" || type === "ModulesEntityType")) {
        component = <FieldContext.Provider
            value={{
                type: "EntityType",
                forGranularSelection: true,
                part: "Modules",
                property: "Entity",
            }}
        >
            <ModulesEntityTypeField />
        </FieldContext.Provider>
    }
    else if (part === "Modules" && (type === "Module" || type === "ModulesModule")) {
        component = <FieldContext.Provider
            value={{
                type: "Module",
                forGranularSelection: true,
                part: "Modules",
                property: "Entity",
            }}
        >
            <ModulesModuleField />
        </FieldContext.Provider>
    }
    else if (part === "MonetaryValues" && (type === "MonetaryValue" || type === "MonetaryValuesMonetaryValue")) {
        component = <FieldContext.Provider
            value={{
                type: "MonetaryValue",
                forGranularSelection: true,
                part: "MonetaryValues",
                property: "Entity",
            }}
        >
            <MonetaryValuesMonetaryValueField />
        </FieldContext.Provider>
    }
    else if (part === "NewTaxonomy" && (type === "Category" || type === "NewTaxonomyCategory")) {
        component = <FieldContext.Provider
            value={{
                type: "Category",
                forGranularSelection: true,
                part: "NewTaxonomy",
                property: "Entity",
            }}
        >
            <NewTaxonomyCategoryField />
        </FieldContext.Provider>
    }
    else if (part === "NewTaxonomy" && (type === "Tag" || type === "NewTaxonomyTag")) {
        component = <FieldContext.Provider
            value={{
                type: "Tag",
                forGranularSelection: true,
                part: "NewTaxonomy",
                property: "Entity",
            }}
        >
            <NewTaxonomyTagField />
        </FieldContext.Provider>
    }
    else if (part === "Orders" && (type === "Order" || type === "OrdersOrder")) {
        component = <FieldContext.Provider
            value={{
                type: "Order",
                forGranularSelection: true,
                part: "Orders",
                property: "Entity",
            }}
        >
            <OrdersOrderField />
        </FieldContext.Provider>
    }
    else if (part === "Organization" && (type === "Department" || type === "OrganizationDepartment")) {
        component = <FieldContext.Provider
            value={{
                type: "Department",
                forGranularSelection: true,
                part: "Organization",
                property: "Entity",
            }}
        >
            <OrganizationDepartmentField />
        </FieldContext.Provider>
    }
    else if (part === "Organization" && (type === "Employee" || type === "OrganizationEmployee")) {
        component = <FieldContext.Provider
            value={{
                type: "Employee",
                forGranularSelection: true,
                part: "Organization",
                property: "Entity",
            }}
        >
            <OrganizationEmployeeField />
        </FieldContext.Provider>
    }
    else if (part === "Parts" && (type === "Part" || type === "PartsPart")) {
        component = <FieldContext.Provider
            value={{
                type: "Part",
                forGranularSelection: true,
                part: "Parts",
                property: "Entity",
            }}
        >
            <PartsPartField />
        </FieldContext.Provider>
    }
    else if (part === "Parts" && (type === "Type" || type === "PartsType")) {
        component = <FieldContext.Provider
            value={{
                type: "Type",
                forGranularSelection: true,
                part: "Parts",
                property: "Entity",
            }}
        >
            <PartsTypeField />
        </FieldContext.Provider>
    }
    else if (part === "Places" && (type === "Place" || type === "PlacesPlace")) {
        component = <FieldContext.Provider
            value={{
                type: "Place",
                forGranularSelection: true,
                part: "Places",
                property: "Entity",
            }}
        >
            <PlacesPlaceField />
        </FieldContext.Provider>
    }
    else if (part === "Podcast" && (type === "Speaker" || type === "PodcastSpeaker")) {
        component = <FieldContext.Provider
            value={{
                type: "Speaker",
                forGranularSelection: true,
                part: "Podcast",
                property: "Entity",
            }}
        >
            <PodcastSpeakerField />
        </FieldContext.Provider>
    }
    else if (part === "Pricing" && (type === "Interval" || type === "PricingInterval")) {
        component = <FieldContext.Provider
            value={{
                type: "Interval",
                forGranularSelection: true,
                part: "Pricing",
                property: "Entity",
            }}
        >
            <PricingIntervalField />
        </FieldContext.Provider>
    }
    else if (part === "Pricing" && (type === "Price" || type === "PricingPrice")) {
        component = <FieldContext.Provider
            value={{
                type: "Price",
                forGranularSelection: true,
                part: "Pricing",
                property: "Entity",
            }}
        >
            <PricingPriceField />
        </FieldContext.Provider>
    }
    else if (part === "Products" && (type === "Product" || type === "ProductsProduct")) {
        component = <FieldContext.Provider
            value={{
                type: "Product",
                forGranularSelection: true,
                part: "Products",
                property: "Entity",
            }}
        >
            <ProductsProductField />
        </FieldContext.Provider>
    }
    else if (part === "Properties" && (type === "Agent" || type === "PropertiesAgent")) {
        component = <FieldContext.Provider
            value={{
                type: "Agent",
                forGranularSelection: true,
                part: "Properties",
                property: "Entity",
            }}
        >
            <PropertiesAgentField />
        </FieldContext.Provider>
    }
    else if (part === "Properties" && (type === "DealType" || type === "PropertiesDealType")) {
        component = <FieldContext.Provider
            value={{
                type: "DealType",
                forGranularSelection: true,
                part: "Properties",
                property: "Entity",
            }}
        >
            <PropertiesDealTypeField />
        </FieldContext.Provider>
    }
    else if (part === "Properties" && (type === "RangeManager" || type === "PropertiesRangeManager")) {
        component = <FieldContext.Provider
            value={{
                type: "RangeManager",
                forGranularSelection: true,
                part: "Properties",
                property: "Entity",
            }}
        >
            <PropertiesRangeManagerField />
        </FieldContext.Provider>
    }
    else if (part === "Properties" && (type === "PropertyType" || type === "PropertiesPropertyType")) {
        component = <FieldContext.Provider
            value={{
                type: "PropertyType",
                forGranularSelection: true,
                part: "Properties",
                property: "Entity",
            }}
        >
            <PropertiesPropertyTypeField />
        </FieldContext.Provider>
    }
    else if (part === "Sales" && (type === "AdditionType" || type === "SalesAdditionType")) {
        component = <FieldContext.Provider
            value={{
                type: "AdditionType",
                forGranularSelection: true,
                part: "Sales",
                property: "Entity",
            }}
        >
            <SalesAdditionTypeField />
        </FieldContext.Provider>
    }
    else if (part === "Sales" && (type === "ReductionType" || type === "SalesReductionType")) {
        component = <FieldContext.Provider
            value={{
                type: "ReductionType",
                forGranularSelection: true,
                part: "Sales",
                property: "Entity",
            }}
        >
            <SalesReductionTypeField />
        </FieldContext.Provider>
    }
    else if (part === "Scopes" && (type === "Scope" || type === "ScopesScope")) {
        component = <FieldContext.Provider
            value={{
                type: "Scope",
                forGranularSelection: true,
                part: "Scopes",
                property: "Entity",
            }}
        >
            <ScopesScopeField />
        </FieldContext.Provider>
    }
    else if (part === "Seo" && (type === "LinkGroup" || type === "SeoLinkGroup")) {
        component = <FieldContext.Provider
            value={{
                type: "LinkGroup",
                forGranularSelection: true,
                part: "Seo",
                property: "Entity",
            }}
        >
            <SeoLinkGroupField />
        </FieldContext.Provider>
    }
    else if (part === "Settings" && (type === "Setting" || type === "SettingsSetting")) {
        component = <FieldContext.Provider
            value={{
                type: "Setting",
                forGranularSelection: true,
                part: "Settings",
                property: "Entity",
            }}
        >
            <SettingsSettingField />
        </FieldContext.Provider>
    }
    else if (part === "Templates" && (type === "Template" || type === "TemplatesTemplate")) {
        component = <FieldContext.Provider
            value={{
                type: "Template",
                forGranularSelection: true,
                part: "Templates",
                property: "Entity",
            }}
        >
            <TemplatesTemplateField />
        </FieldContext.Provider>
    }
    else if (part === "Tenants" && (type === "Tenant" || type === "TenantsTenant")) {
        component = <FieldContext.Provider
            value={{
                type: "Tenant",
                forGranularSelection: true,
                part: "Tenants",
                property: "Entity",
            }}
        >
            <TenantsTenantField />
        </FieldContext.Provider>
    }
    else if (part === "Units" && (type === "Prefix" || type === "UnitsPrefix")) {
        component = <FieldContext.Provider
            value={{
                type: "Prefix",
                forGranularSelection: true,
                part: "Units",
                property: "Entity",
            }}
        >
            <UnitsPrefixField />
        </FieldContext.Provider>
    }
    else if (part === "Units" && (type === "Unit" || type === "UnitsUnit")) {
        component = <FieldContext.Provider
            value={{
                type: "Unit",
                forGranularSelection: true,
                part: "Units",
                property: "Entity",
            }}
        >
            <UnitsUnitField />
        </FieldContext.Provider>
    }
    return component
}

export default FieldBrowsersAndLookups
    