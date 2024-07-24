import { Meta, StoryObj } from '@storybook/react/';

import TabPanel from '../../atoms/tab-panel';
import { IconType } from '../../atoms/icon-store';

const meta: Meta<typeof TabPanel> = {
  title: 'Atoms/TabPanel',
  component: TabPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    orientation: 'horizontal',
    scrollOnTabLength: 1,
    initialTabIndex: 0,
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Select orientation',
    },
    scrollOnTabLength: {
      control: 'number',
      description: 'Increase length',
    },
    initialTabIndex: {
      control: 'number',
      description: 'Select initial tab',
    },
    tabs: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof TabPanel>;

export const DefaultTabs: Story = {
  args: {
    orientation: 'horizontal',
    tabs: [
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
      {
        label: 'Tab 4',
        value: 3,
        component: <div>Contenido de la pestaña 4</div>,
      },
      {
        label: 'Tab 5',
        value: 4,
        component: <div>Contenido de la pestaña 5</div>,
      },
      {
        label: 'Tab 6',
        value: 5,
        component: <div>Contenido de la pestaña 6</div>,
      },
      {
        label: 'Tab 7',
        value: 6,
        component: <div>Contenido de la pestaña 7</div>,
      },
    ],
  },
};

export const HorizontalTabs: Story = {
  args: {
    orientation: 'horizontal',
    tabs: [
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
    ],
  },
};

export const VerticalTabs: Story = {
  args: {
    orientation: 'vertical',
    tabs: [
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
    ],
  },
};

export const TabsWithIcons: Story = {
  args: {
    tabs: [
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
        component: <div>Contenido de la pestaña 3</div>,
        icon: IconType.Help,
      },
      {
        label: 'Tab 4',
        value: 3,
        component: <div>Contenido de la pestaña 3</div>,
        icon: IconType.Help,
      },
      {
        label: 'Tab 5',
        value: 4,
        component: <div>Contenido de la pestaña 3</div>,
        icon: IconType.Help,
      },
    ],
  },
};

export const TabsWithDisabledTab: Story = {
  args: {
    tabs: [
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
    ],
  },
};

export const TabsWithCustomCallback: Story = {
  args: {
    tabs: [
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
    ],
  },
};

export const TabsWithCustomIcons: Story = {
  args: {
    tabs: [
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
        icon: IconType.Business,
        iconPosition: 'end',
      },
      {
        label: 'Tab 3',
        value: 2,
        component: <div>Contenido de la pestaña 3</div>,
        icon: IconType.Help,
        iconPosition: 'top',
      },
    ],
  },
};

export const TabsWithCustomSize: Story = {
  args: {
    tabs: [
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
    ],
  },
};

export const TabsWithDynamicScrollable: Story = {
  args: {
    tabs: [
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
    ],
  },
};
