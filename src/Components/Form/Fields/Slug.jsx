import {
    get,
    getLocale,
} from "App"
import LinkIcon from "@mui/icons-material/Link"
import Text from "./Text"

const Slug = (props) => {

    const checkDuplicate = value => {
        console.log("checking for duplicate ...")
    }

    const getLocaleSpecificSlugFormat = () => {
        const locale = getLocale().key
        switch (locale) {
            case "fa":
                return /^[a-zA-Z0-9۱۲۳۴۵۶۷۸۹۰٤٥٦۰ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدئوپآژي-]+$/
            default:
                return /^[a-z0-9-]*$/
        }
    }

    return <Text
        hint="valid-slug-sample"
        onDebouncedChange={checkDuplicate}
        placeholder="InfraSlug"
        property="Slug"
        regex={getLocaleSpecificSlugFormat()}
        regexError="InfraNonValidSlug"
        required="InfraRequiredSlug"
        startIcon={LinkIcon}
        {...props}
    />
}

export default Slug
