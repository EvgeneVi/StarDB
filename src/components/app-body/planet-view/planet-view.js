import React from 'react';

export default ({planet:{image, name, rotationPeriod, orbitalPeriod, diameter, climate}}) => 
        
    <div className="container-fluid planet-view">
            <div className="row">
                <div className="col-sm col-md-auto img-planet">
                    <img src={image} alt = "planet" />
                </div>
                <div className="col">
                    <ul>
                        <li><span>{name}</span></li>
                        <li><span>roatation period: {rotationPeriod}</span></li>
                        <li><span>orbital period: {orbitalPeriod}</span></li>
                        <li><span>diameter: {diameter}</span></li>
                        <li><span>climate: {climate}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    

    
