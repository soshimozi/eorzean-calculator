import { Box, Button, SxProps, Theme, Typography } from "@mui/material";
import { TimeField } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { TimeConstant } from "./constants";
import { formatResult } from "./DateHelpers";

const TimeDifferenceCalculator : React.FC<{
	sx?: SxProps<Theme> | undefined;
}> = ({ sx }) => {
    const [startTime, setStartTime] = useState<Dayjs | null>(null);
    const [endTime, setEndTime] = useState<Dayjs | null>(null);
    const [result, setResult] = useState<number | null>(null);

    const showTime = () => {
        return formatResult(result);
    }
        
    const handleClick = () => {
        if( startTime === null || endTime == null) {
            return;
        }

        const startHour = startTime.hour();
        const endHour = endTime.hour() < startHour ? endTime.hour() + 24 : endTime.hour();
        const startMinute = startTime.minute();
        const endMinute = endTime.minute();

        const totalStartTime = (startHour * 60) + startMinute;
        const totalEndTime = (endHour * 60) + endMinute;

        const totalMinutes = totalEndTime - totalStartTime;
        const scaledMinutes = (totalMinutes * TimeConstant);
        const adjustedMinutes = scaledMinutes / 60;   

        console.log('endHour: ', endHour);
        console.log('totalStartTime: ', totalStartTime);
        console.log('totalEndTime: ', totalEndTime);        
        console.log('difference: ', totalEndTime - totalStartTime);
        console.log('adjustedMinutes: ', adjustedMinutes);

        setResult(adjustedMinutes);
    }

    return (
        <Box sx={{... sx}}>
                <Box sx={{verticalAlign: "middle"}}>
                <TimeField
                    label="Enter Start Time"
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                    format="HH:mm"
                />&nbsp;     
                <TimeField
                    label="Enter End Time"
                    value={endTime}
                    onChange={(newValue) => setEndTime(newValue)}
                    format="HH:mm"
                />                            
                </Box>
                <Box mt={'5px'}>
                <Button
                    disabled={startTime===null || endTime===null}
                    onClick={handleClick}
                    variant="outlined">Calculate</Button>
                <Button sx={{marginLeft: "5px;"}}
                    onClick={() => { setStartTime(null); setEndTime(null); setResult(null); }}
                    variant="outlined">Clear</Button>
                </Box>                
                <Box mt={"25px"}>
                    {(result !== null) && <Typography>Real Time: {showTime()}</Typography>}
                </Box> 

        </Box>
    )
};


export default TimeDifferenceCalculator;