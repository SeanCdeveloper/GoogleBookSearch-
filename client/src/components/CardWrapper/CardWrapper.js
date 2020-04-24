import React from 'react';
import CardBody from '../CardBody/CardBody'

const CardWrapper = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col md-12">
                    <div style={{marginTop: "30px"}} className="card">
                        <div className="card-header">Featured</div>
                        <div className="card-body">
                            <CardBody/>
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardWrapper;