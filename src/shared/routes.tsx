import React from 'react';
import Loadable from 'react-loadable';

// Craete separate component for Loading screen
const Loading: React.FC = () => (
    <div>Loading...</div>
);

export default [
    {
        path: '/',
        exact: true,
        component: Loadable({
            loader: () => import('@shared/components/pages/Home'),
            loading: Loading
        })
    },
    {
        path: '/login',
        component: Loadable({
            loader: () => import('@shared/components/pages/Login'),
            loading: Loading
        })
    },
    {
        path: '/profile',
        component: Loadable({
            loader: () => import('@shared/components/pages/Profile'),
            loading: Loading
        })
    },
    {
        path: '/register',
        component: Loadable({
            loader: () => import('@shared/components/pages/Register'),
            loading: Loading
        })
    },
    {
        path: '/recipes',
        component: Loadable({
            loader: () => import('@shared/components/pages/Recipes'),
            loading: Loading
        })
    },
    {
        path: '/recipe/:id',
        component: Loadable({
            loader: () => import('@shared/components/pages/Recipe'),
            loading: Loading
        })
    },
    {
        path: '/new-recipe',
        component: Loadable({
            loader: () => import('@shared/components/pages/NewRecipe'),
            loading: Loading
        })
    }
];
