import React from 'react'

function Alert(props) {
    const captalise = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:'40px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{captalise(props.alert.type)} </strong>: {props.alert.alertMsg}
            </div>}
        </div>
    )
}

export default Alert