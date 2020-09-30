import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render(){
        let spamElements = []
        for(let i=0; i<500; i++){
            spamElements.push(<Spam />)
        }
        console.log(spamElements)
        return(spamElements)
    }
}

export default Spamalot