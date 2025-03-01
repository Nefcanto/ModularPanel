import Account from "./Account"
import DateTime from "./DateTime"
import Enums from "./Enums"
import Env from "./Env"
import Globalization from "./Globalization"
import Holism from "./Holism"
import NumberExtensions from "./NumberExtensions"
import ReactUtils from "./ReactUtils"
import StringExtensions from "./StringExtensions"
import Url from "./Url"
import Validation from "./Validation"

const app = {
    ...Account,
    ...DateTime,
    ...Enums,
    ...Env,
    ...Globalization,
    ...Holism,
    ...NumberExtensions,
    ...ReactUtils,
    ...StringExtensions,
    ...Url,
    ...Validation,
    isDevOrSuperAdmin: () => {
        return Env.isDev() || Account.isSuperAdmin()
    },
}

export default app

