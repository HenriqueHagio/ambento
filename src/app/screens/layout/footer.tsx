import React from 'react'

export default function footer() {
    return (
        <div > 
            <div >
                <footer
                    className="text-center text-lg-start text-white" style={{ backgroundColor: '#45A37E' }}
                >
                    <div>
                        
                    </div>
                    <section
                        className="d-flex justify-content-between p-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >

                    </section>

                    <section >
                        <div className="container-fluid text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Amb.ento</h6>

                                    <p style={{ textAlign: 'justify' }}>
                                        no estado de São Paulo. Usando uma API, ele identifica pontos de coleta
                                        próximos ao usuário com base no tipo de material a ser descartado.
                                        Além disso, o app oferece cards informativos sobre os tipos de materiais
                                        aceitos e suas classificações.
                                        Além disso, o app oferece cards informativos sobre os tipos de materiais
                                        aceitos e suas classificações.
                                    </p>
                                </div>

                            

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Navegação</h6>

                                    <p>
                                        <a href="/" className="text-white nav-link">Home</a>
                                    </p>
                                    <p>
                                        <a href="/map" className="text-white nav-link">Pontos de Coleta</a>
                                    </p>
                                    <p>
                                        <a href="/login" className="text-white nav-link">Login</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contato</h6>
                                    <p>
                                        <a href="/feedback" className="text-white nav-link">Feedback</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        © 2024 Copyright:
                        Ambento.com
                    </div>
                </footer>

            </div>
        </div>
    )
}


  