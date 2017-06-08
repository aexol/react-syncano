import { connect } from 'react-redux'
import { getSzkolenia,fetchSzkolenia, addSzkolenie, addEvent,fetchAddEvent } from '../actions'
import SzkoleniaList from '../components/SzkoleniaList'

import React, { PropTypes } from 'react'

const initialState123 = [
        {
            id:13,
            title:"NOWELIZACJMÓWIEŃ PUBLICZNYCH",
            start:new Date(2017,0,20,11,30,0),
            end:new Date(2017,0,20,15,0,0),
            place:"ul. Gdańska 163,z ,CWZS Zawisza w Bydgoszczy"
        },
]
class VisibleSzkoleniaList extends React.Component {
    componentDidMount () {
        const { dispatch,szkolenia } = this.props;
        fetchSzkolenia(dispatch)
    }
    dodajDoKalendarza(szkolenie){
        const { dispatch } = this.props;
        fetchAddEvent(szkolenie)
    }
    render () {
        const { szkolenia } = this.props
        return(
            <div>
                <SzkoleniaList szkolenia={szkolenia} dodajDoKalendarza={(szkolenie)=>{ this.dodajDoKalendarza(szkolenie) }} />
            </div>
        )
    }
}

VisibleSzkoleniaList.propTypes={
    dispatch: PropTypes.func.isRequired,
    szkolenia: PropTypes.array.isRequired
}
const mapStateToProps = state =>({
    szkolenia:state.szkolenia
})
export default connect(mapStateToProps)(VisibleSzkoleniaList);
