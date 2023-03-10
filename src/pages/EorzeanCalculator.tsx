import React from 'react';
import { Box, Container, Tab, Tabs } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TotalTimeCalculator from '../components/TotalTimeCalculator';
import TimeDifferenceCalculator from '../components/TimeDifferenceCalculator';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
}


const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const EorzeanCalculator = () => {

  const [value, setValue] = React.useState(0);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }

    
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
      <Box mt={'20px'}>
        <Container maxWidth={false} sx={{ maxWidth: "1880px" }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Total Time Calculation" {...a11yProps(0)} />
              <Tab label="Time Difference Calculation" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TotalTimeCalculator  />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TimeDifferenceCalculator />
          </TabPanel>
        </Container>
      </Box>
    </LocalizationProvider>
  );
}

export default EorzeanCalculator;
