import React from 'react';

import {Tabs as MuiTabs, Tab as MuiTab, TabsProps as MuiTabsProps } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { IconType, iconLookup } from './icon-store';

export interface TabConfig {
  callBack?: () => void;
  component: React.ReactNode;
  disabled?: boolean;
  icon?: IconType;
  iconPosition?:  'bottom' | 'end' | 'start' | 'top';
  label: string;
  tabHeight?: string | number;
  tabWidth?: string | number;
  value: number;
}

interface TabsProps extends MuiTabsProps {
  initialTabIndex: number;
  orientation?: 'horizontal' | 'vertical';
  scrollOnTabLength: number;
  tabs: TabConfig[];
}

function Tabs({ tabs, orientation = 'horizontal', scrollOnTabLength, initialTabIndex }: TabsProps) {
  const initialTabValue = tabs.find(tab => tab.value === initialTabIndex)?.value || 0;
  const [value, setValue] = React.useState<number>(initialTabValue);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    if (tabs[newValue] && typeof tabs[newValue].callBack === 'function') {
      tabs[newValue].callBack?.();
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: orientation === 'vertical' ? 'row' : 'column', width: '400px' }}>
      <MuiTabs
        onChange={handleChange}
        orientation={orientation}
        scrollButtons="auto"
        sx={{ borderBottom: orientation === 'horizontal' ? 1 : 0, borderRight: orientation === 'vertical' ? 1 : 0 }}
        value={value}
        variant={tabs.length > scrollOnTabLength ? 'scrollable' : 'standard'}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon ? iconLookup[tab.icon] : undefined;
          return (
            <MuiTab
              key={tab.value}
              disabled={tab.disabled}
              icon={Icon && <Icon />}
              iconPosition={tab.iconPosition}
              label={tab.label}
              sx={{ height: tab.tabHeight, width: tab.tabWidth }}
              value={tab.value}
            />
          );
        })}
      </MuiTabs>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <React.Suspense fallback={<CircularProgress />}>
          {tabs.find((tab) => tab.value === value)?.component}
        </React.Suspense>
      </Box>
    </Box>
  );
}

export default Tabs;
