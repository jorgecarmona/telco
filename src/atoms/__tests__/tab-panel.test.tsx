import React from 'react'

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CircularProgress from '@mui/material/CircularProgress'; 

import { IconType } from '../icon-store';
import TabPanel, {TabConfig} from '../tab-panel';

const myfunction = () => {
  console.log('Se llamó la función');
};

const LazyOne = React.lazy(() => import('../../atoms/alert'));
const LazyTwo = React.lazy(() => import('../../atoms/icon'));
const LazyThree = React.lazy(() => import('../../pages/exercise'));

const tabs: TabConfig[] = [
  {
    label: 'Item One',
    value: 0,
    iconPosition: 'start',
    callBack: myfunction,
    icon: IconType.Dashboard,
    tabHeight: '100px',
    tabWidth: '200px',
    component: (
      <React.Suspense fallback={<CircularProgress />}>
        <LazyThree />
      </React.Suspense>
    ),
  },
  {
    label: 'Item Two',
    value: 1,
    iconPosition: 'end',
    icon: IconType.Business,
    disabled: false,
    tabHeight: '100px',
    tabWidth: '200px',
    component: (
      <React.Suspense fallback={<CircularProgress />}>
        <LazyTwo name={IconType.Email} />
      </React.Suspense>
    ),
  },
  {
    label: 'Item Three',
    value: 2,
    iconPosition: 'top',
    icon: IconType.Help,
    tabHeight: '100px',
    tabWidth: '200px',
    component: (
      <React.Suspense fallback={<CircularProgress />}>
        <LazyOne severity="success" children='Success form'/>
      </React.Suspense>
    ),
  },
];

describe('TabPanel Component', () => {
  it('renders with default properties', () => {
    render(<TabPanel tabs={tabs} scrollOnTabLength={2} initialTabIndex={2}/>)
  });
});
