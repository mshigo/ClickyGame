import React, {Component} from 'react';

class Images extends Component {
    render() {

        // Not sure how to acces the source of the images here.
        let choices = ['star', 'mushroom', 'banana'].map( (name,index) => {
            return <img key={index} className="dynamic-img" src={"./components/images/{name}"} />
        });
        let shellChoices = ['blue-shell', 'red-shell', 'green-shell'].map( (name,index) => {
            return <img key={index} className="dynamic-img" src={"components/images/{name}"} />
        });
        let otherChoices = ['red-koopa', 'bob-omb', 'green-koopa'].map( (name, index) => {
            return <img key={index} className="dynamic-img" src={require("public/images/{name}")}/>
        });
        return(
            <div className="container">
                <div className="row">
                    <div>
                    { choices }
                    </div>

                    <div>
                    { shellChoices }
                    </div>

                    <div>
                    { otherChoices } 
                    </div>
                </div>
            </div>
        );
    }
}

export default Images;