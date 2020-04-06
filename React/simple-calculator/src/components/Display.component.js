import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class Display extends React.Component
{
    render()
    {
        return (
            <div className="form-group">
                <h1 className="col-4">Simple Calculator</h1>
                <input type="number" 
                className="form-control-lg col-4 btn-outline-primary" 
                id="displayCalsulation" value={this.props.total} readOnly></input>
            </div>
        )
    }
}

export default  Display;