import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';


export class Quote extends Component {
    getStyle= ()=> {
        return {
        // backgroundColor:'#fff',
        padding: '10px', 
        fontSize:'18px', 
        color:'#007fff'

        }
    }
  

    render() {
    const { id, text, ki} = this.props.quote;
        return (
            <div className="box">
            <div className="quote">
            {text}
         </div>
         </div>
        
    )
  }
}

// PropTypes
Quote.propTypes= {
    quote: PropTypes.object.isRequired
}



export default Quote