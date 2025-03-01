import { FilterContext } from "Contexts"
    import { Text } from "List"
    import AttributesAttributeFilter from "./Attributes/Common/Attribute/Filter.jsx"
import BlogAuthorFilter from "./Blog/Admin/Author/Filter.jsx"
import BrandsBrandFilter from "./Brands/Common/Brand/Filter.jsx"
import ContactsJuridicalPersonFilter from "./Contacts/Common/JuridicalPerson/Filter.jsx"
import ContactsNaturalPersonFilter from "./Contacts/Common/NaturalPerson/Filter.jsx"
import ContactsPersonFilter from "./Contacts/Common/Person/Filter.jsx"
import ContentPoliciesPolicyFilter from "./ContentPolicies/Admin/Policy/Filter.jsx"
import CoursesStateFilter from "./Courses/Common/State/Filter.jsx"
import DataTypesDataTypeFilter from "./DataTypes/Common/DataType/Filter.jsx"
import FlowsFlowFilter from "./Flows/Common/Flow/Filter.jsx"
import GranularitiesGranularityFilter from "./Granularities/Common/Granularity/Filter.jsx"
import InterfacesInterfaceFilter from "./Interfaces/Common/Interface/Filter.jsx"
import ModulesEntityTypeFilter from "./Modules/Common/EntityType/Filter.jsx"
import ModulesModuleFilter from "./Modules/Common/Module/Filter.jsx"
import NewTaxonomyCategoryFilter from "./NewTaxonomy/Common/Category/Filter.jsx"
import NewTaxonomyTagFilter from "./NewTaxonomy/Common/Tag/Filter.jsx"
import PartsPartFilter from "./Parts/Common/Part/Filter.jsx"
import PartsTypeFilter from "./Parts/Common/Type/Filter.jsx"
import PropertiesAgentFilter from "./Properties/Common/Agent/Filter.jsx"
import PropertiesDealTypeFilter from "./Properties/Common/DealType/Filter.jsx"
import PropertiesPropertyTypeFilter from "./Properties/Common/PropertyType/Filter.jsx"
import ScopesScopeFilter from "./Scopes/Common/Scope/Filter.jsx"
import SettingsSettingFilter from "./Settings/Common/Setting/Filter.jsx"
import TasksDoerFilter from "./Tasks/Admin/Doer/Filter.jsx"
import UnitsUnitFilter from "./Units/Common/Unit/Filter.jsx"

const FilterBrowsersAndLookups = ({
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
    
    if (part === "Attributes" && (type === "Attribute" || type === "AttributesAttribute")) {
        component = <FilterContext.Provider
            value={{
                type: "Attribute",
                forGranularSelection: true,
                part: "Attributes",
                property: "Entity",
            }}
        >
            <AttributesAttributeFilter />
        </FilterContext.Provider>
    }
    else if (part === "Blog" && (type === "Author" || type === "BlogAuthor")) {
        component = <FilterContext.Provider
            value={{
                type: "Author",
                forGranularSelection: true,
                part: "Blog",
                property: "Entity",
            }}
        >
            <BlogAuthorFilter />
        </FilterContext.Provider>
    }
    else if (part === "Brands" && (type === "Brand" || type === "BrandsBrand")) {
        component = <FilterContext.Provider
            value={{
                type: "Brand",
                forGranularSelection: true,
                part: "Brands",
                property: "Entity",
            }}
        >
            <BrandsBrandFilter />
        </FilterContext.Provider>
    }
    else if (part === "Contacts" && (type === "JuridicalPerson" || type === "ContactsJuridicalPerson")) {
        component = <FilterContext.Provider
            value={{
                type: "JuridicalPerson",
                forGranularSelection: true,
                part: "Contacts",
                property: "Entity",
            }}
        >
            <ContactsJuridicalPersonFilter />
        </FilterContext.Provider>
    }
    else if (part === "Contacts" && (type === "NaturalPerson" || type === "ContactsNaturalPerson")) {
        component = <FilterContext.Provider
            value={{
                type: "NaturalPerson",
                forGranularSelection: true,
                part: "Contacts",
                property: "Entity",
            }}
        >
            <ContactsNaturalPersonFilter />
        </FilterContext.Provider>
    }
    else if (part === "Contacts" && (type === "Person" || type === "ContactsPerson")) {
        component = <FilterContext.Provider
            value={{
                type: "Person",
                forGranularSelection: true,
                part: "Contacts",
                property: "Entity",
            }}
        >
            <ContactsPersonFilter />
        </FilterContext.Provider>
    }
    else if (part === "ContentPolicies" && (type === "Policy" || type === "ContentPoliciesPolicy")) {
        component = <FilterContext.Provider
            value={{
                type: "Policy",
                forGranularSelection: true,
                part: "ContentPolicies",
                property: "Entity",
            }}
        >
            <ContentPoliciesPolicyFilter />
        </FilterContext.Provider>
    }
    else if (part === "Courses" && (type === "State" || type === "CoursesState")) {
        component = <FilterContext.Provider
            value={{
                type: "State",
                forGranularSelection: true,
                part: "Courses",
                property: "Entity",
            }}
        >
            <CoursesStateFilter />
        </FilterContext.Provider>
    }
    else if (part === "DataTypes" && (type === "DataType" || type === "DataTypesDataType")) {
        component = <FilterContext.Provider
            value={{
                type: "DataType",
                forGranularSelection: true,
                part: "DataTypes",
                property: "Entity",
            }}
        >
            <DataTypesDataTypeFilter />
        </FilterContext.Provider>
    }
    else if (part === "Flows" && (type === "Flow" || type === "FlowsFlow")) {
        component = <FilterContext.Provider
            value={{
                type: "Flow",
                forGranularSelection: true,
                part: "Flows",
                property: "Entity",
            }}
        >
            <FlowsFlowFilter />
        </FilterContext.Provider>
    }
    else if (part === "Granularities" && (type === "Granularity" || type === "GranularitiesGranularity")) {
        component = <FilterContext.Provider
            value={{
                type: "Granularity",
                forGranularSelection: true,
                part: "Granularities",
                property: "Entity",
            }}
        >
            <GranularitiesGranularityFilter />
        </FilterContext.Provider>
    }
    else if (part === "Interfaces" && (type === "Interface" || type === "InterfacesInterface")) {
        component = <FilterContext.Provider
            value={{
                type: "Interface",
                forGranularSelection: true,
                part: "Interfaces",
                property: "Entity",
            }}
        >
            <InterfacesInterfaceFilter />
        </FilterContext.Provider>
    }
    else if (part === "Modules" && (type === "EntityType" || type === "ModulesEntityType")) {
        component = <FilterContext.Provider
            value={{
                type: "EntityType",
                forGranularSelection: true,
                part: "Modules",
                property: "Entity",
            }}
        >
            <ModulesEntityTypeFilter />
        </FilterContext.Provider>
    }
    else if (part === "Modules" && (type === "Module" || type === "ModulesModule")) {
        component = <FilterContext.Provider
            value={{
                type: "Module",
                forGranularSelection: true,
                part: "Modules",
                property: "Entity",
            }}
        >
            <ModulesModuleFilter />
        </FilterContext.Provider>
    }
    else if (part === "NewTaxonomy" && (type === "Category" || type === "NewTaxonomyCategory")) {
        component = <FilterContext.Provider
            value={{
                type: "Category",
                forGranularSelection: true,
                part: "NewTaxonomy",
                property: "Entity",
            }}
        >
            <NewTaxonomyCategoryFilter />
        </FilterContext.Provider>
    }
    else if (part === "NewTaxonomy" && (type === "Tag" || type === "NewTaxonomyTag")) {
        component = <FilterContext.Provider
            value={{
                type: "Tag",
                forGranularSelection: true,
                part: "NewTaxonomy",
                property: "Entity",
            }}
        >
            <NewTaxonomyTagFilter />
        </FilterContext.Provider>
    }
    else if (part === "Parts" && (type === "Part" || type === "PartsPart")) {
        component = <FilterContext.Provider
            value={{
                type: "Part",
                forGranularSelection: true,
                part: "Parts",
                property: "Entity",
            }}
        >
            <PartsPartFilter />
        </FilterContext.Provider>
    }
    else if (part === "Parts" && (type === "Type" || type === "PartsType")) {
        component = <FilterContext.Provider
            value={{
                type: "Type",
                forGranularSelection: true,
                part: "Parts",
                property: "Entity",
            }}
        >
            <PartsTypeFilter />
        </FilterContext.Provider>
    }
    else if (part === "Properties" && (type === "Agent" || type === "PropertiesAgent")) {
        component = <FilterContext.Provider
            value={{
                type: "Agent",
                forGranularSelection: true,
                part: "Properties",
                property: "Entity",
            }}
        >
            <PropertiesAgentFilter />
        </FilterContext.Provider>
    }
    else if (part === "Properties" && (type === "DealType" || type === "PropertiesDealType")) {
        component = <FilterContext.Provider
            value={{
                type: "DealType",
                forGranularSelection: true,
                part: "Properties",
                property: "Entity",
            }}
        >
            <PropertiesDealTypeFilter />
        </FilterContext.Provider>
    }
    else if (part === "Properties" && (type === "PropertyType" || type === "PropertiesPropertyType")) {
        component = <FilterContext.Provider
            value={{
                type: "PropertyType",
                forGranularSelection: true,
                part: "Properties",
                property: "Entity",
            }}
        >
            <PropertiesPropertyTypeFilter />
        </FilterContext.Provider>
    }
    else if (part === "Scopes" && (type === "Scope" || type === "ScopesScope")) {
        component = <FilterContext.Provider
            value={{
                type: "Scope",
                forGranularSelection: true,
                part: "Scopes",
                property: "Entity",
            }}
        >
            <ScopesScopeFilter />
        </FilterContext.Provider>
    }
    else if (part === "Settings" && (type === "Setting" || type === "SettingsSetting")) {
        component = <FilterContext.Provider
            value={{
                type: "Setting",
                forGranularSelection: true,
                part: "Settings",
                property: "Entity",
            }}
        >
            <SettingsSettingFilter />
        </FilterContext.Provider>
    }
    else if (part === "Tasks" && (type === "Doer" || type === "TasksDoer")) {
        component = <FilterContext.Provider
            value={{
                type: "Doer",
                forGranularSelection: true,
                part: "Tasks",
                property: "Entity",
            }}
        >
            <TasksDoerFilter />
        </FilterContext.Provider>
    }
    else if (part === "Units" && (type === "Unit" || type === "UnitsUnit")) {
        component = <FilterContext.Provider
            value={{
                type: "Unit",
                forGranularSelection: true,
                part: "Units",
                property: "Entity",
            }}
        >
            <UnitsUnitFilter />
        </FilterContext.Provider>
    }
    return component
}

export default FilterBrowsersAndLookups
    