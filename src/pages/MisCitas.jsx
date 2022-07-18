import React from "react";
import ContenidoCita from "../components/ContenidoCita";
import HeaderMisCitas from "../components/HeaderMisCitas";
import MenuLateralMisCitas from "../components/MenuLateralMisCitas";
import PanelUsuarioCitas from "../components/PanelUsuarioCitas";
import data from "../dataCita"

function MisCitas (){
    const Citas = data.map(item => {return(
        <ContenidoCita
          key = {item.id}
          item = {item}
        />
    )})


    return (
        <div>
            <div className="container">
                <HeaderMisCitas/>
            </div>
            <hr className="bg-gray-300 mt-2 mt-sm-0 mb-0 mb-sm-5"></hr>
            <div>
                <main className="container no-breadcrumbs">
                    <div>
                        <section>
                            <div className="row">
                                <div className="col-md-9">
                                    <PanelUsuarioCitas /> 
                                </div>
                                <MenuLateralMisCitas/>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}


export default MisCitas