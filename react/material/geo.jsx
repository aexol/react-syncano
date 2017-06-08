import React, { PropTypes } from 'react';
import Geosuggest from 'react-geosuggest';
import './geo.scss';
class GeoInput extends React.Component {
    render () {
        const props = this.props;
        return(
            <Geosuggest {...props} />
        )
    }
}

export default GeoInput;
