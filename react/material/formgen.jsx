import React,
{
	PropTypes
}
from 'react'
import Select from 'react-select';
const fieldElements = {
	text: ({
		name,
		placeholder,
		inputType
	}, t) => (
		<input key={name} onChange={(e) => {
				t.setState({
					fields: {
						...t.state.fields,
						[name]: e.target.value
					}
				})
			}} placeholder={placeholder ? placeholder : name} type={inputType ? inputType : "text"} value={t.state.fields[name]}/>
	),
	textarea: ({
		name,
		placeholder
	}, t) => (
		<textarea key={name} onChange={(e) => {
				t.setState({
					fields: {
						...t.state.fields,
						[name]: e
					}
				})
			}} placeholder={placeholder ? placeholder : name} value={t.state.fields[name]}/>
	),
	select: ({
		name,
		placeholder,
		label,
		value,
		values
	}, t) => (
		<Select key={name} name={placeholder ? placeholder : name} onChange={(e) => {
				t.setState({
					fields: {
						...t.state.fields,
						[name]: e
					}
				});
			}} options={values.map(k => ({
				value: k[value],
				label: k[label]
			}))} placeholder={placeholder ? placeholder : name} value={t.state.fields[name]}/>
	)
}
class FormGen extends React.Component {
	constructor(props) {
		super(props);
		const {
			fields
		} = this.props;
		var newFields = {}
		for (var f of fields) {
			newFields[f.name] = ""
		}
		this.state = {
			fields: {
				...newFields
			}
		}
	}
	componentWillReceiveProps(nextProps) {
		const {
			fields,
			values
		} = nextProps;
		var newFields = {}
		for (var f of fields) {
			newFields[f.name] = values[f.name] ? values[f.name] : ""
		}
		this.setState({
			fields: {
				...newFields
			}
		})
	}
	validate() {
		this.props.validate(this.state.fields)
	}
	render () {
		const {
			fields,
			submitText
		} = this.props;
		const fieldsRender = fields.map(f => fieldElements[f.type]({
			...f
		}, this));
		return (
			<div className='FormGen'>
				{fieldsRender}
				<div className='Submit' onClick={() => {
					this.validate()
				}}>{submitText ? submitText : "Submit"}</div>
			</div>
		)
	}
}
FormGen.defaultProps = {
	values: {}
}
export
default FormGen