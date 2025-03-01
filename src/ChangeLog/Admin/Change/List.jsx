import PersonIcon from "@mui/icons-material/Person"
import MergeTypeIcon from "@mui/icons-material/MergeType"
import ViewModuleIcon from "@mui/icons-material/ViewModule"
import AddIcon from "@mui/icons-material/Add"
import EditIcon from "@mui/icons-material/Edit"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import InfoIcon from "@mui/icons-material/Info"
import {
    pascalize,
    t,
} from "App"
import {
    DateTime,
    List,
} from "List"
import {
    EntityTypeFilter,
    ModuleFilter,
} from "ModulesCommon"

const filters = <>
    <ModuleFilter />
    <EntityTypeFilter />
</>

const renderIconAction = entity => {
    switch (entity.action) {
        case "creation":
            return <div className="p-1 rounded-full	bg-lime-500">
                <AddIcon />
            </div>
        case "edition":
            return <div className="p-1 rounded-full	bg-green-500">
                <EditIcon />
            </div>
        case "deletion":
            return <div className="p-1 rounded-full	bg-red-500">
                <DeleteForeverIcon />
            </div>
        default:
            return <div className="p-1 rounded-full	bg-blue-500">
                <InfoIcon />
            </div>
    }
}

const card = entity => <div
    className="flex flex-col gap-5 mx-5"
>
    <div className="flex gap-5">
        <div className="flex flex-col gap-3 items-center">
            {renderIconAction(entity)}
            <div className="text-sm">
                {t(`Infra${pascalize(entity.action)}`)}
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <div className="flex gap-1">
                <PersonIcon />
                <div className="font-bold">
                    {entity.person}
                </div>
            </div>
            <div className="flex gap-2 items-center" dir="ltr">
                <DateTime
                    date={entity.utcDate}
                />
            </div>
            <div className="flex ">
                <div className="flex gap-1">
                    <ViewModuleIcon />
                    <div>
                        {entity.module}
                    </div>
                </div>

                <div className="flex gap-1">
                    <MergeTypeIcon />
                    <div>
                        {entity.entityType}
                    </div>
                </div>
            </div>
        </div>

    </div>
    <table dir="ltr" className="border-collapse inline">
        {
            entity.relatedItems.properties?.map(property => <tr
                key={property.id}
            >
                <td className="border p-2">{property.name}</td>
                {
                    (entity.action === "edition" || entity.action === "deletion") &&
                    <td className="border p-2">{property.oldValue}</td>
                }
                <td className="border p-2">{property.newValue}</td>
            </tr>)
        }
    </table>
</div>

const Changes = () => {
    return <List
        card={card}
        deleteAll
        deleteBatch
        entityType="Change"
        filters={filters}
        hasDelete
        title="ChangeLogChanges"
    />
}

export default Changes
