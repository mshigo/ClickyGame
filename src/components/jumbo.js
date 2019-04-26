import React, {Component} from 'react';

class Jumbo extends Component {
    render() {
        return(
            <div className="jumbotron-fluid">
                <h1 className="display-4">Clicky Game!</h1>
                <p className="lead">Click on different images to earn points,
                but not ones you've already clicked!</p>
            </div>
        );
    }
}

export default Jumbo;