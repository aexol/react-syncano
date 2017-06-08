import React,
{
	PropTypes
}
from 'react';
import Button from '../../material/button.jsx';
import PModal from '../../material/modal.jsx';
const Clients = ({
	active,
	clients,
	activeClient,
	docs,
	docsManagerProps,
	onCreateAkta,
	onCreateKlient,
	addKlient,
	addNazwa,
	addSygnatura,
	onDocsExpand,
	onChangeNazwa,
	onChangeNazwaKlient,
	onChangeSygnatura,
	isOpen,
	isOpenKlient,
	onClose,
	onCloseKlient,
	onOpen,
	onOpenKlient
}) => (
	<div className="Clients">
		{clients.map(d => (
				<SingleClient active={active} docsManagerProps={docsManagerProps} key={d.id} onClick={onDocsExpand} {...d}/>
		))}
		<Button label="Dodaj klienta" onClick={onOpenKlient}/>
		<PModal contentLabel="Dodaj klienta" isOpen={isOpenKlient}>
			<h4>Dodaj klienta</h4>
			<input onChange={onChangeNazwaKlient} placeholder="nazwa" type="text" value={addKlient}/>
			<Button label="Dodaj akta" onClick={onCreateKlient}/>
			<Button label="anuluj" onClick={onCloseKlient}/>
		</PModal>
	</div>
)
export
default Clients