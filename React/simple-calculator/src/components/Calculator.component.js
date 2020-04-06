import React from 'react';
import Numpad from './Numpad.component';
import Display from './Display.component';

class Calculator extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            total: 0,
            currentNumber: "",
            lastNUmber: "",
            action: ""

        }
        this.onClick1 = this.onClick1.bind(this);
    }
    render()
    {
        return (
            <div className="">
                <Display total={this.state.currentNumber}/>
                <Numpad onClick={this.onClick1}/>
            </div>
        )
    }

    onClick1(e)
    {
        //console.log("Message Aaya");
        //console.log(e);
        console.log("Current::"+this.state.currentNumber);
        console.log("Last::"+this.state.lastNumber);
        if(e.target.value==="/" || e.target.value==="+" || e.target.value==="-" || e.target.value==="*")
        {
            console.log("Setting New State");
            this.setState(
                {
                    lastNumber: this.state.currentNumber,
                    currentNumber: "",
                    action: e.target.value
                })
        }
        if(e.target.value==="=")
        {
            this.setState
            (
                {
                    currentNumber: this.state.currentNumber+this.state.lastNumber
                }
            )
        }
        else
        {
        console.log("In Else")
        this.setState(
        {
            currentNumber: this.state.currentNumber+e.target.value
        })
        }
    }
}

export default  Calculator;