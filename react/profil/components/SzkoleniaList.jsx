import React, { PropTypes } from 'react'
import Szkolenie from './Szkolenie'

const SzkoleniaList = ({ szkolenia, dodajDoKalendarza }) => (
  <div className="SzkoleniaList">
    {szkolenia.map(szkolenie =>
      <Szkolenie
        key={szkolenie.id}
        dodajDoKalendarza={szkolenie => {dodajDoKalendarza(szkolenie)}}
        {...szkolenie}
      />
    )}
</div>
)

SzkoleniaList.propTypes = {
  szkolenia: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    place: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default SzkoleniaList
