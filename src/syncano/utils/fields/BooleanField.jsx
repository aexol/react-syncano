import React, { PropTypes } from 'react'
class BooleanField extends React.Component {
    render() {
        const {
            name,
            modifyField,
            fieldValue: checked,
        } = this.props
        return (
            <div className="BooleanField" onClick={
                () => {
                    modifyField({
                        name,
                        value: !checked
                    })
                }
            } style={{
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center'
            }}>
                <label>{name}</label>
                <div style={{
                    width: 20,
                    height: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#dfdfdf'
                }}>
                    <div style={{
                        width: 16,
                        height: 16,
                        backgroundColor: checked ? '#333' : '#cecece'
                    }}></div>
                </div>
            </div>
        )
    }
}
export default BooleanField