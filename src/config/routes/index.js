import React from 'react';
import { Redirect } from 'react-router-dom';

import ErrorConfig from 'containers/Error404/config';
import Page1Config from 'containers/Page1/config';
import Page2Config from 'containers/Page2/config';
import Page3Config from 'containers/Page3/config';
import Page4Config from 'containers/Page4/config';
import Page5Config from 'containers/Page5/config';
import Page6Config from 'containers/Page6/config';


export const routes = [
    ...ErrorConfig,
    ...Page1Config,
    ...Page2Config,
    ...Page3Config,
    ...Page4Config,
    ...Page5Config,
    ...Page6Config,
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/page1" />
    },
    {
        component: () => <Redirect to="/error404" />
    }
];
