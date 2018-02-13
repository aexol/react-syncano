import * as syncanoActions from '../actions'
import { connect } from 'react-redux'

import React, { PropTypes } from 'react'


export const withSyncano = ({
    actions = {},
    state = s => ({
        ...s
    })
} = {}) => (WrappedComponent) => {
    @connect(
        state,
        {
            ...syncanoActions,
            ...actions
        }
    )
    class SyncComponent extends React.Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    return SyncComponent
}