import React, { Component } from 'react'
import './Stepper.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default class StepperFrame extends Component {

    constructor(props) {
        super();
        this.state = {
            pageNumber: 0,
            cards: props.cards,
        }
    }

    render() {

        let row1 =
            <div id="StepperRowDiv">
            {this.state.cards[this.state.pageNumber][0]} {this.state.cards[this.state.pageNumber][1]} {this.state.cards[this.state.pageNumber][2]}
            </div>
    
        let row2 =
            <div id="StepperRowDiv">
            {this.state.cards[this.state.pageNumber][3]} {this.state.cards[this.state.pageNumber][4]} {this.state.cards[this.state.pageNumber][5]}
            </div>

        if(this.state.cards[this.state.pageNumber].length <= 2) {
            row1 =
                <div id="StepperRowDiv">
                {this.state.cards[this.state.pageNumber][0]} {this.state.cards[this.state.pageNumber][1]}
                </div>
            row2 = null;
        } else if(this.state.cards[this.state.pageNumber].length <= 4) {
            row1 =
                <div id="StepperRowDiv">
                {this.state.cards[this.state.pageNumber][0]} {this.state.cards[this.state.pageNumber][1]}
                </div>
    
            row2 =
                <div id="StepperRowDiv">
                {this.state.cards[this.state.pageNumber][2]} {this.state.cards[this.state.pageNumber][3]}
                </div>
        }

        return (
            //need to build a mapper to loop through the cards list and do this automatically for an unset number of cards
            <div id="StepperFrameDiv">
                <FontAwesomeIcon icon={faChevronLeft} className="StepperArrow" id="leftStepperArrow" onClick={this.stepBack}/>
                {row1}
                {row2}
                <FontAwesomeIcon icon={faChevronRight} className="StepperArrow" id="rightStepperArrow" onClick={this.stepForward}/>
            </div>
        )
    }

    stepBack = () => {
        console.log("Go back");
        if(this.state.pageNumber > 0)
            this.setState({pageNumber: this.state.pageNumber-1});
    }

    stepForward = () => {
        console.log("Go forward");
        if(this.state.pageNumber < Object.keys(this.state.cards).length-1)
            this.setState({pageNumber: this.state.pageNumber+1});
    }
}
