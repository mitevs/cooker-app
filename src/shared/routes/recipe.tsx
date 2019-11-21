import Loadable from 'react-loadable';
import Loading from '@shared/components/pages/Loading';

export default [
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
