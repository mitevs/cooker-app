import Loadable from 'react-loadable'
import { Loading } from '@shared/components/containers/Loading'

export default [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "home" */
          '@shared/pages/Home'
        ),
      loading: Loading,
    }),
  },
  {
    path: '/login',
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "login" */
          '@shared/pages/Login'
        ),
      loading: Loading,
    }),
  },
  {
    path: '/profile',
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "profile" */
          '@shared/pages/Profile'
        ),
      loading: Loading,
    }),
  },
  {
    path: '/register',
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "register" */
          '@shared/pages/Register'
        ),
      loading: Loading,
    }),
  },
]
