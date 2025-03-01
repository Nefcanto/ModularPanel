import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"

const Parameter = ({
    children,
    hideLabel,
    id,
    label,
}) => {

    return <div className={`parameter w-full my-2`}>
        <FormControl fullWidth>
            {
                !hideLabel &&
                <InputLabel
                    size="small"
                    htmlFor={id}
                    className="select-none"
                >
                    {label}
                </InputLabel>
            }
            {children}
        </FormControl>
    </div>
}

export default Parameter
