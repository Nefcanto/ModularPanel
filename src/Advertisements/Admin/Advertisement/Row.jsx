import {
    BooleanProperty,
    DateTime,
    EnumProperty,
    Image,
} from "List"
import {
    CategoryProperty,
    TagProperty,
} from "NewTaxonomy"
import { AdvertisementTitle } from "AdvertisementsCommon"

const Row = entity => {

    const styleProvider = enumKey => {
        switch (enumKey.toLowerCase()) {
            case "draft":
            default:
                return "text-black bg-red-400"
            case "published":
                return "text-black bg-green-400"
        }
    }

    return <>
        <Image />
        <AdvertisementTitle />
        <CategoryProperty />
        <TagProperty />
        <EnumProperty
            actionUrl={`/advertisement/changeState/${entity.id}`}
            currentKey={entity.state}
            currentKeyTranslation={entity.relatedItems.stateTranslation}
            currentStyle={styleProvider(entity.state)}
            enumeration="AdvertisementState"
            property="State"
            styleProvider={styleProvider}
        />
        <DateTime date={entity.utcDate} />
        <DateTime date={entity.lastUpdateUtcDate || entity.utcDate} />
        <BooleanProperty
            actionUrl={`/advertisement/toggleBoolean?id=${entity.id}&property=isFeatured`}
            value={entity.isFeatured}
        />

    </>

}

export default Row
