/* eslint-disable import/default */
import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import './index.scss' // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
const store = configureStore()
const renderFunc = Component =>
  render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root')
  )

renderFunc(Root)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default
    renderFunc(NewRoot)
  })
}
