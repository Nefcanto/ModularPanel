import {
    cloneElement,
    useContext,
} from "react"
import Button from "@mui/material/Button"
import app, {
    filterOperator,
    t,
} from "App"
import { ListContext } from "Contexts"
import Text from "./Filters/Text"
import Search from "./Filters/Search"
import Activation from "./Filters/Activation"

const Filtering = ({ filters }) => {

    const {
        hasActivation,
        hasFilters,
        isBrowse,
        relatedItems,
        reload,
        resetFilters,
        showId,
        usedFilters,
    } = useContext(ListContext)

    // if (!filters || filters.props.children.length === 0) {
    //     return <div></div>
    // }

    const handleKeyDown = event => {
        if (event.key !== "Enter") {
            return
        }
        reload()
    }

    const finalFilters = filters instanceof Function
        ?
        filters({
            ...relatedItems
        })
        :
        filters

    let filtersArray = finalFilters?.props.children?.map ? finalFilters?.props.children : [finalFilters?.props.children]

    return <div
        className="filtering bg-white dark:bg-stone-900 px-3 py-3 md:rounded-lg relative "
        onKeyDown={event => handleKeyDown(event)}
    >
        <div className={
            "grid "
            + (isBrowse && " gap-6 ")
            + (!isBrowse && " gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
        }
        >
            {
                (app.isDev() || app.isSuperAdmin() || showId) &&
                <Text
                    property="Id"
                    placeholder="InfraId"
                    operator={filterOperator.equalTo}
                />
            }
            <Search />
            {
                filtersArray.map((filter, index) => filter
                    ?
                    cloneElement(filter, {
                        key: index,
                    })
                    :
                    null
                )
            }
            {
                hasActivation && <Activation />
            }
            <div className={
                ""
                +
                (
                    isBrowse
                        ?
                        "mt-4"
                        :
                        " md:col-start-2 lg:col-start-3 xl:col-start-4 place-self-end"
                )
            }
            >
                <div className="flex justify-end gap-2 items-bottom ">
                    {
                        hasFilters &&
                        <Button
                            className="grow-0 dark:text-white dark:border-white"
                            size="small"
                            variant="outlined"
                            onClick={resetFilters}>
                            {t("InfraReset")}
                        </Button>
                    }
                    {/* <Button
                        size="small"
                        className={"bg-green-200 hover:bg-green-400"}
                        variant="outlined"
                        onClick={reload}>
                        {t("Apply")}
                    </Button> */}
                </div>
            </div>
        </div>

    </div>
}

export default Filtering
