import React, { PropTypes } from 'react'
import Button from '../../material/button.jsx';
import './Szkolenie.scss';
const Szkolenie = ({  title, start, end, place, dodajDoKalendarza }) => (
  <div className="Szkolenie">
    <div className="title">{title}</div>
    <div className="date">{start.toLocaleString()}-{end.toLocaleString()}</div>
    <div className="place">{place}</div>
    <div className="menu">
        <Button label="Dodaj do kalendarza" onClick = { ()=>{
                dodajDoKalendarza({
                    title,
                    start,
                    end,
                    place
                })
            } }></Button>
    </div>
  </div>
)
Szkolenie.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  place: PropTypes.string.isRequired
}

export default Szkolenie
