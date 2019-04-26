import React, {Component} from 'react';

class Nav extends Component {

state = {
    count: 0
}

handleCount = () => {
    this.setState({count: this.state.count + 1});
}

    render(){
        return(
            <div className="container">
                <div className="row">
                    <nav className="navbar-light fixed-top">
                        <h2>Clicky Game!</h2>
                        <h3>Click any image to begin!</h3>
                        <h3 className="score">Score: {this.state.count} | Top Score: 0</h3>
                    </nav>
                </div>
            </div>  
        );
    }
}

export default Nav;