import React from 'react';
import { IconType } from '../atoms/icon-store';
import CircularProgress from '@mui/material/CircularProgress';

import TabPanel, { TabConfig } from '../atoms/tab-panel';

const LazyOne = React.lazy(() => import('../atoms/alert'));
const LazyTwo = React.lazy(() => import('../atoms/icon'));
const LazyThree = React.lazy(() => import('../atoms/chip'));

const myfunction = () => {
  console.log('Se llamó la función');
};

function App() {

  const tabs: TabConfig[] = [
    {
      label: 'Item One',
      value: 0,
      iconPosition: 'start',
      callBack: myfunction,
      icon: IconType.Dashboard,
      component: (
        <React.Suspense fallback={<CircularProgress />}>
          <LazyThree label="Welcome Back" />
        </React.Suspense>
      ),
    },
    {
      label: 'Item Two',
      value: 1,
      iconPosition: 'end',
      icon: IconType.Business,
      disabled: true,
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
      component: (
        <React.Suspense fallback={<CircularProgress />}>
          <LazyOne severity="success" />
        </React.Suspense>
      ),
    },
  ];

  return (
    <div>
      <TabPanel tabs={tabs} />
    </div>
  );
}

export default App;