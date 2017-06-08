import React,
{
	PropTypes
}
from 'react'
import './Legal.scss';
const Legal = ({
	phrase,
	onEnter,
	onCategory,
	phrases
}) => (
	<div className="Legal">
		<div className='Title'>
			<div className='title'>Słownik Legal English</div>
			<input onChange={(e) => {
			onEnter(e.target.value)
		}} placeholder="Wpisz hasło po polsku lub angielsku" type="text" value={phrase}/>
		</div>
		<div className="Phrases">
			{phrases.length == 0 ? (
				<div className='empty'>Wpisz interesujące Cię frazy</div>
		) : ""}
				{phrases.map(p => (
				<div className="Phrase" key={p.id}>
					<div className='Translation'>
						<div className="Polski">{p.polski}</div>
						<div className='Space'>-</div>
						<div className="Angielski">{p.angielski}</div>
					</div>
					<a className="Kategoria" onClick={() => {
					onCategory(p.kategoria.id)
				}}>{p.kategoria.nazwa}</a>
				</div>
		))}
		</div>
	</div>
)
export
default Legal