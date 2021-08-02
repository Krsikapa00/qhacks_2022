import React, { Component } from 'react'
import './Stepper.css'
import StepperCardGeneral from './StepperCardGeneral'

export default class StepperFrame extends Component {
    render() {
        return (
            //need to build a mapper to loop through the cards list and do this automatically for an unset number of cards
            <div id="StepperFrameDiv">
                <div id="StepperRowDiv">
                    {this.props.cards[0]}, {this.props.cards[1]}, {this.props.cards[2]}
                </div>
                <div id="StepperRowDiv">
                {this.props.cards[3]}, {this.props.cards[4]}, {this.props.cards[5]}
                </div>
            </div>
        )
    }
}
