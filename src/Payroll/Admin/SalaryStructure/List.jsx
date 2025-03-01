import {
    List,
    Text,
    Title,
    TitleSubtitle,
    ValueWithTitle,
} from "List"
import { PriceEntityAction } from "PricingCommon"
import SalaryStructureForm from "./Form"
import ManageSkillLevelsEntityAction from "../SalaryStructureSkillLevel/Manage"

const filters = <>
    <Title />
    <Text
        property="Slug"
        placeholder="InfraSlug"
    />
</>

const headers = <>
    <th start>InfraTitle</th>
    <th>OrganizationDepartment</th>
</>

const row = entity => <>
    <TitleSubtitle
        subtitle={entity.slug}
        title={<ValueWithTitle
            value={entity.title.cut(30)}
            title={entity.summary}
        />}
    />
    <td>{entity.departmentTitle}</td>
</>

const entityActions = <>
    <ManageSkillLevelsEntityAction />
    <PriceEntityAction />
</>

const SalaryStructures = () => {

    return <List
        title="PayrollSalaryStructures"
        entityType="SalaryStructure"
        filters={filters}
        headers={headers}
        row={row}
        entityActions={entityActions}
        create={SalaryStructureForm}
        hasEdit
        hasDelete
    />
}

export default SalaryStructures
