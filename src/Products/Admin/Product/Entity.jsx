import { localizedSiteUrl } from "App"
import {
    Image,
    TitleSubtitle,
    ValueWithTitle,
} from "List"

const Product = ({ entity }) => {
    return <div className="flex items-center gap-2">
        <Image
            entity={entity}
            readOnly
        />
        <TitleSubtitle
            link={`${localizedSiteUrl()}/product/${entity.slug}`}
            subtitle={entity.slug}
            title={<ValueWithTitle
                title={entity.summary}
                value={entity.title}
            />}
        />
    </div>
}

export default Product
