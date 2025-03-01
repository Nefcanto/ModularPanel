import {
    localizedSiteUrl,
    t,
} from "App"
import {
    TitleSubtitle,
    TreeImage,
    TreeRow,
    ValueWithTitle,
} from "List"

const CategoryNode = entity => {
    return <TreeRow>
        <TreeImage
            deletionUrl={`/category/deleteImage?id=${entity.id}`}
            uploadUrl={`/category/setImage?id=${entity.id}`}
            url={entity.relatedItems.imageUrl}
        />
        <div>
            <TitleSubtitle
                link={`${localizedSiteUrl()}/category/${entity.slug}`}
                subtitle={entity.slug}
                title={<ValueWithTitle
                    title={entity.description}
                    value={entity.title?.cut(30)}
                />}
            />
        </div>
    </TreeRow>
}

export default CategoryNode
