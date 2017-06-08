import React, {PropTypes} from 'react';
import VisibleSzkoleniaList from '../containers/szkolenia.jsx';
export default class SzkoleniaApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="AppProfil">
            <VisibleSzkoleniaList />
        </div>
    );
  }
}
