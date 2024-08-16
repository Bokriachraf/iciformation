import React, { Component } from "react";

class Person extends Component {
    state = {
        isSeniorDev : false,
    }
render(){
    const {name,city}=this.props;
    const {isSeniorDev}=this.state
    return(
        <h1>
            This is a person, his name is {name}
            and his city is {city} , {" "}
            {isSeniorDev ? <p>he is a senior dev</p> : null  }
        </h1>

    )
}
}


export default Person;




