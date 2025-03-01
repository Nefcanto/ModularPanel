import { useState } from "react"
import {
    parseQuery,
    post,
} from "App"
import {
    Checks,
    DialogForm,
} from "Form"

const DepartmentSkillForm = props => {
    console.log(props)

    const [chosenValues, setChosenValues] = useState([])
    const { departmentId } = parseQuery()

    const inputs = entity => <>
        <Checks
            itemsUrl="/skill/all"
            checkedItemsUrl={`/departmentSkill/all?departmentId=${departmentId}`}
            show={entity => entity.title}
            choose={entity => entity.skillGuid || entity.guid}
            set={setChosenValues}
        />
    </>

    const handelSubmit = ({
        error,
        onCompleted,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/departmentSkill/assignSkills?departmentId=${departmentId}`, chosenValues)
            .then(data => {
                setProgress(false)
                success("OrganizationAssignedSkillsSuccessfully")
                onCompleted()
            }, e => {
                setProgress(false)
            })

    }

    return <DialogForm
        title="OrganizationDeterminingSkills"
        entityType="DepartmentSkill"
        inputs={inputs}
        okAction={handelSubmit}
        {...props}
    />
}

export default DepartmentSkillForm
