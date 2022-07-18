import React from "react";
import { Link } from "react-router-dom";

function HeaderMisCitas () {
    return <div className="mt-2 mt-sm-4 mb-0 mb-sm-2">
        <div className="row">
                <div className="col-8">
                    <div>
                        <div>
                            <h1>Mi Cuenta</h1>
                        </div>
                    </div>
                </div>
                <div className="col-4 text-right">
                    <Link to="/#"><a href="/menu.html" className="btn btn-lg btn-light mt-2 d-none d-sm-inline-flex">
                        Cerrar
                    </a></Link>
                </div>
            </div>
    </div>
    
}


export default HeaderMisCitas