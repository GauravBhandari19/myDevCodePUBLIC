import React from 'react';
import Numpad from './Numpad.component';
import Display from './Display.component';
import Calculation from './Calculation.component';

class Calculator extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            total: 0,
            currentNumber: 0,
            lastNUmber: "",
            action: "",
            steps: ""


        }
        this.onClick1 = this.onClick1.bind(this);
    }
    render()
    {
        return (
            <div className="row">

                <div className="col-12">
                    <Display total={this.state.currentNumber}/>
                    <Numpad onClick={this.onClick1}/>
                    <Calculation bla={this.state.steps}/>
                    
                </div>
               
            </div>
        )
    }

    componentDidUpdate()
    {
        
        console.log("***************Component Did Update*************");
        console.log("Current::"+Number(this.state.currentNumber));
        console.log("Last::"+Number(this.state.lastNumber));
        console.log("************************************************");
    }

    onClick1(e)
    {
        //console.log("Message Aaya");
        //console.log(e);
        //console.log(" Incoming Value::"+e.target.value);
        if(e.target.value==="/" || e.target.value==="+" || e.target.value==="-" || e.target.value==="*")
        {
            //console.log("Setting New State");
            this.setState(
                {
                    lastNumber: this.state.currentNumber,
                    currentNumber: 0,
                    action: e.target.value
                })
        }
        else if(e.target.value==="=")
        {
            if(this.state.action==="*")
            {
                this.setState
                (
                    {
                        currentNumber: Number(this.state.currentNumber)*Number(this.state.lastNumber)
                    }
                )
            }
            else
            if(this.state.action==="+")
            {
                this.setState
                (
                    {
                        currentNumber: Number(this.state.currentNumber)+Number(this.state.lastNumber)
                    }
                )
            }
            else
            if(this.state.action==="-")
            {
                this.setState
                (
                    {
                        currentNumber: Number(this.state.lastNumber) - Number(this.state.currentNumber)
                    }
                )
            }
            else
            if(this.state.action==="/")
            {
                this.setState
                (
                    {
                        currentNumber: Number(this.state.lastNumber) / Number(this.state.currentNumber)
                    }
                )
            }


        }
        else
        if (e.target.value==="AC")
        {
            console.log("In Else")
            this.setState({
                total: 0,
                currentNumber: 0,
                lastNUmber: "",
                action: ""
    
            }
            )
        }
        else
        {
            console.log("In Else")
            this.setState({
                currentNumber: this.state.currentNumber+e.target.value
            }
            )
        }

        this.setState({
            steps: this.state.steps + e.target.value
        })


        
    }
}

export default  Calculator;