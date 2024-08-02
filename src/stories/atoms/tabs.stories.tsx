import { Meta, StoryObj } from '@storybook/react/';

import { Tabs } from '../../atoms';
import { IconType } from '../../atoms/icon-store';

const meta: Meta<typeof Tabs> = {
  args: {
    initialTabIndex: 0,
    orientation: 'horizontal',
    scrollOnTabLength: 1,
  },
  argTypes: {
    initialTabIndex: {
      control: 'number',
      description: 'Select initial tab',
    },
    orientation: {
      control: 'select',
      description: 'Select orientation',
      options: ['horizontal', 'vertical'],
    },
    scrollOnTabLength: {
      control: 'number',
      description: 'Increase length',
    },
    tabs: { table: { disable: true } },
  },
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Atoms/Tabs',
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const DefaultTabs: Story = {
  args: {
    orientation: 'horizontal',
    tabs: [
      {
        component: <div>Contenido de la pestaña 1</div>,
        label: 'Tab 1',
        value: 0,
      },
      {
        component: <div>Contenido de la pestaña 2</div>,
        label: 'Tab 2',
        value: 1,
      },
      {
        component: <div>Contenido de la pestaña 3</div>,
        label: 'Tab 3',
        value: 2,
      },
      {
        component: <div>Contenido de la pestaña 4</div>,
        label: 'Tab 4',
        value: 3,
      },
      {
        component: <div>Contenido de la pestaña 5</div>,
        label: 'Tab 5',
        value: 4,
      },
      {
        component: <div>Contenido de la pestaña 6</div>,
        label: 'Tab 6',
        value: 5,
      },
      {
        component: <div>Contenido de la pestaña 7</div>,
        label: 'Tab 7',
        value: 6,
      },
    ],
  },
};

export const HorizontalTabs: Story = {
  args: {
    orientation: 'horizontal',
    tabs: [
      {
        component: <div>Contenido de la pestaña 1</div>,
        label: 'Tab 1',
        value: 0,
      },
      {
        component: <div>Contenido de la pestaña 2</div>,
        label: 'Tab 2',
        value: 1,
      },
    ],
  },
};

export const VerticalTabs: Story = {
  args: {
    orientation: 'vertical',
    tabs: [
      {
        component: <div>Contenido de la pestaña 1</div>,
        label: 'Tab 1',
        value: 0,
      },
      {
        component: <div>Contenido de la pestaña 2</div>,
        label: 'Tab 2',
        value: 1,
      },
    ],
  },
};

export const TabsWithIcons: Story = {
  args: {
    tabs: [
      {
        component: <div>Contenido de la pestaña 1</div>,
        icon: IconType.Dashboard,
        label: 'Tab 1',
        value: 0,
      },
      {
        component: <div>Contenido de la pestaña 2</div>,
        icon: IconType.Business,
        label: 'Tab 2',
        value: 1,
      },
      {
        component: <div>Contenido de la pestaña 3</div>,
        icon: IconType.Help,
        label: 'Tab 3',
        value: 2,
      },
      {
        component: <div>Contenido de la pestaña 3</div>,
        icon: IconType.Help,
        label: 'Tab 4',
        value: 3,
      },
      {
        component: <div>Contenido de la pestaña 3</div>,
        icon: IconType.Help,
        label: 'Tab 5',
        value: 4,
      },
    ],
  },
};

export const TabsWithDisabledTab: Story = {
  args: {
    tabs: [
      {
        component: <div>Contenido de la pestaña 1</div>,
        label: 'Tab Habilitado',
        value: 0,
      },
      {
        component: <div>Contenido de la pestaña 2</div>,
        disabled: true,
        label: 'Tab Deshabilitado',
        value: 1,
      },
    ],
  },
};

export const TabsWithCustomCallback: Story = {
  args: {
    tabs: [
      {
        callBack: () => console.log('Callback de Tab 1'),
        component: <div>Contenido de la pestaña 1</div>,
        label: 'Tab 1',
        value: 0,
      },
      {
        callBack: () => console.log('Callback de Tab 2'),
        component: <div>Contenido de la pestaña 2</div>,
        label: 'Tab 2',
        value: 1,
      },
      {
        callBack: () => console.log('Callback de Tab 3'),
        component: <div>Contenido de la pestaña 3</div>,
        label: 'Tab 3',
        value: 2,
      },
    ],
  },
};

export const TabsWithCustomIcons: Story = {
  args: {
    tabs: [
      {
        component: <div>Contenido de la pestaña 1</div>,
        icon: IconType.Dashboard,
        iconPosition: 'start',
        label: 'Tab 1',
        value: 0,
      },
      {
        component: <div>Contenido de la pestaña 2</div>,
        icon: IconType.Business,
        iconPosition: 'end',
        label: 'Tab 2',
        value: 1,
      },
      {
        component: <div>Contenido de la pestaña 3</div>,
        icon: IconType.Help,
        iconPosition: 'top',
        label: 'Tab 3',
        value: 2,
      },
    ],
  },
};

export const TabsWithCustomSize: Story = {
  args: {
    tabs: [
      {
        component: <div>Contenido de la pestaña 1</div>,
        label: 'Tab 1',
        tabHeight: '50px',
        tabWidth: '100px',
        value: 0,
      },
      {
        component: <div>Contenido de la pestaña 2</div>,
        label: 'Tab 2',
        tabHeight: '50px',
        tabWidth: '100px',
        value: 1,
      },
      {
        component: <div>Contenido de la pestaña 3</div>,
        label: 'Tab 3',
        tabHeight: '50px',
        tabWidth: '100px',
        value: 2,
      },
    ],
  },
};

export const TabsWithDynamicScrollable: Story = {
  args: {
    tabs: [
      {
        component: <div>Contenido de la pestaña 1</div>,
        label: 'Tab 1',
        value: 0,
      },
      {
        component: <div>Contenido de la pestaña 2</div>,
        label: 'Tab 2',
        value: 1,
      },
      {
        component: <div>Contenido de la pestaña 3</div>,
        label: 'Tab 3',
        value: 2,
      },
    ],
  },
};
