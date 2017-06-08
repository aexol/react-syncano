import React,
{
	PropTypes
}
from 'react'
import './SingleFile.scss';
const SingleFile = ({
	plik,
	id,
	onDelete,
	onDownload,
	serve_file,
	delete_file,
	plik_nazwa,
	data_dodania
}) => (
	<div className="SingleFile">
		<div className="name">
			<a onClick={() => {
			onDownload(serve_file, plik_nazwa)
		}}>{plik_nazwa}</a></div>
		<div className="date-created">{(new Date(data_dodania)).toLocaleString()}</div>
		<a onClick={() => {
			onDelete(id)
		}}>
			<i aria-hidden="true" className="fa fa-trash"></i>
		</a>
		<a download={plik_nazwa} onClick={() => {
			onDownload(serve_file, plik_nazwa)
		}}>
			<i aria-hidden="true" className="fa fa-download"></i>
		</a>
	</div>
)
export
default SingleFile