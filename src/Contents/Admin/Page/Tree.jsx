import LockIcon from "@mui/icons-material/Lock"
import { localizedSiteUrl } from "App"
import {
    HolismIcon,
    Image,
    Title,
    TitleSubtitle,
    Tree,
} from "List"
import {
    EntityFaqPage,
    EntitySeo,
} from "Seo"
import PageForm from "./Form"
import ManageSections from "../Section/Manage"

const filters = <>
    <Title />
</>

const show = entity => {

    let url = localizedSiteUrl()
    if (entity.isVital) {
        url += "/"
    } else {
        url += "/page/"
    }
    if (entity.key !== "home") {
        url += entity.slug
    }

    return <div className="flex items-center gap-4">
        <Image />
        <TitleSubtitle
            link={url}
            subtitle={entity.slug}
            title={<div>
                {entity.title.cut(30)}
                {entity.isVital && <HolismIcon
                    className="fill-gray-400 w-3 ms-2"
                    icon={LockIcon}
                />}

            </div>}
        />
    </div>
}

const entityActions = entity => <>
    <EntitySeo />
    <EntityFaqPage />
    <ManageSections page={entity.key} />
</>

const Pages = () => {

    return <Tree
        entityActions={entityActions}
        entityType="Page"
        filters={filters}
        hasActivation
        hasContent
        hasDelete
        hasEdit
        show={show}
        title="ContentsPages"
        upsert={PageForm}
    />
}

export default Pages
