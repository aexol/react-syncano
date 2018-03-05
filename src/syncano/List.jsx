import React, { PropTypes } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { withSyncano } from './decorators'
import AdminList from './components/AdminList'
import {PreloaderScreen} from './media/PreloaderScreen'
@withSyncano()
class List extends React.Component {
  render() {
    const { models, match: { params: { model } } } = this.props
    console.log(models)
    if (!models || !this.props[model]) {
      return <PreloaderScreen size={64} text='Loading models...' />
    }
    return <AdminList model={models.find(m => m.name === model)} />
  }
}
export default withRouter(List)
