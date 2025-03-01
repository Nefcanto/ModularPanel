import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import app from "App"
import ErrorBoundary from "../../ErrorBoundary"

const Filter = ({
    children,
    fullRow,
    halfRow,
    hideLabel,
    id,
    label,
}) => {

    return <ErrorBoundary>
        <div className={`filter w-full ${fullRow ? " md:col-span-2 lg:col-span-3 xl:col-span-4 " : ""} ${halfRow ? " md:col-span-2 lg:col-span-2 xl:col-span-2" : ""}`}>
            <FormControl fullWidth>
                {
                    !hideLabel &&
                    <InputLabel
                        size="small"
                        htmlFor={id}
                        className="select-none"
                    >
                        {app.t(label)}
                    </InputLabel>
                }
                {children}
            </FormControl>
        </div>
    </ErrorBoundary>
}

export default Filter
