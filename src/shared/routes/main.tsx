import Loadable from 'react-loadable'
import Loading from '@shared/components/pages/Loading'

export default [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "home" */
          '@shared/components/pages/Home'
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
          '@shared/components/pages/Login'
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
          '@shared/components/pages/Profile'
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
          '@shared/components/pages/Register'
        ),
      loading: Loading,
    }),
  },
]
