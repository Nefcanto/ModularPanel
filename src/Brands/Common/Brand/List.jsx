import { localizedSiteUrl } from "App"
import {
    Image,
    List,
    SvgProperty,
    TitleSubtitle,
    ValueWithTitle,
} from "List"
import { ManageImages } from "MediaCommon"

const row = entity => <>
    <Image
        property="LogoGuid"
        url={entity.relatedItems.logoUrl}
    />
    <TitleSubtitle
        link={`${localizedSiteUrl()}/brand/${entity.slug}`}
        subtitle={entity.slug}
        title={<ValueWithTitle
            value={entity.originalName?.cut(30)}
            title={entity.summary}
        />}
    />
    <td>{entity.localizedName}</td>
    <SvgProperty
        actionUrl={`/brand/setSvg?id=${entity.id}`}
        value={entity.logoSvg}
    />
</>

const entityActions = <>
    <ManageImages />
</>

const Brands = () => {
    return <List
        entityActions={entityActions}
        entityType="Brand"
        hasContent
        hasDelete
        hasEdit
        row={row}
        separateRowForActions
        title="BrandsBrands"
    />
}

export default Brands
