import { localizedSiteUrl } from "App"
import { Tree } from "List"
import MenuItemForm from "./Form"

const MenuItems = () => {

    const generateLink = entity => {
        if (entity.isDirectory) {
            return entity.title
        }
        let url = `${localizedSiteUrl()}${entity.url}`
        if (entity.url.startsWith("http")) {
            url = entity.url
        }
        return <a
            className="link"
            href={url}
            target="_blank"
        >
            {entity.title}
        </a>
    }

    return <Tree
        entityType="MenuItem"
        hasDelete
        hasEdit
        hasOrder
        show={entity => generateLink(entity)}
        title="NavigationMenu"
        upsert={MenuItemForm}
    />
}

export default MenuItems
