import React from 'react';

import TabPanel, {TabConfig} from '../../atoms/tab-panel';
import { IconType } from '../../atoms/icon-store';

export default {
  title: 'Atoms/TabPanel',
  component: TabPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const tabs: TabConfig[] = [
  {
    label: 'Tab 1',
    value: 0,
    component: <div>Contenido de la pestaña 1</div>,
  },
  {
    label: 'Tab 2',
    value: 1,
    component: <div>Contenido de la pestaña 2</div>,
  },
];

export const HorizontalTabs = () => (
  <TabPanel tabs={tabs} orientation="horizontal" positionTab={0} scroll={3} />
);

export const VerticalTabs = () => (
  <TabPanel tabs={tabs} orientation="vertical" positionTab={0} scroll={3} />
);

export const TabsWithIcons = () => (
  <TabPanel
    tabs={[
      {
        label: 'Tab 1',
        value: 0,
        component: <div>Contenido de la pestaña 1</div>,
        icon: IconType.Dashboard,
      },
      {
        label: 'Tab 2',
        value: 1,
        component: <div>Contenido de la pestaña 2</div>,
        icon: IconType.Business,
      },
      {
        label: 'Tab 3',
        value: 2,
        component: <div>Contenido de la pestaña 2</div>,
        icon: IconType.Help,
      },
    ]}
    orientation="horizontal"
    positionTab={0}
    scroll={3}
  />
);

export const TabsWithDisabledTab = () => (
  <TabPanel
    tabs={[
      {
        label: 'Tab Habilitado',
        value: 0,
        component: <div>Contenido de la pestaña 1</div>,
      },
      {
        label: 'Tab Deshabilitado',
        value: 1,
        component: <div>Contenido de la pestaña 2</div>,
        disabled: true,
      },
    ]}
    orientation="horizontal"
    positionTab={0}
    scroll={3}
  />
);

export const TabsWithCustomCallback = () => (
  <TabPanel
    tabs={[
      {
        label: 'Tab 1',
        value: 0,
        component: <div>Contenido de la pestaña 1</div>,
        callBack: () => console.log('Callback de Tab 1'),
      },
      {
        label: 'Tab 2',
        value: 1,
        component: <div>Contenido de la pestaña 2</div>,
        callBack: () => console.log('Callback de Tab 2'),
      },
      {
        label: 'Tab 3',
        value: 2,
        component: <div>Contenido de la pestaña 3</div>,
        callBack: () => console.log('Callback de Tab 3'),
      },
    ]}
    orientation="horizontal"
    positionTab={0}
    scroll={3}
  />
);

export const TabsWithCustomIcons = () => (
  <TabPanel
    tabs={[
      {
        label: 'Tab 1',
        value: 0,
        component: <div>Contenido de la pestaña 1</div>,
        icon: IconType.Dashboard,
        iconPosition: 'start',
      },
      {
        label: 'Tab 2',
        value: 1,
        component: <div>Contenido de la pestaña 2</div>,
        icon: IconType.Business ,
        iconPosition: 'end',
      },
      {
        label: 'Tab 3',
        value: 2,
        component: <div>Contenido de la pestaña 3</div>,
        icon: IconType.Help ,
        iconPosition: 'top',
      },
    ]}
    orientation="horizontal"
    positionTab={0}
    scroll={3}
  />
);

export const TabsWithCustomSize = () => (
  <TabPanel
    tabs={[
      {
        label: 'Tab 1',
        value: 0,
        component: <div>Contenido de la pestaña 1</div>,
        tabHeight: '50px',
        tabWidth: '100px',
      },
      {
        label: 'Tab 2',
        value: 1,
        component: <div>Contenido de la pestaña 2</div>,
        tabHeight: '50px',
        tabWidth: '100px',
      },
      {
        label: 'Tab 3',
        value: 2,
        component: <div>Contenido de la pestaña 3</div>,
        tabHeight: '50px',
        tabWidth: '100px',
      },
    ]}
    orientation="horizontal"
    positionTab={0}
    scroll={3}
  />
);

export const TabsWithDynamicScrollable = () => (
  <TabPanel
    tabs={[
      {
        label: 'Tab 1',
        value: 0,
        component: <div>Contenido de la pestaña 1</div>,
      },
      {
        label: 'Tab 2',
        value: 1,
        component: <div>Contenido de la pestaña 2</div>,
      },
      {
        label: 'Tab 3',
        value: 2,
        component: <div>Contenido de la pestaña 3</div>,
      },
    ]}
    orientation="horizontal"
    positionTab={0}
    scroll={3} 
  />
);

