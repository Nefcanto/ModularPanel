import LinearProgress from "@mui/material/LinearProgress"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const LineProgress = ({
    barColor,
    barHight,
    className,
    determinate,
    fontColor,
    fontSize,
    fontWeight,
    label,
    size,
    value,
}) => {
    return <span
        className={className || ""}
    >
        {
            size
                ?
                !label ?
                    <Box
                        sx={{
                            display: "inline-flex",
                            position: "relative",
                            width: "100%",
                        }}
                    >
                        <LinearProgress
                            size={size}
                            value={value}
                            variant={determinate ? "determinate" : "indeterminate"}
                            sx={{
                                "& .MuiLinearProgress-bar": { backgroundColor: barColor || "#0284c7" },
                                backgroundColor: "#eee",
                                height: barHight || "5px"
                            }}
                        />
                    </Box>
                    :
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <Box sx={{ width: "100%" }}>
                            <LinearProgress
                                label={label}
                                size={size}
                                value={value}
                                variant={determinate ? "determinate" : "indeterminate"}
                                sx={{
                                    "& .MuiLinearProgress-bar": { backgroundColor: barColor || "#0284c7" },
                                    backgroundColor: "#eee",
                                    height: barHight || "5px"
                                }}
                            />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                            <Typography
                                color={fontColor || "#000"}
                                fontSize={fontSize || "16px"}
                                fontWeight={fontWeight || "bold"}
                                variant="body2"
                            >
                                {label}
                            </Typography>
                        </Box>

                    </Box>
                :
                <LinearProgress />
        }
    </span>
}

export default LineProgress
