import Loadable from 'react-loadable'
import Loading from '@shared/components/containers/Loading'

export default [
  {
    path: '/recipes',
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "recipes" */
          '@shared/pages/Recipes'
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
          '@shared/pages/Recipe'
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
          '@shared/pages/NewRecipe'
        ),
      loading: Loading,
    }),
  },
]
