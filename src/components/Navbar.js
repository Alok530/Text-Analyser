import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (        
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
                {/*<Link className="navbar-brand" to="/">{props.tittle}</Link>*/}
                <div className="col-md-9">
                    <h1 className="navbar-brand" to="/">{props.tittle}</h1>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-md-3 textAlign-end collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.toggle} id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{fontWeight:'bolder'}} htmlFor="flexSwitchCheckDefault">{props.text}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// for setting proptype
Navbar.propTypes = {
    tittle: PropTypes.string.isRequired,  // isRequired means it is manedetry to pass props
    aboutText: PropTypes.string,
}
// these are default props set atomatic if you not pass any props 
Navbar.defaultProps = {
    tittle: 'set tittle',
    aboutText: 'set about',
    textMode: 'Enable Dark Mode',
}