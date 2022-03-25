import React from "react";
import Videos from "./Videos";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Hed = ( () => {


  return(<div>
    
          
              <section id="carrusel">

                <div className="row">
                  
                  <div className="col-12 col-md-12">

                    <img src="https://media.vandalsports.com/i/640x360/3-2022/20223292845_1.jpg" className="w-100" alt="" />
               

                    </div>

                </div>

              </section>
              
              
              <section> 
              
              <div className="row">
                  
                      <div className="col-12 col-md-12">
                          <h1 id="titulo">Rick and Morty</h1>
                          <iframe src="https://www.youtube.com/embed/t7DcmGCV8kE" frameborder="0" allow="autoplay" encrypted-media allowfullscreen className="video"/>
                        <Link to = '/videos'><Button color="secondary"><h2> Mas videos </h2></Button></Link>

                    </div>

                </div>
             
              </section>

              <section>
                <h1 id ='titulo'>Creadores</h1>
                <div className="row">
                  <div className="col-5 col-md-5">
                      <div className="card">
                        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/2010_Justin_Roiland.jpg/220px-2010_Justin_Roiland.jpg"  alt="" />
                            <h5 >Nombre: Justin Roiland</h5>
                            <h5>Fecha de nacimiento: 21 de febrero de 1980</h5>
                            <Link to={'/creadores'}><h5 className="card-title"> Conocer mas </h5></Link>
                      </div>
                      
                  </div>
                  <div className="col-2 col-md-2"></div>
                  <div className="col-5 col-md-5">
                      <div className="card">
                        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Dan_Harmon_by_Gage_Skidmore_2.jpg/220px-Dan_Harmon_by_Gage_Skidmore_2.jpg"  alt="" />
                            <h5 className="card-title" >Nombre: Dan Harmon</h5>
                            <h5 className="card-title">Fecha de nacimiento:  3 de enero de 1973</h5>
                            <h5 className="card-title"> Conocer mas </h5>
                      </div>
                      
                  </div>
                </div>

              </section>
            


  </div>)  
}) 

export default Hed;

    
 