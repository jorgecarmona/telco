import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { IconType, iconLookup } from '../atoms/icon-store';

export interface TabConfig {
  label: string;
  value: number;
  component: React.ReactNode;
  icon?: IconType;
  disabled?: boolean;
  callBack?: () => void;
  iconPosition?: 'top' | 'bottom' | 'end' | 'start';
}

interface TabPanelProps {
  tabs: TabConfig[];
  orientation?: 'horizontal' | 'vertical';
}

function TabPanel({ tabs, orientation = 'horizontal' }: TabPanelProps) {
  const [value, setValue] = React.useState<number>(tabs[1]?.value || 0);
// que el tab que se abre por default pueda ser especificado por el usuario
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    if (tabs[newValue] && typeof tabs[newValue].callBack === 'function') {
      tabs[newValue].callBack?.();
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: orientation === 'vertical' ? 'row' : 'column' , width:'300px'}}>
      <Tabs
        onChange={handleChange}
        value={value}
        variant={tabs.length > 2 ? 'scrollable' : 'standard'}
        // el scrollable deberia ser dinamico
        scrollButtons="auto"
        orientation={orientation}
        sx={{ borderRight: orientation === 'vertical' ? 1 : 0, borderBottom: orientation === 'horizontal' ? 1 : 0 }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon ? iconLookup[tab.icon] : undefined;
          return (
            <Tab
              key={tab.value}
              label={tab.label}
              icon={Icon && <Icon />}
              disabled={tab.disabled}
              value={tab.value}
              iconPosition={tab.iconPosition}
            />
          );
        })}
      </Tabs>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <React.Suspense fallback={<CircularProgress />}>
          {tabs.find((tab) => tab.value === value)?.component}
        </React.Suspense>
      </Box>
    </Box>
  );
}

export default TabPanel;

// especificar el tab de altura / tratar de cargar lazy desde el api