import {
    Checks,
    DialogForm,
} from "Form"

const TypesDialog = ({ entity }) => {

    const inputs = <>
        <Checks
            itemsUrl={`/salonType/all`}
            checkedItemsUrl={`/salonType/getSalonTypes?salonId=${entity.id}`}
            show={entity => entity.title}
            choose={entity => entity.typeId ?? entity.id}
            property="TypeIds"
            Placeholder="SalonsSalonTypes"
        />
    </>

    return <DialogForm
        entityType="SalonType"
        humanReadableEntityType="SalonsManageSalonTypes"
        inputs={inputs}
        submitTo={`/salonType/PutInSalonTypes?salonId=${entity?.id}`}
    />
}

export default TypesDialog
