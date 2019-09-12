import Home from './Home';
import Login from './Login';
import Profile from './Profile';

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/profile',
        component: Profile
    }
];
