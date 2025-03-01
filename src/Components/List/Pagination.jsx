import PageSize from "./PageSize"
import PageNumber from "./PageNumber"
import PageLinks from "./PageLinks"

const Pagination = () => {

    return <div
        id="pagination"
        className={
            "flex flex-col md:flex-row justify-between items-center w-full"
        }
    >
        <PageNumber />
        <PageLinks />
        <PageSize />
    </div>
}

export default Pagination
