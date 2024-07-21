import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import {IconType, iconLookup} from '../atoms/icon-store';

interface TabConfig {
  label: string;
  value: number;
  component: React.ReactNode;
  icon?: IconType;
  disabled?: boolean;
  callBack?: () => void;
}

interface TabPanelProps {
  tabs: TabConfig[];
  orientation?: 'horizontal' | 'vertical';
}

function TabPanel({ tabs, orientation = 'horizontal' }: TabPanelProps) {
  const [value, setValue] = React.useState<number>(tabs[1]?.value || 0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    
    if (tabs[newValue] && typeof tabs[newValue].callBack === 'function') {
      tabs[newValue].callBack?.();
    }
  };

  return (
    <Box>
      <Tabs
        onChange={handleChange}
        value={value}
        variant={tabs.length > 5 ? 'scrollable' : 'standard'} 
        scrollButtons="auto"
        orientation={orientation}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon ? iconLookup[tab.icon] : undefined;
          
          return <Tab
            key={tab.value}
            label={tab.label}
            icon={Icon && <Icon/>}
            disabled={tab.disabled}
            value={tab.value}
          />
        })}
      </Tabs>
      <React.Suspense fallback={<CircularProgress />}>
        {tabs.find((tab) => tab.value === value)?.component}
      </React.Suspense>
    </Box>
  );
}

export default TabPanel;
