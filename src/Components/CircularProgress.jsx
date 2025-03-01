
import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgressMui from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CircularProgress = ({
    label,
    value,
    ...rest
}) => {

    return <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgressMui
            variant="determinate"
            style={{
                width: "100px",
                height: "100px",
                borderRadius: "100%",
                boxShadow: "inset 0 0 0px 11px white",
                backgroundColor: "transparent",
            }}
            thickness={5}
            value={value}
            {...rest}
        />
        <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                px: 1,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: "secondary"
            }}
        >
            <Typography
                variant="caption"
                component="div"
            >
                {label || value}
            </Typography>
        </Box>
    </Box>
}

export default CircularProgress
