import React from 'react'

export default function Footer() {    
    return (
        <div style={{ background: 'black' }}>
            <div className="container-fluid footer mx-0">
                <div className="row mx-0">
                    <div className="col-md-4 mx-auto text-center mb-4">
                        <h3>Follow Me</h3>
                        <div className="mx-auto mb-2">
                            <samp><i onClick={() => { window.open('https://m.facebook.com/alok.alokroy.585', '_blank') }} className="bi bi-facebook mx-2" style={{ cursor: 'pointer', color: 'white', fontSize: '23px' }}></i></samp>
                            <samp><i onClick={() => { window.open('https://www.instagram.com/rajalok530/', '_blank') }} className="bi bi-instagram mx-2" style={{ cursor: 'pointer', color: 'white', fontSize: '23px' }}></i></samp>
                            <samp><i onClick={() => { window.open('https://www.linkedin.com/in/alok-kumar-rai-3261b21ba/', '_blank') }} className="bi bi-linkedin mx-2" style={{ cursor: 'pointer', color: 'white', fontSize: '23px' }}></i></samp>
                        </div>                        
                    </div>
                    <div className="col-md-4 mx-auto text-center mb-2">
                        <h3>Text Analyzer</h3>
                        <p className="mt-2">This website is not for commercial purpose, the material and information contained on this website is for general purposes only.</p>
                    </div>
                    <div className="col-md-4 mx-auto text-center mb-2">
                        <h3>Contact Me</h3>
                        <div>
                            <samp>Chapra, Bihar</samp><br />
                            <samp>Phone: 7321015099</samp><br />
                            <samp>Email: alokkumarrai2003@gmail.com</samp>
                        </div>
                    </div>
                    <hr />
                    <p className="copyright">@Copyright 2021 - Alok Kumar Rai</p>
                </div>
            </div>
        </div>
    )
}
