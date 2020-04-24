import React from 'react';

const CardWrapper = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col md-12">
                    <div style={{marginTop: "30px"}} className="card">
                        <div className="card-header">
                            Featured
            </div>
                        <div className="card-body">
                            <h5 className="card-title">Hello</h5>
                            <p className="card-text">Text</p>
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardWrapper;