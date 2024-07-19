import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

interface TabConfig {
  label: string;
  value: number;
  component: React.ReactNode;
  callBack?: () => void;
}

interface TabPanelProps {
  tabs: TabConfig[];
  //orientacion: vertical y horizontal
}

export default function TabPanel({ tabs }: TabPanelProps) {
  const [value, setValue] = React.useState<number>(tabs[0]?.value || 0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    if (tabs[newValue] && typeof tabs[newValue].callBack === 'function') {
      tabs[newValue].callBack?.();
    }
  };

  return (
    <Box>
      <Tabs onChange={handleChange} value={value}>
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
      <React.Suspense fallback={<CircularProgress />}>
        {tabs.find(tab => tab.value === value)?.component}
      </React.Suspense>
    </Box>
  );
}
