import SubPage from './SubPage';
import Page6 from './index';

const Page6Config = [
    {
        path: '/page6/subpage',
        component: SubPage,
    },
    {
        path: '/page6',
        component: Page6,
        exact: true
    }
];

export default Page6Config;