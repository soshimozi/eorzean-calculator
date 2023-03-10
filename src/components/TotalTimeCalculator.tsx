import { Box, Button, SxProps, Theme, Typography } from "@mui/material";
import { TimeField } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { TimeConstant } from "../constants";

import { formatResult } from '../DateHelpers';

const TotalTimeCalculator : React.FC<{
	sx?: SxProps<Theme> | undefined;
}> = ({ sx }) => {
    const [eorzeanTime, setEorzeanTime] = useState<Dayjs | null>(null);
    const [result, setResult] = useState<number | null>(null);
    
    const handleClick = () => {
    
        const minutes = eorzeanTime?.minute() ?? 0;
        const hours = eorzeanTime?.hour() ?? 0;
    
        const totalMinutes = (hours * 60 + minutes);
    
        const scaledMinutes = (totalMinutes * TimeConstant);
        const adjustedMinutes = scaledMinutes / 60;
        
        console.log('totalMinutes: ', totalMinutes);
        console.log('scaledMinutes: ', scaledMinutes);
        console.log('adjustedMinutes: ', adjustedMinutes);
        
        setResult(adjustedMinutes);
      };

    const showTime = () => {
        return formatResult(result);
    }
    
    return (
        <Box sx={{
            ...sx,
        }}>
            <Box>
                <Box>
                <TimeField
                    label="Enter Eorzean Time"
                    value={eorzeanTime}
                    onChange={(newValue) => setEorzeanTime(newValue)}
                    format="HH:mm"
                />            
                </Box>
                <Box mt={'5px'}>
                <Button
                    disabled={eorzeanTime===null}
                    onClick={handleClick}
                    variant="outlined">Calculate</Button>
                <Button sx={{marginLeft: "5px;"}}
                    onClick={() => { setEorzeanTime(null); setResult(null); }}
                    variant="outlined">Clear</Button>
                </Box>
            </Box>
            <Box mt={"25px"}>
                {(result !== null) && <Typography>Real Time: {showTime()}</Typography>}
            </Box> 
      </Box>       
    )
}

export default TotalTimeCalculator;