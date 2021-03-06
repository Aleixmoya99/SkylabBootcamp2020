import React from 'react';
import PropTypes from 'prop-types';



function Sum({a,b, showAlert}) {
    function clickHandler(event){
        showAlert(a,b);
    }
        return (
            <h1>
                {a}+{b}= <button onClick={clickHandler}>?</button>
            </h1>
        );
}

Sum.propTypes={
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
    showAlert: PropTypes.func.isRequired
}

//Son lo mismo

// class Sum extends React.Component {
//     componentWillMount(){
//         console.info('>>>>>>>>>>>will Mount') //antes de render
//     }
//     componentDidMount(){
//         console.info('>>>>>>>>>>>did Mount') //despues de render
//     }

//     render(){
//         console.info('>>>>>>>>>render'); //durante render
        
//         return (
//             <h1>
//                 {this.props.a}+{this.props.b}={this.props.a+this.props.b}
//             </h1>
//         );
//     }
// }

export default Sum;