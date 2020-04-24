import React from 'react';

const CardBody = () => {
    return (
        <div className="container">
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={"https://via.placeholder.com/150"} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text">This is a wider card.</p>
                            <p className="card-text"><small className="text-muted"></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBody;

