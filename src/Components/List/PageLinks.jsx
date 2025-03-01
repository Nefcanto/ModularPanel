import { useContext } from "react"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import FirstPageIcon from "@mui/icons-material/FirstPage"
import LastPageIcon from "@mui/icons-material/LastPage"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import app, { t } from "App"
import { ListContext } from "Contexts"

const PageLinks = () => {

    const iconButtonStyle = "text-blue-900 dark:text-slate-300 disabled:text-slate-300 dark:disabled:text-gray-600"

    const {
        metadata,
        setPageNumber,
    } = useContext(ListContext)

    const {
        pageNumber,
        pagesCount,
    } = metadata

    const goToPage = number => {
        if (number > pagesCount) {
            setPageNumber(pagesCount)
        }
        else {
            setPageNumber(number)
        }
    }

    return <div
        id="pageLinks"
        className={
            "flex-1 items-center flex justify-center text-black dark:text-slate-300"
        }
    >
        <IconButton
            disabled={pageNumber === 1}
            onClick={() => goToPage(1)}
            className={iconButtonStyle}
        >
            <Tooltip
                disableInteractive
                title={t("InfraFirstPage")}
            >
                {
                    app.isRtl()
                        ?
                        <LastPageIcon />
                        :
                        <FirstPageIcon />
                }
            </Tooltip>
        </IconButton>
        <IconButton
            disabled={pageNumber === 1}
            onClick={() => goToPage(pageNumber - 1)}
            className={iconButtonStyle}
        >
            <Tooltip
                disableInteractive
                title={t("InfraPreviousPage")}
            >
                {
                    app.isRtl()
                        ?
                        <ChevronRightIcon />
                        :
                        <ChevronLeftIcon />
                }
            </Tooltip>
        </IconButton>
        <span className="mx-4">{pageNumber?.digitGroup() || "NA"}</span>
        <IconButton
            disabled={pageNumber >= pagesCount}
            onClick={() => goToPage(pageNumber + 1)}
            className={iconButtonStyle}
        >
            <Tooltip
                disableInteractive
                title={t("InfraNextPage")}
            >
                {
                    app.isRtl()
                        ?
                        <ChevronLeftIcon />
                        :
                        <ChevronRightIcon />
                }
            </Tooltip>
        </IconButton>
        <Tooltip
            disableInteractive
            title={t("InfraLastPage") + (pagesCount ? ` - ${pagesCount?.digitGroup()}` : "")}
        >
            <span>
                <IconButton
                    disabled={pageNumber >= pagesCount}
                    onClick={() => goToPage(pagesCount)}
                    className={iconButtonStyle}
                >
                    {
                        app.isRtl()
                            ?
                            <FirstPageIcon />
                            :
                            <LastPageIcon />
                    }
                </IconButton>
            </span>
        </Tooltip>
    </div>
}

export default PageLinks
