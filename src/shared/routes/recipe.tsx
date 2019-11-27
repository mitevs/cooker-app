import Loadable from 'react-loadable'
import Loading from '@shared/components/pages/Loading'

export default [
  {
    path: '/recipes',
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "recipes" */
          '@shared/components/pages/Recipes'
        ),
      loading: Loading,
    }),
  },
  {
    path: '/recipe/:id',
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "recipe" */
          '@shared/components/pages/Recipe'
        ),
      loading: Loading,
    }),
  },
  {
    path: '/new-recipe',
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "new-recipe" */
          '@shared/components/pages/NewRecipe'
        ),
      loading: Loading,
    }),
  },
]
