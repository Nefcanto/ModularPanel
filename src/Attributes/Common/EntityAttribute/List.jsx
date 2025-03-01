import FileUploadIcon from "@mui/icons-material/FileUpload"
import DownloadIcon from "@mui/icons-material/Download"
import { parseQuery } from "App"
import {
    EntityAction,
    Image,
    List,
    Text,
    TitleSubtitle,
} from "List"
import {
    GranularityFilter,
} from "Granularities"
import GranularityProperty from "GranularityProperty"
import {
    UnitFilter,
    UnitProperty,
} from "Units"
import AttributeFilter from "../Attribute/Filter"
import EntityAttributeForm from "./Form"
import AttributeBlobForm from "./BlobForm"

const filters = <>
    <GranularityFilter />
    <AttributeFilter />
    <Text
        placeholder="AttributesValue"
        property="Value"
    />
    <UnitFilter />
</>

const headers = fixedGranularity => <>
    <th></th>
    <th start>AttributesAttribute</th>
    {
        !fixedGranularity &&
        <th>InfraScope</th>
    }
    <th>AttributesValue</th>
    <th>UnitsUnit</th>
</>

const row = fixedGranularity => entity => <>
    <Image
        url={entity.relatedItems.attributeImageUrl}
    />
    <TitleSubtitle
        subtitle={entity.slug}
        title={entity.title}
    />
    {
        !fixedGranularity &&

        <GranularityProperty />
    }
    <td>{entity.value}</td>
    <UnitProperty />
</>

const entityActions = entity => <>
    {
        entity?.attributesAttributeDataType == "file" &&
        <EntityAction
            dialog={AttributeBlobForm}
            icon={FileUploadIcon}
            title="InfraUpload"
        />
    }
    {
        entity?.relatedItems?.fileUrl && <EntityAction
            goTo={entity?.relatedItems?.fileUrl}
            icon={DownloadIcon}
            title="InfraDownload"
        />
    }
</>

const EntityAttributes = () => {

    const { fixedGranularity } = parseQuery()

    return <List
        create={EntityAttributeForm}
        entityActions={entityActions}
        entityType="EntityAttribute"
        filters={filters}
        hasDelete
        headers={headers(fixedGranularity)}
        row={row(fixedGranularity)}
        title="AttributesEntityAttributes"
    />
}

export default EntityAttributes
