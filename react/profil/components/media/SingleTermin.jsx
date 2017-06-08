import React,
{
	PropTypes
}
from 'react'
import "./SingleTermin.scss";
const SingleTermin = ({
	id,
	deleteTermin,
	editTermin,
	data,
	nazwa,
	miejsce
}) => (
	<div className="SingleTermin">
		<div className="data">{new Date(data).toLocaleString()}</div>
		<div className="miejsce">{miejsce}</div>
		<div className="nazwa">{nazwa}</div>
		<div className="actions">
			<a onClick={() => {
			deleteTermin(id)
		}}>
				<i aria-hidden="true" className="fa fa-trash"></i>
			</a>
			<a onClick={() => {
			editTermin(id)
		}}>
				<i aria-hidden="true" className="fa fa-edit"></i>
			</a>
		</div>
	</div>
)
export
default SingleTermin