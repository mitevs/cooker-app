import './main'

declare const module

if (module.hot) {
  module.hot.accept()
}
