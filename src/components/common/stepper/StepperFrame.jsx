import React, { Component } from 'react'
import './Stepper.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import StepperCardGeneral from './StepperCardGeneral';

export default class StepperFrame extends Component {

    constructor(props) {
        super();
        this.state = {
            pageNumber: 0,
            cards: props.cards
        }
    }

    render() {

        let stepBackButton = <FontAwesomeIcon icon={faChevronLeft} className="StepperArrow StepperArrowActive" id="leftStepperArrow" onClick={this.stepBack}/>
        let stepForwardButton = <FontAwesomeIcon icon={faChevronRight} className="StepperArrow StepperArrowActive" id="rightStepperArrow" onClick={this.stepForward}/>

        if(this.state.pageNumber == 0)
            stepBackButton = <FontAwesomeIcon icon={faChevronLeft} className="StepperArrow StepperArrowInactive" id="leftStepperArrow" onClick={this.stepBack}/>
        
        if(this.state.pageNumber == Object.keys(this.state.cards).length-1)
            stepForwardButton = <FontAwesomeIcon icon={faChevronRight} className="StepperArrow StepperArrowInactive" id="rightStepperArrow" onClick={this.stepForward}/>

        let row1 =
            <div id="StepperRowDiv">
            {this.state.cards[this.state.pageNumber].map( 
                (n, index) => (
                    
                    <StepperCardGeneral border={index} picture={n.picture} name={n.name} position={n.position} company={n.company}/>
                )
            )}
            </div>
    
  
        return (
            //need to build a mapper to loop through the cards list and do this automatically for an unset number of cards
            
            <div className="Container">
                <h1 className="StepperTitle">{this.props.stepperTitle}</h1>
                <div id="StepperFrameDiv">
                    {stepBackButton}
                    <div id="StepperCardsContainer">                
                        {row1}
                    </div>
                    {stepForwardButton}
                </div>
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
