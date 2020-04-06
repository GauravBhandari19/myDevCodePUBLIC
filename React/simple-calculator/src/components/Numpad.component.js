import React from 'react';

class Numpad extends React.Component
{
    
    
    render()
    {
        return (
            <div className="form-group">
                <div>
                    <button type="button" value="1" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>1</button>
                    <button type="button" value="2" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>2</button>
                    <button type="button" value="3" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>3</button>
                    <button type="button" value="/" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>/</button>
                </div>
                <div>
                    <button type="button" value="4" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>4</button>
                    <button type="button" value="5" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>5</button>
                    <button type="button" value="6" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>6</button>
                    <button type="button" value="*" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>*</button>
                </div>
                <div>
                    <button type="button" value="7" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>7</button>
                    <button type="button" value="8" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>8</button>
                    <button type="button" value="9" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>9</button>
                    <button type="button" value="+" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>+</button>
                </div>
                <div>
                    <button type="button" value="0" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>0</button>
                    <button type="button" value="-" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>-</button>
                        <button type="button" value="=" className="btn btn-outline-primary col-1" onClick=
                        {this.props.onClick}>=</button>
                    
                </div>
            </div>
        )
    }
}

export default  Numpad;