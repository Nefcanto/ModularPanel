import { useContext } from "react"
import SearchIcon from "@mui/icons-material/Search"
import { PanelContext } from "Contexts"
import HeaderAction from "./HeaderAction"

const Search = () => {

    const { isDark, setIsDark } = useContext(PanelContext)

    return <HeaderAction
        icon={SearchIcon}
        path="/search"
        title={"InfraSearch"}
    />
}

export default Search
