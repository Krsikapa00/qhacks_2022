import React, { Component } from 'react'

export default class StepperCardGeneral extends Component {

    render() {
        var borderColour = "#00205B";
        if (this.props.border %3 == 1){
            borderColour = "#c81c2e";
        }
        else if (this.props.border %3 == 2){
            borderColour = "#fedb01";
        }
        return (
            <div id="GeneralStepperCardFrame">
                <img id="StepperPicFrame" style={{borderColor: borderColour }}src={this.props.picture} alt="headshot" />
                <h3 id="CardName">
                    {this.props.name}
                </h3>
                <h2 id="CardPosition">
                    {this.props.position}
                </h2>
                <div id="CardLogoContainer">
                    <img id="CardLogoPic" src={this.props.company} />
                </div>
            </div>
        )
    }
}
